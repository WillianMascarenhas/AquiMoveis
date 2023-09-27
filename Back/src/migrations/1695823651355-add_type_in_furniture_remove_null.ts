import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTypeInFurnitureRemoveNull1695823651355 implements MigrationInterface {
    name = 'AddTypeInFurnitureRemoveNull1695823651355'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "furnitures" ALTER COLUMN "type" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "furnitures" ALTER COLUMN "type" DROP NOT NULL`);
    }

}
