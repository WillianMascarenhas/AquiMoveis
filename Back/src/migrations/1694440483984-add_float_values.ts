import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFloatValues1694440483984 implements MigrationInterface {
    name = 'AddFloatValues1694440483984'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "furnitures" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "furnitures" ADD "value" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "furnitures" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "furnitures" ADD "value" integer NOT NULL`);
    }

}
