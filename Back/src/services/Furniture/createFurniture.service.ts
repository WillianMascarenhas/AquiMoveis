import { AppDataSource } from "../../data-source";
import { Furniture } from "../../entities/furniture.entity";
import { IFurnitureRequest, IFurnitureResponse } from "../../interfaces/furniture.interface";
import { furnitureSchema } from "../../schemas/furniture.schema";

export const createFurnitureService = async(data:IFurnitureRequest): Promise<IFurnitureResponse> =>{
    const furnitureRepository = AppDataSource.getRepository(Furniture)

    const createFurniture = furnitureRepository.create({
        ...data
    })

    await furnitureRepository.save(createFurniture)

    return furnitureSchema.parse(createFurniture)
}