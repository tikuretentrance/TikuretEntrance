import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";

export class CustomizationDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    logo?: string;
}

export class AppointmentDetailsDto {
    topic: string;
    startTime: string;
    duration: number;
    providerId: string;
    providerEmail: string;
}

export class PaymentDto {
    @IsOptional()
    @IsString()
    first_name?: string;

    @IsOptional()
    @IsString()
    last_name?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    phone_number?: string;

    @IsString()
    currency: "ETB" | "USD";

    @IsString()
    amount: string;

    @IsString()
    @IsNotEmpty()
    tx_ref: string;

    @IsOptional()
    @IsString()
    callback_url?: string;

    @IsOptional()
    @IsString()
    return_url?: string;

    // @IsOptional()
    // @ValidateNested()
    // @Type(() => CustomizationDto)
    customization?: CustomizationDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => AppointmentDetailsDto)
    appointmentDetails: AppointmentDetailsDto;
}




/**
 * 
 * WIthout a validation 
 * 
 * export class PaymentDto {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    currency: "ETB" | "USD";
    amount: string;
    callbackUrl?: string;
    returnUrl?: string;
    customization?: {
        title?: string;
        description?: string;
        logo?: string;
    }
}

class CustomizationDto {
    title?: string;
    description?: string;
    logo?: string;
}
 */