import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentModule } from './modules/payment/payment.module';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from './modules/email/mail.module';
import { UsersModule } from './modules/user/user.module';
import { ExamsModule } from './modules/exams/exams.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        PSQL_HOST: Joi.string().required(),
        PSQL_PORT: Joi.number().required(),
        PSQL_USER: Joi.string().required(),
        PSQL_PASSWORD: Joi.string().required(),
        PSQL_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PSQL_HOST || 'localhost',
      port: +process.env.PSQL_PORT || 5432,
      username: process.env.PSQL_USER || '',
      password: process.env.PSQL_PASSWORD || '',
      database: process.env.PSQL_DB || '',
      synchronize: false,
      entities: ['dist/entities/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsRun: true,
      logging: false,
      migrationsTableName: 'mela_migration_table',
    }),

    PaymentModule,
    MailerModule,
    UsersModule,
    ExamsModule,
  ],
})
export class AppModule { }
