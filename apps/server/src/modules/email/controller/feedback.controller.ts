import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from '../service/mail.service';

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly mailerService: MailerService) { }

    @Post()
    async submitFeedback(@Body() feedbackData: {
        name: string;
        phoneNumber: string;
        feedback: string;
    }) {
        try {
            await this.mailerService.sendFeedbackEmail(
                feedbackData,
                process.env.ADMIN_EMAIL // or your support email
            );
            return { success: true, message: 'Feedback submitted successfully' };
        } catch (error) {
            throw new Error('Failed to submit feedback');
        }
    }
}