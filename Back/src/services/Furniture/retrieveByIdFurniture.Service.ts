import { AppDataSource } from "../../data-source";
import { Furniture } from "../../entities/furniture.entity";
import { AppError } from "../../errors/app.error";
import { IFurnitureResponse, IFurnituresResponse } from "../../interfaces/furniture.interface";
import { furnitureSchema } from "../../schemas/furniture.schema";

export const retrieveByIdFurnitureService = async (furnitureId:number):Promise<IFurnitureResponse> =>{
    const furnitureRepository = AppDataSource.getRepository(Furniture)

    const findFurniture = await furnitureRepository.findOne({
        where: {
            id: furnitureId
        },
        relations: ["furnitureImages"]
    }
    )

    if(!findFurniture){
        throw new AppError("Furniture not found", 404)
    }

    return furnitureSchema.parse(findFurniture)

}
