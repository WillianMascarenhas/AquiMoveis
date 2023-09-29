import { AppDataSource } from "../../data-source";
import { Furniture } from "../../entities/furniture.entity";
import { IFurnituresResponse } from "../../interfaces/furniture.interface";
import { furnituresResponseSchema } from "../../schemas/furniture.schema";

export const retrieveFurnitureService = async (queryReq:any):Promise<IFurnituresResponse> =>{
    const furnitureRepository = AppDataSource.getRepository(Furniture)
    const page= Number(queryReq.page)
    const perPage= Number(queryReq.perPage)

    let listFurniture: Furniture[] | undefined

    if(queryReq.type){
        const query = queryReq.type.toUpperCase()
        if(page || perPage){
            listFurniture = await furnitureRepository.find({
                skip: (page - 1) * perPage,
                take: perPage,
                where: {
                    type: query
                },
                relations: ["furnitureImages"]
            })
            return furnituresResponseSchema.parse(listFurniture)
        }else{
            listFurniture = await furnitureRepository.find({
                where: {
                    type: query
                },
                relations: ["furnitureImages"]
            })
            return furnituresResponseSchema.parse(listFurniture)
        }
        

    }
    if(page || perPage){
        listFurniture = await furnitureRepository.find({
            skip: (page - 1) * perPage,
            take: perPage,
            relations: ["furnitureImages"]
        })

        return  furnituresResponseSchema.parse(listFurniture)
    }else{
        listFurniture = await furnitureRepository.find({
            relations: ["furnitureImages"]
        })

        return  furnituresResponseSchema.parse(listFurniture)
    }
}
