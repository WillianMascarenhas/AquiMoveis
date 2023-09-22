import { z } from "zod";

export const furnitureImageSchema = z.object({
  id: z.number(),
  url: z.string().max(255),
});
export const furnitureImageRequestSchema = furnitureImageSchema.omit({
  id: true,
});
export const furnitureImageResponseSchema = z.object({
  id: z.number(),
  url: z.string(),
  carId: z.number()
});

export const furnitureImageUpdateSchema = z.object({
  url: z.string().max(255).optional(),
})