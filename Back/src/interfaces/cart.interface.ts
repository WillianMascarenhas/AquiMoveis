import { z } from "zod";
import { cartSchema, cartToAddSchema } from "../schemas/cart.schema";

export type ICart = z.infer<typeof cartSchema>
export type ICartToAdd = z.infer<typeof cartToAddSchema>