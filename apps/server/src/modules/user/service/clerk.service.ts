import { BadRequestException, ConflictException, Inject, Injectable } from '@nestjs/common';
import { ClerkClient, clerkClient } from '@clerk/express';

@Injectable()
export class ClerkService {
    constructor() { }

    async inviteUser(email: string) {
        try {
            const existingUsers = await clerkClient.users.getUserList({ emailAddress: [email] });

            if (existingUsers.data.length > 0) {
                throw new ConflictException('TikuretEntrance User already exists');
            }

            const invitation = await clerkClient.invitations.createInvitation({
                emailAddress: email,
                redirectUrl: process.env.CLERK_SIGN_UP_REDIRECT_URL,
                publicMetadata: {
                    signupSource: 'payment-approval'
                },
                notify: true,
                ignoreExisting: true,
            });

            return invitation;
        } catch (error) {
            throw new ConflictException(error.message);

        }
    }

    async createUser(email: string, firstName: string, lastName: string, username?: string) {
        try {
            const user = await clerkClient.users.createUser({
                emailAddress: [email],
                firstName,
                lastName,
            });

            return user;
        } catch (error) {
            // console.error('Error creating user:', error);
            throw new BadRequestException('Failed to create user');
        }
    }

    // async getUserList() {
    //     try {
    //         const users = await clerkClient.users.getUserList();
    //         return users;
    //     } catch (error) {
    //         // console.error('Error fetching users:', error);
    //         throw new BadRequestException('Failed to fetch users');
    //     }
    // }
}
