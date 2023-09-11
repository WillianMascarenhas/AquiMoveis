import { number, z } from "zod";

export const furnitureSchema = z.object({
    id: z.number(),
    name: z.string(),
    value: z.number().min(0).refine(value => value > 0, {
        message: 'O valor deve ser um número positivo maior que 0'
    }),
    amount: z.number().min(1).refine(amount => amount >= 1, {
        message: 'A quantidade deve ser um número positivo maior ou igual a 1'
    }),
    is_available: z.boolean().default(true)
})

export const furnituresResponseSchema = furnitureSchema.array()

export const furnitureRequestSchema = furnitureSchema.omit({
    id: true,
    is_available: true
})

export const furnitureUpdateSchema = furnitureSchema.partial().omit({ id: true }).extend({
    amount: z.number().min(0).refine(amount => Number.isInteger(amount), {
        message: 'A quantidade deve ser um número inteiro'
    }),
});

