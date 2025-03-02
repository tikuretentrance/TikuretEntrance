import { IsString, IsNumber, IsBoolean, IsObject } from 'class-validator';

export class CreateResultDto {
    @IsString()
    examId: string;

    @IsString()
    userId: string;

    @IsNumber()
    score: number;

    @IsNumber()
    totalQuestions: number;

    @IsNumber()
    timeSpent: number;

    @IsObject()
    answers: Record<number, number>;

    @IsBoolean()
    completed: boolean;
}