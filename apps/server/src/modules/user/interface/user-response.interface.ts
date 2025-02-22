export interface ClerkUser {
    id: string;
    firstName: string;
    lastName: string;
    emailAddresses: { emailAddress: string }[];
    imageUrl: string;
    createdAt: string;
    lastSignInAt: string;
    accountStatus: string;
    twoFactorEnabled: string;
    emailVerificationStatus: string;
}