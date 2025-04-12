// payments.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentProof } from 'src/entities/payment-proof.entity';
import { CreatePaymentDto, UpdatePaymentDto } from '../dto/payment.dto';

@Injectable()
export class PaymentsService {
    constructor(
        @InjectRepository(PaymentProof)
        private paymentRepo: Repository<PaymentProof>,
    ) { }

    async create(createPaymentDto: CreatePaymentDto) {
        const payment = this.paymentRepo.create({
            ...createPaymentDto,
            amount: 999, // Fixed amount
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
}