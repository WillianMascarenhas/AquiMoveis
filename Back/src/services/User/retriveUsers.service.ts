import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUsersResponse } from "../../interfaces/user.interface"

export const retriveUsersServices = async () =>{
    const userRespository = AppDataSource.getRepository(User)

    const allUsers = await userRespository.find()

    return allUsers
}