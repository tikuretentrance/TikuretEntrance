import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ZoomService } from '../zoom/service/zoom.service';
import { AppointmentService } from './service/appointment.service';
import { MailerService } from '../email/service/mail.service';

@Module({
    imports: [HttpModule],
    providers: [ZoomService, AppointmentService, MailerService],
    exports: [AppointmentService],
})
export class AppointmentModule { }
