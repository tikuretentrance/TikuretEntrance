import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ExamQuestion } from './exam-questions.entity';
import { ExamResult } from './exam-results.entity';

@Entity('exams')
export class Exam {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    subject: string;

    @Column()
    stream: string;

    @Column()
    year: number;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column({ default: 0 })
    attempts: number;

    @Column({ type: 'float', default: 0 })
    averageScore: number;

    @OneToMany(() => ExamQuestion, question => question.exam, { cascade: true })
    questions: ExamQuestion[];

    @OneToMany(() => ExamResult, result => result.exam)
    results: ExamResult[];
}