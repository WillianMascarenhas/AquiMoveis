import { z } from "zod";
import { furnitureRequestSchema, furnitureSchema, furnitureUpdateSchema, furnituresResponseSchema } from "../schemas/furniture.schema";

export type IFurnitureResponse = z.infer<typeof furnitureSchema>
export type IFurnituresResponse = z.infer<typeof furnituresResponseSchema>
export type IFurnitureRequest = z.infer<typeof furnitureRequestSchema>
export type IFurnitureUpdate = z.infer<typeof furnitureUpdateSchema>