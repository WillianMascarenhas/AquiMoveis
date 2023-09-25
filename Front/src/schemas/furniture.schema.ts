import { z } from "zod";

export const furnitureImageSchema = z.object({
    id: z.number(),
    url: z.string().max(255),
  });

export const furnitureSchema = z.object({
    id: z.number(),
    name: z.string(),
    value: z.number().min(0).refine(value => value > 0, {
        message: 'O valor deve ser um número positivo maior que 0'
    }),
    amount: z.number().min(1).refine(amount => amount >= 1, {
        message: 'A quantidade deve ser um número positivo maior ou igual a 1'
    }),
    is_available: z.boolean().default(true),
    register_date: z.date().nullish().default(() => new Date()),
    furnitureImages: z.array(furnitureImageSchema)
})

export const furnituresArraySchema = z.array(furnitureSchema)