import { Module } from "@nestjs/common";
import { UsersService } from "./service/user.service";
import { UsersController } from "./controller/user.controller";
import { createClerkClient } from "@clerk/express";

@Module({
    imports: [],
    providers: [
        UsersService,
        {
            provide: 'CLERK_CLIENT',
            useValue: createClerkClient({
                secretKey: process.env.CLERK_SECRET_KEY,
            }),
        },
    ],
    controllers: [UsersController],
})
export class UsersModule { }