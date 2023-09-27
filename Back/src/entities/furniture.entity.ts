import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "./cart.entity";
import { FurnitureImages } from "./furnitureImages.entity";

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
  @Column()
  type: string
  @Column({default: true})
  is_available: boolean
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  register_date: Date;

  @OneToMany(() => FurnitureImages, (furnitureImages) => furnitureImages.furniture, { onDelete: "CASCADE" })
  furnitureImages: FurnitureImages[];
  @ManyToOne(() => Cart, (cart) => cart.furniture)
  cart: Cart
}