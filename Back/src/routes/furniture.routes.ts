import { Router } from "express";
import { ensureIsSuperUserMiddleware } from "../middlewares/ensureIsSuperuser.middleware";
import { ensureUserAuthMiddleware } from "../middlewares/ensureUserAuth.middleware";
import { createFurnitureController, deleteFurnitureController, retriveByIdFurnitureController, retriveFurnitureController, updateFurnitureController } from "../controllers/furniture.controller";
import { ensureReqIsValidMiddleware } from "../middlewares/ensureReqIsValid.middleware";
import { furnitureRequestSchema, furnitureUpdateSchema } from "../schemas/furniture.schema";
import { ensureFurnitureMiddleware } from "../middlewares/ensureFurniture.middleware";

export const furnitureRouter = Router()

furnitureRouter.post("", ensureReqIsValidMiddleware(furnitureRequestSchema), ensureUserAuthMiddleware, ensureIsSuperUserMiddleware, ensureFurnitureMiddleware, createFurnitureController)
furnitureRouter.get("",  ensureUserAuthMiddleware, ensureIsSuperUserMiddleware, retriveFurnitureController)
furnitureRouter.get("/:id",  ensureUserAuthMiddleware, ensureIsSuperUserMiddleware, retriveByIdFurnitureController)
furnitureRouter.patch("/:id",ensureReqIsValidMiddleware(furnitureUpdateSchema), ensureUserAuthMiddleware, ensureIsSuperUserMiddleware, ensureFurnitureMiddleware, updateFurnitureController)
furnitureRouter.delete("/:id", ensureUserAuthMiddleware, ensureIsSuperUserMiddleware, deleteFurnitureController)