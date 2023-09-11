import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Furniture } from "./furniture.entity";

@Entity("carts")
export class Cart {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToOne(() => User, (user) => user.cart,{ onDelete: "CASCADE"})
  user: User
  
  @OneToMany(() => Furniture, (Furniture) => Furniture.cart)
  furniture: Furniture[]
}