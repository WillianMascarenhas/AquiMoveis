import { Request, Response } from "express";
import { updateCartService } from "../services/Cart/updateCart.service";
import { ICart } from "../interfaces/cart.interface";
import { retrieveCarService } from "../services/Cart/retrieveCar.service";

export const updateCartController = async (req: Request, res: Response): Promise<Response> => {
    const userId = res.locals.userId
    const updateCart = await updateCartService(userId, req.body)

    return res.status(201).json(updateCart)
}

export const retrieveCartFromUser = async (req:Request, res: Response): Promise<Response> => {
    const userId = res.locals.userId
    const retrieveCart = await retrieveCarService(userId)

    return res.status(200).json(retrieveCart)
}