import { z } from "zod";
import {
 furnitureImageUpdateSchema,
 furnitureImageRequestSchema,
 furnitureImageResponseSchema,
 furnitureImageSchema,
} from "../schemas/furnitureImages.schema";

export type ICarImage = z.infer<typeof furnitureImageSchema>;
export type ICarImageRequest = z.infer<typeof furnitureImageRequestSchema>;
export type ICarImageResponse = z.infer<typeof furnitureImageResponseSchema>;
export type ICarImageUpdate = z.infer<typeof furnitureImageUpdateSchema>;