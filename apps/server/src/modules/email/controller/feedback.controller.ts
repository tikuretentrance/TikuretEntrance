import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { MailerService } from '../service/mail.service';
import { FeedbackDto } from '../dto/feedback.dto';

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly mailerService: MailerService) { }

    @Post()
    async submitFeedback(@Body() feedbackData: FeedbackDto) {
        try {
            await this.mailerService.sendFeedbackEmail(
                feedbackData,
                process.env.ADMIN_EMAIL
            );
            return { success: true, message: 'Feedback submitted successfully' };
        } catch (error) {
            throw new BadRequestException('Failed to submit feedback');
        }
    }
}