import { AppDataSource } from "../../data-source"
import { Furniture } from "../../entities/furniture.entity"
import { AppError } from "../../errors/app.error"

export const deleteFurnitureService = async(furnitureId: number): Promise<void> =>{
    const furnitureRepository = AppDataSource.getRepository(Furniture)

    const findFurniture = await furnitureRepository.findOneBy({
        id: furnitureId
    })

    if(!findFurniture){
        throw new AppError("Furniture not found", 404)
    }

    await furnitureRepository.delete({
        id: furnitureId
    })
}