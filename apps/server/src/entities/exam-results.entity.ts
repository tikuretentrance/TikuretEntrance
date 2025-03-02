import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Exam } from './exam.entity';

@Entity('exam_results')
export class ExamResult {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    examId: string;

    @Column()
    score: number;

    @Column()
    totalQuestions: number;

    @Column()
    timeSpent: number;

    @Column('simple-json')
    answers: Record<number, number>;

    @Column({ default: true })
    completed: boolean;

    @CreateDateColumn()
    submittedAt: Date;

    @ManyToOne(() => Exam, exam => exam.results)
    @JoinColumn({ name: 'examId' })
    exam: Exam;
}