import { BadRequestException, Injectable } from '@nestjs/common';
import { clerkClient } from '@clerk/express';
import { ClerkUser } from '../interface/user-response.interface';

@Injectable()
export class UsersService {
    async listAllUsers() {
        try {
            const users = await clerkClient.users.getUserList();
            const formattedUsers: ClerkUser[] = users.data.map(user => ({
                ...user,
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                emailAddresses: user.emailAddresses || [],
                imageUrl: user.imageUrl || '',
                accountStatus: user.banned ? 'Banned' : user.locked ? 'Locked' : 'Active',
                createdAt: user.createdAt ? new Date(Number(user.createdAt)).toLocaleDateString() : '',
                lastSignInAt: user.lastSignInAt ? new Date(Number(user.lastSignInAt)).toLocaleDateString() : 'Never',
                twoFactorEnabled: user.twoFactorEnabled ? 'Enabled' : 'Disabled',
                emailVerificationStatus: user.emailAddresses[0]?.verification?.status === 'verified' ? 'Verified' : 'Not Verified',
            }));
            return formattedUsers;
        } catch (error) {
            throw new Error(`Failed to fetch users: ${error.message}`);
        }
    }

    async getUserCount() {
        try {
            const users = await clerkClient.users.getUserList();
            return users.totalCount;
        } catch (error) {
            throw new BadRequestException(`Failed to fetch user count: ${error.message}`);
        }
    }
}