import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1695406975063 implements MigrationInterface {
    name = 'InitMigration1695406975063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "zipcode" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "address" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying, "register_date" TIMESTAMP NOT NULL DEFAULT now(), "super_user" boolean NOT NULL DEFAULT false, "reset_token" character varying, "reset_token_expiration" TIMESTAMP, "cartId" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_89502c44bd22c06e714c31c1e9" UNIQUE ("cartId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "furniture_images" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "furnitureId" integer, CONSTRAINT "PK_ea9aa02f13b55077e83971afedc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "furnitures" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "value" double precision NOT NULL, "amount" integer NOT NULL, "is_available" boolean NOT NULL DEFAULT true, "cartId" integer, CONSTRAINT "UQ_0fedf15e6819ac05a45cab39e99" UNIQUE ("name"), CONSTRAINT "PK_7effa6aa3ab998c431ea028393a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carts" ("id" SERIAL NOT NULL, CONSTRAINT "PK_b5f695a59f5ebb50af3c8160816" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_89502c44bd22c06e714c31c1e93" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "furniture_images" ADD CONSTRAINT "FK_7408b3ee0eafd8aa5c74ba590bb" FOREIGN KEY ("furnitureId") REFERENCES "furnitures"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "furnitures" ADD CONSTRAINT "FK_28c6f8c2e69cf8e3e666e863f54" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "furnitures" DROP CONSTRAINT "FK_28c6f8c2e69cf8e3e666e863f54"`);
        await queryRunner.query(`ALTER TABLE "furniture_images" DROP CONSTRAINT "FK_7408b3ee0eafd8aa5c74ba590bb"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_89502c44bd22c06e714c31c1e93"`);
        await queryRunner.query(`DROP TABLE "carts"`);
        await queryRunner.query(`DROP TABLE "furnitures"`);
        await queryRunner.query(`DROP TABLE "furniture_images"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
