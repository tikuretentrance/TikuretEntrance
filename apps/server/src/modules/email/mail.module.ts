import { Module } from "@nestjs/common";
import { MailerService } from "./service/mail.service";
import { FeedbackController } from "./controller/feedback.controller";
import { ContactController } from "./controller/contact.controller";

@Module({
    imports: [],
    controllers: [FeedbackController, ContactController],
    providers: [MailerService],
    exports: [MailerService]
})

export class MailerModule { }