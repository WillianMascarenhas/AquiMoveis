import { MigrationInterface, QueryRunner } from "typeorm";

export class UserEntity1693835029678 implements MigrationInterface {
    name = 'UserEntity1693835029678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "zipcode" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "address" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying, "register_date" TIMESTAMP NOT NULL DEFAULT now(), "super_user" boolean, "reset_token" character varying, "reset_token_expiration" TIMESTAMP, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
