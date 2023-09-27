import { AppDataSource } from "../../data-source";
import { Furniture } from "../../entities/furniture.entity";
import { IFurnituresResponse } from "../../interfaces/furniture.interface";
import { furnituresResponseSchema } from "../../schemas/furniture.schema";

export const retrieveFurnitureService = async (queryReq:any):Promise<IFurnituresResponse> =>{
    const furnitureRepository = AppDataSource.getRepository(Furniture)
    if(queryReq.type){
        const query = queryReq.type.toUpperCase()
        
        const listFurniture = await furnitureRepository.find({
            where: {
                type: query
            },
            relations: ["furnitureImages"]
        })

        return furnituresResponseSchema.parse(listFurniture)
    }

    const listFurniture = await furnitureRepository.find({
        relations: ["furnitureImages"]
    })

    return  furnituresResponseSchema.parse(listFurniture)

}
