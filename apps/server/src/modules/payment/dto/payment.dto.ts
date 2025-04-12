export class CreatePaymentDto {
    fullName: string;
    phone: string;
    screenshotUrl: string;
    paymentMethod: string;
}

export class UpdatePaymentDto {
    status?: 'approved' | 'rejected';
    userId?: string; // For when we approve and assign to user
}