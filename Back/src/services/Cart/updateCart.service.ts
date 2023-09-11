import { number } from "zod"
import { AppDataSource } from "../../data-source"
import { Cart } from "../../entities/cart.entity"
import { Furniture } from "../../entities/furniture.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/app.error"
import { ICartToAdd } from "../../interfaces/cart.interface"

export const updateCartService = async (userId: number, data:ICartToAdd): Promise<any> =>{
    const cartRepository = AppDataSource.getRepository(Cart)
    const userRepository = AppDataSource.getRepository(User)
    const furnitureRepository = AppDataSource.getRepository(Furniture)

    const user = await userRepository.findOneBy({id: userId})

    if(!user){
        throw new AppError("User not found", 404)
    }

    // const findCart = await cartRepository.findOneBy({ user: { id: user.id } })
    const findCart = await cartRepository.findOne({
        where:{ 
            user: { id: user.id } 
        },
        relations:["furniture"]
    })

    if (!findCart) {
        throw new AppError("Cart not found", 404)
    }

    const ArrToAddOnCart: Furniture[] = []

    if(data.furniture){
        findCart.furniture.forEach(item => ArrToAddOnCart.push(item))

        data.furniture.map(async furnitureId =>{
            const findFurniture = await furnitureRepository.findOneBy({id:furnitureId})
            if(findFurniture){
                ArrToAddOnCart.push(findFurniture)
            }
            
            const newFurnitureArr = cartRepository.create({
                ...findCart,
                furniture: ArrToAddOnCart
            })
            
            await cartRepository.save(newFurnitureArr)
        })
        return findCart
    }

    if(data.delete_furniture){
       const deleteOnCart = findCart.furniture.filter(furnitureToDelete => furnitureToDelete.id !== data.delete_furniture)

       const newFurnitureArr = cartRepository.create({
        ...findCart,
        furniture: deleteOnCart
    })

    await cartRepository.save(newFurnitureArr)

    const findCartAfter = await cartRepository.findOne({
        where:{ 
            user: { id: user.id } 
        },
        relations:["furniture"]
    })

    return findCartAfter
    }
}