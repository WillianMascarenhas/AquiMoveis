import { z } from "zod"
import { userSchemaResponse } from "./user.schema"
import { furnitureSchema } from "./furniture.schema"

export const cartSchema = z.object({
    id: z.number(),
    furniture: furnitureSchema.array().default([])
})
export const cartSchemaRequest = cartSchema.omit({
    id: true,
    furniture: true
})
export const cartToAddSchema = z.object({
    furniture: z.number().array().nullish(),
    delete_furniture: z.number().nullish()
})


