import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from 'src/modules/user/guard/user-clerk.guard';
import { StatsService } from '../service/stats.service';

@Controller('stats')
export class StatsController {
    constructor(private readonly statsService: StatsService) { }

    @Get('dashboard')
    @UseGuards(ClerkAuthGuard)
    async getDashboardStats() {
        return this.statsService.getDashboardStats();
    }
}