import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTypeInFurniture1695821616954 implements MigrationInterface {
    name = 'AddTypeInFurniture1695821616954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "furnitures" ADD "type" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "furnitures" DROP COLUMN "type"`);
    }

}
