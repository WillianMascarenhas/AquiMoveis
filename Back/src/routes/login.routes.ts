import { Router } from "express";
import { ensureReqIsValidMiddleware } from "../middlewares/ensureReqIsValid.middleware";
import { makeLoginController } from "../controllers/login.controller";
import { loginSchema } from "../schemas/login.schema";

export const loginRouter = Router();

loginRouter.post("", ensureReqIsValidMiddleware(loginSchema), makeLoginController)

