import { Module } from "@nestjs/common";
import { MailerService } from "./service/mail.service";

@Module({
    imports: [],
    controllers: [],
    providers: [MailerService],
    exports: [MailerService]
})

export class MailerModule { }