import { Controller, Post, Body, Param, Get, Headers, Req, Logger, BadRequestException, RawBodyRequest, Res, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { PaymentService } from '../service/payment.service';
import { PaymentDto } from '../dto/payment.dto';
import { Request, Response } from 'express';
import * as crypto from 'crypto';

@Controller('payment')
@UseInterceptors(ClassSerializerInterceptor)
export class PaymentController {
    private readonly logger = new Logger(PaymentController.name);
    private CHAPA_SECRET = process.env.CHAPA_WEBHOOK_SECRET_HASH || '';
    constructor(
        private readonly paymentService: PaymentService
    ) { }

    @Post('initialize')
    async initializePayment(@Body() paymentDto: PaymentDto) {
        const checkoutUrl = await this.paymentService.initializePayment(paymentDto);
        return { checkoutUrl };
    } 

    @Get('verify/:tx_ref')
    async verifyPayment(@Param('tx_ref') tx_ref: string) {
        const result = await this.paymentService.verifyPayment(tx_ref);
        return result;
    }

    @Post('webhook')
    async handleWebhook(
        @Req() req: Request,
        @Res() res: Response,
        @Headers('Chapa-Signature') chapaSignature: string,
        @Headers('x-chapa-signature') xChapaSignature: string
    ) {
        const rawBody = JSON.stringify(req.body);

        // Generate hash using the raw body and secret key
        const generatedHash = crypto.createHmac('sha256', this.CHAPA_SECRET)
            .update(rawBody)
            .digest('hex');

        this.logger.log('Generated Hash:', generatedHash);
        this.logger.log('Chapa Signature:', chapaSignature);
        this.logger.log('x-chapa-signature:', xChapaSignature);

        /**
         * checking if either signature matches
         */
        if (generatedHash === chapaSignature || generatedHash === xChapaSignature) {
            this.logger.log('Signature verified, processing event:', req.body);

            // Extract the event from the request body
            const event = req.body;

            try {
                switch (event.event) {
                    case 'charge.success':
                        this.logger.log('Payment successful:', {
                            first_name: event.first_name,
                            last_name: event.last_name,
                            email: event.email,
                            amount: event.amount,
                            currency: event.currency,
                            reference: event.reference,
                            status: event.status,
                        });
                        break;

                    case 'charge.failed/cancelled':
                        this.logger.error('Payment failed:', event);
                        break;
                    case 'charge.refunded':
                        this.logger.warn('Payment refunded:', event);
                        break;
                    case 'charge.reversed':
                        this.logger.warn('Payment reversed:', event);
                        break;

                    default:
                        this.logger.debug('Unknown event type:', event.event);
                        break;
                }

                // acknowledge the webhook after processing the event
                res.status(200).send('Webhook processed successfully');
            } catch (error) {
                this.logger.error('Error processing event:', error);
                res.status(500).send('Internal server error');
            }
        } else {
            this.logger.error('Invalid webhook signature, discarding request.');
            res.status(400).send('Invalid signature');
        }
        return;

    }
}