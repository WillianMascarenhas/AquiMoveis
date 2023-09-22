import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Furniture } from "./furniture.entity";

@Entity("furniture_images")
export class FurnitureImages {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  url: string;

  @ManyToOne(() => Furniture, (furniture) => furniture.furnitureImages, { onDelete: "CASCADE" })
  furniture: Furniture;
}