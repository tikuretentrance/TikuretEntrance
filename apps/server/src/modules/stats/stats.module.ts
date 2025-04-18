import { Module } from "@nestjs/common";
import { StatsController } from "./controller/stats.controller";
import { StatsService } from "./service/stats.service";
import { ClerkService } from "../user/service/clerk.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentProof } from "src/entities";

@Module({
    imports: [
        TypeOrmModule.forFeature([PaymentProof]),
    ],
    providers: [StatsService, ClerkService],
    controllers: [StatsController],
})
export class StatsModule { }