import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateDefaultAmount1744782552031 implements MigrationInterface {
    name = 'UpdateDefaultAmount1744782552031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment_proof" ALTER COLUMN "amount" SET DEFAULT '499'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment_proof" ALTER COLUMN "amount" SET DEFAULT '999'`);
    }

}
