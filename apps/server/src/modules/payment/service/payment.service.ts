import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentProof } from 'src/entities/payment-proof.entity';
import { CreatePaymentDto, UpdatePaymentDto } from '../dto/payment.dto';
import { ClerkService } from 'src/modules/user/service/clerk.service';

@Injectable()
export class PaymentsService {
    constructor(
        @InjectRepository(PaymentProof)
        private paymentRepo: Repository<PaymentProof>,
        private clerkService: ClerkService,
    ) { }

    async create(createPaymentDto: CreatePaymentDto) {
        const payment = this.paymentRepo.create({
            ...createPaymentDto,
            amount: 499, // Fixed amount
        });
        return await this.paymentRepo.save(payment);
    }

    async findAll(filter?: { status?: string }, page = 1, limit = 10) {
        const [results, total] = await this.paymentRepo.findAndCount({
            where: filter,
            skip: (page - 1) * limit,
            take: limit,
            order: { submittedAt: 'DESC' },
        });

        return {
            data: results,
            total,
            page,
            last_page: Math.ceil(total / limit),
        };
    }

    async updateStatus(id: string, updateDto: UpdatePaymentDto) {
        await this.paymentRepo.update(id, updateDto);
        return this.paymentRepo.findOneBy({ id });
    }

    async approvePayment(id: string) {
        const payment = await this.paymentRepo.findOneBy({ id });
        if (!payment) {
            throw new NotFoundException('Payment not found');
        }

        // Send invitation via Clerk
        try {
            await this.clerkService.inviteUser(payment.email);

            // Alternatively, create user directly if you prefer:
            // const user = await this.clerkService.createUser(
            //   payment.email,
            //   payment.fullName.split(' ')[0],
            //   payment.fullName.split(' ').slice(1).join(' ')
            // );

            // Update payment with user ID if needed
            return await this.paymentRepo.update(id, {
                status: 'approved',
                // userId: invitation.emailAddress // or user.id if creating user directly
            });

        } catch (error) {
            // console.error('Error during approval:', error);
            throw new BadRequestException(error.message || 'Failed to approve payment');
        }
    }

    // async rejectPayment(id: string) {
    //     const payment = await this.paymentRepo.findOneBy({ id });
    //     if (!payment) {
    //         throw new NotFoundException('Payment not found');
    //     }

    //     // Update payment status to rejected
    //     return await this.paymentRepo.update(id, { status: 'rejected' });
    // }
}