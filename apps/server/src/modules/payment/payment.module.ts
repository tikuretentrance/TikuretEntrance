import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsController } from './controller/payment.controller';
import { PaymentsService } from './service/payment.service';
import { PaymentProof } from 'src/entities/payment-proof.entity';
import { ClerkService } from '../user/service/clerk.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([PaymentProof]),
    ],
    controllers: [PaymentsController],
    providers: [PaymentsService, ClerkService],
})
export class PaymentModule { }
