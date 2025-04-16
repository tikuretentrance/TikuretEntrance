import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class PaymentProof {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fullName: string;

    @Column()
    phone: string;

    @Column({ type: 'float', default: 499 }) // Default amount
    amount: number;

    @Column({ default: "default@example.com" })
    email: string;

    @Column()
    screenshotUrl: string;

    @Column({
        type: 'enum',
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    })
    status: string;

    @Column()
    paymentMethod: string; // 'cbe', 'awash', or 'telebirr'

    @Column({ nullable: true })
    userId?: string; // Will be set when approved

    @CreateDateColumn()
    submittedAt: Date;
}