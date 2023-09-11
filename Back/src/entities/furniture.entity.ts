import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "./cart.entity";

@Entity("furnitures")
export class Furniture {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({unique: true})
  name: string;
  @Column("float")
  value: number;
  @Column()
  amount: number
  @Column({default: true})
  is_available: boolean

  @ManyToOne(() => Cart, (cart) => cart.furniture)
  cart: Cart
}