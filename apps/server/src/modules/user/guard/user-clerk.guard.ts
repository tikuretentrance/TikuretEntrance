import { verifyToken } from '@clerk/express';
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    Logger,
    UnauthorizedException,
} from '@nestjs/common';

interface ClerkToken {
    metadata: {
        role: string;
    };
}

@Injectable()
export class ClerkAuthGuard implements CanActivate {
    private readonly logger = new Logger();

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.cookies.__session || request.headers.authorization?.split(' ')[1];

        // this.logger.log(`Received token: ${token}`);

        if (!token) {
            throw new UnauthorizedException('Missing token');
        }

        try {
            const decodedToken = await verifyToken(token, { secretKey: process.env.CLERK_SECRET_KEY }) as unknown as ClerkToken;

            // this.logger.log(`Decoded token: ${JSON.stringify(decodedToken)}`);

            // Check if the user has the admin role
            if (decodedToken.metadata?.role !== 'admin') {
                throw new UnauthorizedException('Unauthorized access: Admin role required');
            }

            return true;
        } catch (err) {
            this.logger.error(err);
            throw new UnauthorizedException('Unauthorized access');
        }
    }
}
