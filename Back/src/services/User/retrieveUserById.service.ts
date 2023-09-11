import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/app.error"
import { IUsersResponse } from "../../interfaces/user.interface"

export const retrieveUserByIdService = async (userId:number) =>{
    const userRespository = AppDataSource.getRepository(User)

    const findUsers = await userRespository.findOne({
        where:{
            id: userId
        },
        relations:["cart", "cart.furniture"]
    })

    if(!findUsers){
        throw new AppError("User not found", 404)
    }

    return findUsers
}