
import { Module } from "@nestjs/common";
import { ZoomService } from "./service/zoom.service";

@Module({
    providers: [ZoomService],
    exports: [ZoomService],
})
export class ZoomModule { }
