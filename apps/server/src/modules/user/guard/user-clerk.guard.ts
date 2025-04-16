import { verifyToken, clerkClient } from '@clerk/express';
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    Logger,
    UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
    private readonly logger = new Logger();

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        try {
            const token = await verifyToken(request.cookies.__session, { secretKey: process.env.CLERK_SECRET_KEY });

            // Check if the user has the admin role
            if (token.metadata !== 'admin') {
                throw new UnauthorizedException('Unauthorized access: Admin role required');
            }

            return true;
        } catch (err) {
            this.logger.error(err);
            throw new UnauthorizedException('Unauthorized access');
        }
    }
}
