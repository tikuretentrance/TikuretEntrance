import { MigrationInterface, QueryRunner } from "typeorm";

export class EmailColumnAdded1744833913703 implements MigrationInterface {
    name = 'EmailColumnAdded1744833913703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment_proof" ADD "email" character varying NOT NULL DEFAULT 'default@example.com'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment_proof" DROP COLUMN "email"`);
    }

}
