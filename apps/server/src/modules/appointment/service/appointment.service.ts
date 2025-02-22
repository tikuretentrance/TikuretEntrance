import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ZoomService } from 'src/modules/zoom/service/zoom.service';
import { MailerService } from 'src/modules/email/service/mail.service';

@Injectable()
export class AppointmentService {
    private readonly logger = new Logger(AppointmentService.name);
    constructor(
        private readonly zoomService: ZoomService,
        private readonly mailerService: MailerService,
    ) { }

    async scheduleAppointment(
        clientEmail: string,
        providerEmail: string,
        adminEmail: string,
        topic: string,
        startTime: string,
        duration: number,
    ) {
        try {
            const meetingDetails = await this.zoomService.createZoomMeeting(
                topic,
                startTime,
                duration,
            );
            // this.logger.log('Meeting details:', meetingDetails);
            await this.mailerService.sendAppointmentEmail(clientEmail, providerEmail, adminEmail, meetingDetails);

            return { success: true, message: 'Appointment scheduled successfully' };
        } catch (error) {
            this.logger.error('Error scheduling appointment:', error);
            throw new BadRequestException('Failed to schedule appointment');
        }
    }

}
