import { Request, Response } from "express";
import { IFurnitureRequest, IFurnitureResponse } from "../interfaces/furniture.interface";
import { createFurnitureService } from "../services/Furniture/createFurniture.service";
import { retrieveFurnitureService } from "../services/Furniture/retrieveFurniture.Service";
import { retrieveByIdFurnitureService } from "../services/Furniture/retrieveByIdFurniture.Service";
import { updateFurnitureService } from "../services/Furniture/updateFurniture.service";

export const createFurnitureController = async (req:Request, res: Response): Promise<Response> =>{
    const data: IFurnitureRequest = req.body

    const createFurniture = await createFurnitureService(data)
    
    return res.json(createFurniture).status(201)
}

export const retriveFurnitureController = async (req:Request, res: Response): Promise<Response> =>{
    const retrieveFurniture = await retrieveFurnitureService()

    return res.json(retrieveFurniture).status(200)
}

export const retriveByIdFurnitureController = async (req:Request, res: Response): Promise<Response> =>{
    const furnitureId = parseInt(req.params.id)
    const retrieveFurniture = await retrieveByIdFurnitureService(furnitureId)

    return res.json(retrieveFurniture).status(200)
}

export const updateFurnitureController = async (req:Request, res: Response): Promise<Response> =>{
    const furnitureId = parseInt(req.params.id)
    const data = req.body

    const updateFurniture = await updateFurnitureService(furnitureId, data)

    return res.json(updateFurniture).status(201)

}