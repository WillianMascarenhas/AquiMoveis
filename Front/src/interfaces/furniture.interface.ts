import { furnituresArraySchema } from "@/schemas/furniture.schema";
import { z } from "zod";

export type IFurnitureArray = z.infer<typeof furnituresArraySchema>