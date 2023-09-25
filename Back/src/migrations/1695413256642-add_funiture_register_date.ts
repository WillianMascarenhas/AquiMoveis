import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFunitureRegisterDate1695413256642 implements MigrationInterface {
    name = 'AddFunitureRegisterDate1695413256642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "furnitures" ADD "register_date" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "furnitures" DROP COLUMN "register_date"`);
    }

}
