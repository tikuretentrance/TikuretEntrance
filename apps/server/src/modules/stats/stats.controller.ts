import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from '../user/guard/user-clerk.guard';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
    constructor(private readonly statsService: StatsService) { }

    @Get('dashboard')
    @UseGuards(ClerkAuthGuard)
    async getDashboardStats() {
        return this.statsService.getDashboardStats();
    }
}