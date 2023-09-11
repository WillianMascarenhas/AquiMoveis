import { NextFunction, Request, Response } from "express";
import { Furniture } from "../entities/furniture.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/app.error";

export const ensureFurnitureMiddleware = async (req:Request, res: Response, next: NextFunction) =>{
    const furnitureId = parseInt(req.params.id)
    const furnitureRepository = AppDataSource.getRepository(Furniture)


    if(req.method === "PATCH"){
        const findFurnitureByName = await furnitureRepository.findOneBy({name: req.body.name})
        const findFurnitureById = await furnitureRepository.findOneBy({id:furnitureId})

        if(findFurnitureByName?.name === findFurnitureById?.name){
            return next()
        }else if(findFurnitureByName?.name !== findFurnitureById?.name && findFurnitureByName){
            throw new AppError("Furniture already registered", 401)
        }
        return next()
    }
    
    const findFurniture = await furnitureRepository.findOneBy({name: req.body.name})

    if(findFurniture){
        throw new AppError("Furniture already registered", 401)
    }

    return next()
}