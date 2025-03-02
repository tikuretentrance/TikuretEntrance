import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamsController } from './controller/exams.controller';
import { ExamQuestion } from 'src/entities/exam-questions.entity';
import { ExamResult } from 'src/entities/exam-results.entity';
import { Exam } from 'src/entities/exam.entity';
import { ExamsService } from './service/exams.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Exam, ExamQuestion, ExamResult]),
    ],
    controllers: [ExamsController],
    providers: [ExamsService],
    exports: [ExamsService],
})
export class ExamsModule { }