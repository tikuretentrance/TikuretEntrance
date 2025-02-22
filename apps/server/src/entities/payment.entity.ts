import { AppointmentDetailsDto, CustomizationDto } from 'src/modules/payment/dto/payment.dto';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('payments')
export class PaymentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    tx_ref: string;

    @Column()
    amount: string;

    @Column()
    currency: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    phone_number: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    payment_status: string;

    @Column('jsonb', { nullable: true })
    customization: CustomizationDto;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @Column('jsonb', { nullable: true })
    appointmentDetails: AppointmentDetailsDto;
}
