import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Exam } from './exam.entity';

@Entity('exam_questions')
export class ExamQuestion {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    examId: string;

    @Column()
    text: string;

    @Column('simple-array')
    options: string[];

    @Column()
    correctAnswer: number;

    @Column({ nullable: true })
    explanation: string;

    @Column({ nullable: true })
    topic: string;

    @Column({ nullable: true })
    difficulty: string;

    @Column({ nullable: true })
    imageUrl: string;

    @Column({ nullable: true })
    imageAlt: string;

    @ManyToOne(() => Exam, exam => exam.questions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'examId' })
    exam: Exam;
}