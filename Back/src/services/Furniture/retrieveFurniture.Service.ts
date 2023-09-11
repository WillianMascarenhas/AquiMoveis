import { AppDataSource } from "../../data-source";
import { Furniture } from "../../entities/furniture.entity";
import { IFurnituresResponse } from "../../interfaces/furniture.interface";
import { furnituresResponseSchema } from "../../schemas/furniture.schema";

export const retrieveFurnitureService = async ():Promise<IFurnituresResponse> =>{
    const furnitureRepository = AppDataSource.getRepository(Furniture)

    const listFurniture = await furnitureRepository.find()

    return  furnituresResponseSchema.parse(listFurniture)

}
