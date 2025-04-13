import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from '../service/mail.service';
import { ContactDto } from '../dto/contact.dto';

@Controller('contact')
export class ContactController {
    constructor(private readonly mailerService: MailerService) { }

    @Post()
    async submitContactForm(@Body() contactData: ContactDto) {
        try {
            await this.mailerService.sendContactEmail(
                contactData,
                process.env.ADMIN_EMAIL
            );
            return { success: true, message: 'Message sent successfully' };
        } catch (error) {
            throw new Error('Failed to send message');
        }
    }
}