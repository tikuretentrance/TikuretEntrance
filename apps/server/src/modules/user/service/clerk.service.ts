import { BadRequestException, ConflictException, Inject, Injectable } from '@nestjs/common';
import { ClerkClient, clerkClient, Invitation } from '@clerk/express';
import { PaginatedResourceResponse } from '@clerk/backend/dist/api/resources/Deserializer';

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
                username,
                lastName,
            });

            return user;
        } catch (error) {
            // console.error('Error creating user:', error);
            throw new BadRequestException('Failed to create user');
        }
    }

    async getInvitationList(): Promise<PaginatedResourceResponse<Invitation[]>> {
        try {
            const invitations = await clerkClient.invitations.getInvitationList();
            return invitations;
        } catch (error) {
            // console.error('Error fetching invitations:', error);
            throw new BadRequestException('Failed to fetch invitations');
        }
    }

    async getCount() {
        try {
            const users = await clerkClient.users.getCount();
            return users;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    /**
     * 
     * @param date - The date to filter users by. Only users created after this date will be returned.
     * @returns  A list of users created after the specified date.
     * @throws BadRequestException if the request fails.
     *
    **/

    async getUsersCreatedAfter(date: Date) {
        try {
            const users = await clerkClient.users.getUserList();
            const filteredUsers = users.data.filter(user => new Date(user.createdAt).getTime() > date.getTime());
            return filteredUsers;
        } catch (error) {
            throw new BadRequestException('Failed to fetch users created after the specified date');
        }        // return users.data;/
    } catch(error) {
        throw new Error(`Failed to fetch users: ${error.message}`);
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

