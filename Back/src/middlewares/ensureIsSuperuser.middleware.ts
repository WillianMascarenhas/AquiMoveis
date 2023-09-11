import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/app.error";


export const ensureIsSuperUserMiddleware = async (req:Request, res: Response, next: NextFunction) =>{
    const userId = res.locals.userId
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({id: userId})

    if(!findUser){
        throw new AppError("User not found", 404)
    }

    if(!findUser.super_user){
        throw new AppError("User has no permission", 403)
    }
    return next()
}