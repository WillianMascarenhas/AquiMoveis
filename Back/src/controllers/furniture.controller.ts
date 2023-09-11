import { Request, Response } from "express";
import { IFurnitureRequest, IFurnitureResponse } from "../interfaces/furniture.interface";
import { createFurnitureService } from "../services/Furniture/createFurniture.service";
import { retrieveFurnitureService } from "../services/Furniture/retrieveFurniture.Service";
import { retrieveByIdFurnitureService } from "../services/Furniture/retrieveByIdFurniture.Service";
import { updateFurnitureService } from "../services/Furniture/updateFurniture.service";
import { deleteFurnitureService } from "../services/Furniture/deleteFurniture.service";

export const createFurnitureController = async (req:Request, res: Response): Promise<Response> =>{
    const data: IFurnitureRequest = req.body

    const createFurniture = await createFurnitureService(data)
    
    return res.status(201).json(createFurniture)
}

export const retriveFurnitureController = async (req:Request, res: Response): Promise<Response> =>{
    const retrieveFurniture = await retrieveFurnitureService()

    return res.status(200).json(retrieveFurniture)
}

export const retriveByIdFurnitureController = async (req:Request, res: Response): Promise<Response> =>{
    const furnitureId = parseInt(req.params.id)
    const retrieveFurniture = await retrieveByIdFurnitureService(furnitureId)

    return res.status(200).json(retrieveFurniture).status(200)
}

export const updateFurnitureController = async (req:Request, res: Response): Promise<Response> =>{
    const furnitureId = parseInt(req.params.id)
    const data = req.body

    const updateFurniture = await updateFurnitureService(furnitureId, data)

    return res.status(201).json(updateFurniture)
}

export const deleteFurnitureController = async (req:Request, res: Response): Promise<Response> =>{
    const furnitureId = parseInt(req.params.id)

    const updateFurniture = await deleteFurnitureService(furnitureId)

    return res.status(204).json({})
}