import { furnituresArraySchema } from "@/schemas/furniture.schema";
import { z } from "zod";

export type IFurnitures= z.infer<typeof furnituresArraySchema>

export type IFurnitureArray = {
    page: number | undefined | null,
    perPage: number | undefined | null,
    data: IFurnitures
}