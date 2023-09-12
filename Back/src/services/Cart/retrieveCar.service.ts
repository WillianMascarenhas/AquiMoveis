import { AppDataSource } from "../../data-source"
import { Cart } from "../../entities/cart.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/app.error"

export const retrieveCarService = async (userId: number) =>{
    const cartRepository = AppDataSource.getRepository(Cart)
    const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOneBy({id: userId})
        
        if(!user){
            throw new AppError("User not found", 404)
    }
    const findCart = await cartRepository.findOne({
        where:{ 
            user: { id: user.id } 
        },
        relations:["furniture"]
    })

    if (!findCart) {
        throw new AppError("Cart not found", 404)
    }

    return findCart
}