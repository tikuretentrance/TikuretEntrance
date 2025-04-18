import { Injectable } from '@nestjs/common';
import { ClerkService } from 'src/modules/user/service/clerk.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentProof } from 'src/entities';

@Injectable()
export class StatsService {
    constructor(
        private clerkService: ClerkService,
        @InjectRepository(PaymentProof)
        private paymentRepo: Repository<PaymentProof>,
    ) { }

    async getDashboardStats() {
        try {
            const [totalUsers, payments] = await Promise.all([
                this.clerkService.getCount(),
                this.paymentRepo.find()
            ]);

            const paidUsers = payments.filter(p => p.status === 'approved').length;
            const pendingPayments = payments.filter(p => p.status === 'pending').length;

            // For "verified today", we need to query Clerk's API for users created today
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const usersToday = await this.clerkService.getUsersCreatedAfter(today);
            const verifiedToday = usersToday.length;

            return {
                totalUsers,
                paidUsers,
                pendingPayments,
                verifiedToday,
                // Add other stats as needed
            };
        } catch (error) {
            throw new Error(`Failed to fetch dashboard stats: ${error.message}`);
        }
    }
}