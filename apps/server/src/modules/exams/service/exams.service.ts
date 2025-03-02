import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExamQuestion } from 'src/entities/exam-questions.entity';
import { ExamResult } from 'src/entities/exam-results.entity';
import { Exam } from 'src/entities/exam.entity';
import { Repository } from 'typeorm';
import { CreateExamDto } from '../dto/create-exam.dto';
import { CreateResultDto } from '../dto/create-result.dto';

@Injectable()
export class ExamsService {
    constructor(
        @InjectRepository(Exam)
        private examsRepository: Repository<Exam>,
        @InjectRepository(ExamQuestion)
        private questionsRepository: Repository<ExamQuestion>,
        @InjectRepository(ExamResult)
        private resultsRepository: Repository<ExamResult>,
    ) { }

    async findAll(filters?: any): Promise<Exam[]> {
        const query = this.examsRepository.createQueryBuilder('exam');

        if (filters?.stream) {
            query.andWhere('exam.stream = :stream', { stream: filters.stream });
        }

        if (filters?.subject) {
            query.andWhere('exam.subject = :subject', { subject: filters.subject });
        }

        if (filters?.year) {
            query.andWhere('exam.year = :year', { year: filters.year });
        }

        return query.getMany();
    }

    async findOne(id: string): Promise<Exam> {
        const exam = await this.examsRepository.findOne({
            where: { id },
            relations: {
                questions: true,
            },
        });

        if (!exam) {
            throw new NotFoundException(`Exam with ID ${id} not found`);
        }

        return exam;
    }

    async create(createExamDto: CreateExamDto): Promise<Exam> {
        const { questions, ...examData } = createExamDto;

        const exam = this.examsRepository.create(examData);
        const savedExam = await this.examsRepository.save(exam);

        if (questions && questions.length > 0) {
            const examQuestions = questions.map(q => {
                const question = this.questionsRepository.create(q);
                question.examId = savedExam.id;
                return question;
            });

            await this.questionsRepository.save(examQuestions);
        }

        return this.findOne(savedExam.id);
    }

    async submitResult(createResultDto: CreateResultDto): Promise<ExamResult> {
        const exam = await this.examsRepository.findOneBy({ id: createResultDto.examId });

        if (!exam) {
            throw new NotFoundException(`Exam with ID ${createResultDto.examId} not found`);
        }

        const result = this.resultsRepository.create(createResultDto);
        const savedResult = await this.resultsRepository.save(result);

        // Update exam statistics
        await this.updateExamStatistics(createResultDto.examId);

        return savedResult;
    }

    async getUserResults(userId: string): Promise<ExamResult[]> {
        return this.resultsRepository.find({
            where: { userId },
            relations: {
                exam: true,
            },
        });
    }

    private async updateExamStatistics(examId: string): Promise<void> {
        const results = await this.resultsRepository.find({
            where: { examId, completed: true },
        });

        const attempts = results.length;
        const totalScore = results.reduce((sum, result) => sum + result.score, 0);
        const averageScore = attempts > 0 ? Math.round((totalScore / attempts) * 100) / 100 : 0;

        await this.examsRepository.update(examId, {
            attempts,
            averageScore,
        });
    }
}