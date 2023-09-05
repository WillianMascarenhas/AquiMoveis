import { Router } from "express";
import { UpdateUserController, createUserController, retiveUsersController } from "../controllers/user.controller";
import { ensureReqIsValidMiddleware } from "../middlewares/ensureReqIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/user.schema";
import { ensureUserAuthMiddleware } from "../middlewares/ensureUserAuth.middleware";

export const userRouter = Router()

userRouter.get("",retiveUsersController) 
userRouter.post("",ensureReqIsValidMiddleware(userSchemaRequest), createUserController)
userRouter.patch("",ensureReqIsValidMiddleware(userSchemaUpdate), ensureUserAuthMiddleware, UpdateUserController)