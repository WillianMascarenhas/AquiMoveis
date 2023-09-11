import { DeepPartial } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Furniture } from "../../entities/furniture.entity";
import { AppError } from "../../errors/app.error";
import { IFurnitureUpdate } from "../../interfaces/furniture.interface";
import { furnitureUpdateSchema } from "../../schemas/furniture.schema";

export const updateFurnitureService = async (furnitureId: number, data: IFurnitureUpdate): Promise<IFurnitureUpdate> =>{
    const furnitureRepository = AppDataSource.getRepository(Furniture)

    const findFurniture = await furnitureRepository.findOneBy({
        id: furnitureId
    })

    if(!findFurniture){
        throw new AppError("Furniture not found", 404)
    }

    if(data.amount === 0){
        const createFurniture = furnitureRepository.create({
            ...findFurniture,
            ...data,
            is_available: false
        } as DeepPartial<Furniture>)
    
        await furnitureRepository.save(createFurniture)

        return furnitureUpdateSchema.parse(createFurniture)
    }

    const createFurniture = furnitureRepository.create({
        ...findFurniture,
        ...data,
        is_available: true
    } as DeepPartial<Furniture>)

    await furnitureRepository.save(createFurniture)

    return furnitureUpdateSchema.parse(createFurniture)
}