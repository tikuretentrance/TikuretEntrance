import { MigrationInterface, QueryRunner } from "typeorm";

export class PaymentProof1744483374095 implements MigrationInterface {
    name = 'PaymentProof1744483374095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."payment_proof_status_enum" AS ENUM('pending', 'approved', 'rejected')`);
        await queryRunner.query(`CREATE TABLE "payment_proof" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "phone" character varying NOT NULL, "amount" double precision NOT NULL DEFAULT '999', "screenshotUrl" character varying NOT NULL, "status" "public"."payment_proof_status_enum" NOT NULL DEFAULT 'pending', "paymentMethod" character varying NOT NULL, "userId" character varying, "submittedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_64c0963ecc0ec5d064ebefff10f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "payment_proof"`);
        await queryRunner.query(`DROP TYPE "public"."payment_proof_status_enum"`);
    }

}
