import { Controller, Get, Post, Body, Query, Param, Patch, UseGuards, BadRequestException } from '@nestjs/common';
import { PaymentsService } from '../service/payment.service';
import { CreatePaymentDto } from '../dto/payment.dto';
import { ClerkAuthGuard } from 'src/modules/user/guard/user-clerk.guard';

@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) { }

    @Post()
    // @UseGuards(ClerkAuthGuard)
    create(@Body() createPaymentDto: CreatePaymentDto) {
        return this.paymentsService.create(createPaymentDto);
    }

    @Get()
    @UseGuards(ClerkAuthGuard)
    findAll(
        @Query('status') status: string,
        @Query('page') page = 1,
        @Query('limit') limit = 10,
    ) {
        return this.paymentsService.findAll(
            status ? { status } : undefined,
            Number(page),
            Number(limit),
        );
    }

    @Patch(':id/approve')
    @UseGuards(ClerkAuthGuard)
    async approve(@Param('id') id: string) {
        // try {
        return await this.paymentsService.approvePayment(id);
        // } catch (error) {
        //     throw new BadRequestException(error.message);
        // }
    }

    @Patch(':id/reject')
    @UseGuards(ClerkAuthGuard)
    reject(@Param('id') id: string) {
        return this.paymentsService.updateStatus(id, { status: 'rejected' });
    }
}
