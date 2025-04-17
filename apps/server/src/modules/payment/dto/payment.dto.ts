import { IsEmail, IsNotEmpty, IsString, ValidateIf } from "class-validator";

export class CreatePaymentDto {
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsNotEmpty()
    @IsString()
    @ValidateIf(
        (o) => o.phone.startsWith('+251') && o.phone.length === 13,
    )
    phone: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    screenshotUrl: string;

    @IsNotEmpty()
    @IsString()
    paymentMethod: "cbe" | "awash" | "telebirr";
}

export class UpdatePaymentDto {
    @IsString()
    status?: 'approved' | 'rejected';

    @IsString()
    userId?: string; // For when we approve and assign to user
}