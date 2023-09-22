import { AppDataSource } from "../../data-source";
import { Furniture } from "../../entities/furniture.entity";
import { FurnitureImages } from "../../entities/furnitureImages.entity";
import { IFurnitureRequest, IFurnitureResponse } from "../../interfaces/furniture.interface";
import { furnitureSchema } from "../../schemas/furniture.schema";

export const createFurnitureService = async(data:IFurnitureRequest): Promise<IFurnitureResponse> =>{
    const furnitureRepository = AppDataSource.getRepository(Furniture)
    const furnitureImageRepository = AppDataSource.getRepository(FurnitureImages)

    const createFurniture = furnitureRepository.create({
        ...data
    })

    await furnitureRepository.save(createFurniture)

    const saveImage = data.furnitureImages.map(async(image) => {
        const furnitureImage = furnitureImageRepository.create({
            url: image.url,
            furniture: createFurniture
        })
        return furnitureImageRepository.save(furnitureImage)
    })
    await Promise.all(saveImage)

    const loddedFurniture = await furnitureRepository.findOne({
        where:{
            id:createFurniture.id
        },
        relations: ["furnitureImages"]
    })

    return furnitureSchema.parse(loddedFurniture)
}