import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from '../service/mail.service';

@Controller('contact')
export class ContactController {
    constructor(private readonly mailerService: MailerService) { }

    @Post()
    async submitContactForm(@Body() contactData: {
        name: string;
        email: string;
        subject: string;
        message: string;
    }) {
        try {
            await this.mailerService.sendContactEmail(
                contactData,
                process.env.ADMIN_EMAIL // or your support email
            );
            return { success: true, message: 'Message sent successfully' };
        } catch (error) {
            throw new Error('Failed to send message');
        }
    }
}