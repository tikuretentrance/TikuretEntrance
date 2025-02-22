import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  port: configService.get('PSQL_PORT'),
  host: configService.get('PSQL_HOST'),
  password: configService.get('PSQL_PASSWORD'),
  username: configService.get('PSQL_USER'),
  entities: ['dist/entities/*.entity{.ts,.js}'],
  database: configService.get('PSQL_DB'),
});
