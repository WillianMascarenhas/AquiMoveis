import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { hash } from "bcryptjs";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  name: string;
  @Column()
  phone: string;
  @Column()
  zipcode: string;
  @Column()
  state: string;
  @Column()
  city: string;
  @Column()
  address: string;
  @Column()
  number: string;
  @Column({ nullable: true })
  complement: string;
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  register_date: Date;
  @Column({ nullable: true })
  super_user: boolean
  @Column({ nullable: true })
  reset_token: string
  @Column({ nullable: true, type: "timestamp" })
  reset_token_expiration: Date;

//   @OneToMany(() => Car, (car) => car.user, { onDelete: "CASCADE" })
//   cars: Car[];
//   @OneToMany(() => CarUserComments, (carUserComments) => carUserComments.user)
//   comments: CarUserComments[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
