import { Module } from '@nestjs/common';
import { PaymentService } from './service/payment.service';
import { PaymentController } from './controller/payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from '../../entities/payment.entity';
import { ZoomModule } from '../zoom/zoom.module';
import { AppointmentModule } from '../appointment/appointment.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([PaymentEntity]),
        ZoomModule,
        AppointmentModule
    ],
    controllers: [PaymentController],
    providers: [PaymentService],
})
export class PaymentModule { }
