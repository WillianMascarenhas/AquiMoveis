import { z } from "zod"
import { cartSchema, cartSchemaRequest } from "./cart.schema"

export const userSchema = z.object({
    id: z.number(),
    email: z.string().email().max(255),
    password: z.string().max(255),
    name: z.string().max(255),
    phone: z.string().max(255),
    zipcode: z.string().max(255),
    state: z.string().max(255),
    city: z.string().max(255),
    address: z.string().max(255),
    number: z.string().max(255),
    complement: z.string().max(255).default(""),
    register_date: z.date().nullish().default(() => new Date()),
    super_user: z.boolean().default(false),
    reset_token: z.string().nullish(),
    reset_token_expiration: z.string().nullish(),
})

export const userSchemaRequest = userSchema.omit({
    id: true,
    register_date: true,
    super_user: true,
    reset_token: true,
    reset_token_expiration: true,
    cart: true
})

export const usersSchema = userSchema.omit({
    password: true
})

export const usersSchemaResponse = usersSchema.array()

export const userSchemaResponse = userSchema.omit({
    password: true
}).extend({cart:cartSchema})

export const userSchemaUpdate = userSchema.partial()