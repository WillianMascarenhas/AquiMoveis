import { Request, Response } from "express";
import { updateCartService } from "../services/Cart/updateCart.service";
import { ICart } from "../interfaces/cart.interface";

export const updateCartController = async (req: Request, res: Response): Promise<Response> => {
    const userId = res.locals.userId
    const updateCart = await updateCartService(userId, req.body)

    return res.status(201).json(updateCart)
}