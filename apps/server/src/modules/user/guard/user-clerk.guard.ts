import { verifyToken } from '@clerk/express';
import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { ForbiddenException, UnauthorizedException } from '@nestjs/common';

// Define the expected token payload structure
interface ClerkTokenPayload {
    userId?: string;
    claims?: {
        metadata?: {
            role?: string;
        };
        // Add other claims you expect to use
    };
    // Add other payload fields you expect
}

@Injectable()
export class ClerkAuthGuard implements CanActivate {
    private readonly logger = new Logger(ClerkAuthGuard.name);

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        // Get token from either cookie or header
        const sessToken = request.cookies.__session;
        const bearerToken = request.headers.authorization?.replace('Bearer ', '');
        const token = sessToken || bearerToken;

        if (!token) {
            this.logger.warn('No authentication token found');
            throw new UnauthorizedException('Authentication required');
        }

        try {
            // Verify the token and type it as our expected payload
            const payload = await verifyToken(token, {
                secretKey: process.env.CLERK_SECRET_KEY
            }) as ClerkTokenPayload;

            // Safely check for admin role
            const role = payload?.claims?.metadata?.role;
            if (role !== 'admin') {
                this.logger.warn(`User ${payload.userId} attempted admin access with role: ${role}`);
                throw new ForbiddenException('Admin access required');
            }

            // Attach user to request for controllers to use
            request.user = {
                id: payload.userId,
                role: role
            };

            return true;
        } catch (err) {
            this.logger.error('Authentication error:', err);
            throw new UnauthorizedException('Invalid or expired token');
        }
    }
}