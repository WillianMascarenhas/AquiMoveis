import { z } from "zod"

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
    super_user: z.boolean().nullish().default(false),
    reset_token: z.string().nullish(),
    reset_token_expiration: z.string().nullish(),
})

export const userSchemaRequest = userSchema.omit({
    id: true,
    register_date: true,
    super_user: true,
    reset_token: true,
    reset_token_expiration: true
})

export const usersSchemaResponse = userSchema.array()

export const userSchemaResponse = userSchema.omit({
    password: true
})
export const userSchemaUpdate = userSchema.partial()