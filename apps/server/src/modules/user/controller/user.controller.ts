import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from '../service/user.service';
import { ClerkAuthGuard } from '../guard/user-clerk.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @UseGuards(ClerkAuthGuard)
    async getAllUsers() {
        return this.usersService.listAllUsers();
    }
}