import { z } from "zod"
import { userSchemaResponse } from "./user.schema"

export const cartSchema = z.object({
    id: z.number(),
})
export const cartSchemaRequest = cartSchema.omit({
    id: true,
})
