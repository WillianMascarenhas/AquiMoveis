import { Router } from "express";
import { createUsersController, retiveUsersController } from "../controllers/user.controller";
import { ensureReqIsValidMiddleware } from "../middlewares/ensureReqIsValid.middleware";
import { userSchemaRequest } from "../schemas/user.schema";

export const userRouter = Router()

userRouter.get("",retiveUsersController) 
userRouter.post("",ensureReqIsValidMiddleware(userSchemaRequest), createUsersController) 