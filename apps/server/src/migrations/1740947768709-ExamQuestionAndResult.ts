import { MigrationInterface, QueryRunner } from "typeorm";

export class ExamQuestionAndResult1740947768709 implements MigrationInterface {
    name = 'ExamQuestionAndResult1740947768709'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tx_ref" character varying NOT NULL, "amount" character varying NOT NULL, "currency" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "payment_status" character varying NOT NULL, "customization" jsonb, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "appointmentDetails" jsonb, CONSTRAINT "UQ_a8a7d8c89a4ef936b9ad7028d23" UNIQUE ("tx_ref"), CONSTRAINT "PK_197ab7af18c93fbb0c9b28b4a59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exam_questions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "examId" uuid NOT NULL, "text" character varying NOT NULL, "options" text NOT NULL, "correctAnswer" integer NOT NULL, "explanation" character varying, "topic" character varying, "difficulty" character varying, "imageUrl" character varying, "imageAlt" character varying, CONSTRAINT "PK_a214d47c7964cb6356f413dc73c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exam_results" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" character varying NOT NULL, "examId" uuid NOT NULL, "score" integer NOT NULL, "totalQuestions" integer NOT NULL, "timeSpent" integer NOT NULL, "answers" text NOT NULL, "completed" boolean NOT NULL DEFAULT true, "submittedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_07d4ea139ed7ca111c75df2de12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exams" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "subject" character varying NOT NULL, "stream" character varying NOT NULL, "year" integer NOT NULL, "description" character varying NOT NULL, "duration" integer NOT NULL, "attempts" integer NOT NULL DEFAULT '0', "averageScore" double precision NOT NULL DEFAULT '0', CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "exam_questions" ADD CONSTRAINT "FK_ecf1b78afe040b8995707914c49" FOREIGN KEY ("examId") REFERENCES "exams"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exam_results" ADD CONSTRAINT "FK_7ef2a5e17cf50726d548405acfe" FOREIGN KEY ("examId") REFERENCES "exams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exam_results" DROP CONSTRAINT "FK_7ef2a5e17cf50726d548405acfe"`);
        await queryRunner.query(`ALTER TABLE "exam_questions" DROP CONSTRAINT "FK_ecf1b78afe040b8995707914c49"`);
        await queryRunner.query(`DROP TABLE "exams"`);
        await queryRunner.query(`DROP TABLE "exam_results"`);
        await queryRunner.query(`DROP TABLE "exam_questions"`);
        await queryRunner.query(`DROP TABLE "payments"`);
    }

}
