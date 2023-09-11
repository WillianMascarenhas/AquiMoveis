import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSuperUserDefault1694440674477 implements MigrationInterface {
    name = 'AddSuperUserDefault1694440674477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "super_user" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "super_user" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "super_user" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "super_user" DROP NOT NULL`);
    }

}
