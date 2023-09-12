import { Router } from "express";
import { ensureUserAuthMiddleware } from "../middlewares/ensureUserAuth.middleware";
import { retrieveCartFromUser, updateCartController } from "../controllers/cart.controller";

export const cartRouter = Router();

cartRouter.patch("", ensureUserAuthMiddleware, updateCartController)
cartRouter.get("", ensureUserAuthMiddleware, retrieveCartFromUser)

