import { IsString, IsNumber, IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateQuestionDto {
    @IsString()
    text: string;

    @IsArray()
    options: string[];

    @IsNumber()
    correctAnswer: number;

    @IsString()
    @IsOptional()
    explanation?: string;

    @IsString()
    @IsOptional()
    topic?: string;

    @IsString()
    @IsOptional()
    difficulty?: string;

    @IsString()
    @IsOptional()
    imageUrl?: string;

    @IsString()
    @IsOptional()
    imageAlt?: string;
}

export class CreateExamDto {
    @IsString()
    subject: string;

    @IsString()
    stream: string;

    @IsNumber()
    year: number;

    @IsString()
    description: string;

    @IsNumber()
    duration: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateQuestionDto)
    @IsOptional()
    questions?: CreateQuestionDto[];
}