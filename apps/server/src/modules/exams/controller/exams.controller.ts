import { Controller, Get, Post, Body, Param, Query, UseGuards, Req } from '@nestjs/common';
import { ClerkAuthGuard } from 'src/modules/user/guard/user-clerk.guard';
import { CreateExamDto } from '../dto/create-exam.dto';
import { CreateResultDto } from '../dto/create-result.dto';
import { ExamsService } from '../service/exams.service';
import { clerkClient } from '@clerk/express';

@Controller('exams')
export class ExamsController {
    constructor(private readonly examsService: ExamsService) { }

    @Get()
    findAll(@Query() query: any) {
        return this.examsService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.examsService.findOne(id);
    }

    @Post()
    @UseGuards(ClerkAuthGuard)
    create(@Body() createExamDto: CreateExamDto) {
        return this.examsService.create(createExamDto);
    }

    @Post('results')
    @UseGuards(ClerkAuthGuard)
    async submitResult(@Body() createResultDto: CreateResultDto, @Req() req: any) {
        // Access the authenticated user from the request
        const userId = req.user.id;  // Assuming req.user contains the authenticated user data

        // Fetch the authenticated user's details using Clerk API
        try {
            await clerkClient.users.getUser(userId);
            createResultDto.userId = userId;
            return this.examsService.submitResult(createResultDto);
        } catch (error) {
            throw new Error('Error fetching user data from Clerk');
        }
    }

    @Get('user/results')
    @UseGuards(ClerkAuthGuard)
    async getUserResults(@Req() req: any) {
        const userId = req.user.id; // Access the authenticated user from the request

        // Fetch the authenticated user's details using Clerk API
        try {
            await clerkClient.users.getUser(userId);
            return this.examsService.getUserResults(userId);
        } catch (error) {
            throw new Error('Error fetching user data from Clerk');
        }
    }
}