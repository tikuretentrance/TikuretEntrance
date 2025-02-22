import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Chapa } from 'chapa-nodejs';
import { PaymentDto } from '../dto/payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentEntity } from '../../../entities/payment.entity';
import { AppointmentService } from '../../appointment/service/appointment.service';

@Injectable()
export class PaymentService {
    private chapa: Chapa;
    private readonly logger = new Logger(PaymentService.name);

    constructor(
        @InjectRepository(PaymentEntity)
        private readonly paymentRepository: Repository<PaymentEntity>,
        private readonly appointmentService: AppointmentService,
    ) {
        this.chapa = new Chapa({
            secretKey: process.env.CHAPA_SECRET_KEY || '',
        });
    }

    private async generateTransactionReference(): Promise<string> {
        try {
            return await this.chapa.genTxRef();
        } catch (error) {
            throw new BadRequestException('Failed to generate transaction reference', error.message);
        }
    }

    async initializePayment(paymentDto: PaymentDto): Promise<string> {
        this.logger.log('Initializing payment...');
        try {
            // const tx_ref = await this.generateTransactionReference();
            // this.logger.log(`Generated tx_ref: ${tx_ref}`);

            const response = await this.chapa.initialize({
                first_name: paymentDto.first_name,
                last_name: paymentDto.last_name,
                email: paymentDto.email,
                phone_number: paymentDto.phone_number,
                currency: paymentDto.currency,
                amount: paymentDto.amount,
                tx_ref: paymentDto.tx_ref,
                callback_url: paymentDto.callback_url,
                return_url: paymentDto.return_url,
                // customization: {
                //     title: paymentDto.customization?.title,
                //     description: paymentDto.customization?.description,
                //     logo: paymentDto.customization?.logo,
                // },
            });

            const payment = this.paymentRepository.create({
                tx_ref: paymentDto.tx_ref,
                amount: paymentDto.amount,
                currency: paymentDto.currency,
                email: paymentDto.email,
                phone_number: paymentDto.phone_number,
                first_name: paymentDto.first_name,
                last_name: paymentDto.last_name,
                payment_status: 'pending',
                // customization: paymentDto.customization,
                appointmentDetails: paymentDto.appointmentDetails,
            });
            await this.paymentRepository.save(payment);


            this.logger.log(`Payment initialized successfully, checkout URL: ${response.data.checkout_url}`);
            return response.data.checkout_url;

        } catch (error) {
            this.logger.error('Error initializing payment:', error.response?.data || error.message);
            throw new BadRequestException('Payment initialization failed');
        }
    }

    async verifyPayment(tx_ref: string) {
        this.logger.log(`Verifying payment for tx_ref: ${tx_ref}`);
        try {
            const payment = await this.paymentRepository.findOne({ where: { tx_ref } });
            if (!payment) {
                throw new BadRequestException('Payment not found');
            }

            if (payment.payment_status === 'success') { 
                // this.logger.log('Payment already verified and successful, skipping verification.');
                throw new BadRequestException('Payment already verified and successful');
            }

            const response = await this.chapa.verify({ tx_ref });
            // this.logger.log('Payment verification successful:', response);

            // Update payment status in the database
            payment.payment_status = response.data.status;
            await this.paymentRepository.save(payment);

            if (payment.payment_status === 'success' && payment.appointmentDetails) {
                const { appointmentDetails } = payment;
                await this.appointmentService.scheduleAppointment(
                    payment.email,
                    appointmentDetails.providerEmail,
                    process.env.ADMIN_EMAIL,
                    appointmentDetails.topic,
                    appointmentDetails.startTime,
                    appointmentDetails.duration,
                );
            }

            return response;
        } catch (error) {
            this.logger.error('Error verifying payment:', error.message);
            throw new BadRequestException('Payment verification failed');
        }
    }
}
