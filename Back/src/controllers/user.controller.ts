import { Request, Response } from "express";
import { IUserResponse, IUsersResponse } from "../interfaces/user.interface";
import { retriveUsersServices } from "../services/User/retriveUsers.service";
import { updateUserService } from "../services/User/updateUser.service";
import { createUserService } from "../services/User/createUser.service";
import { retrieveUserByIdService } from "../services/User/retrieveUserById.service";

export const retiveUsersController = async (req: Request, res: Response): Promise<Response> =>{
    const retriveUsers = await retriveUsersServices()

    return res.json(retriveUsers).status(200)
}
export const retrieveUserByIdController = async (req: Request, res: Response): Promise<Response> =>{
    const userId = parseInt(req.params.id)
    const retriveUsers = await retrieveUserByIdService(userId)

    return res.json(retriveUsers).status(200)
}

export const createUserController = async (req: Request, res:Response): Promise<Response> =>{
    const data = req.body
    const createUser = await createUserService(data)

    return res.json(createUser).status(201)
}
export const UpdateUserController = async (req: Request, res:Response): Promise<Response> =>{
    const data = req.body
    const userId = res.locals.userId
    const updateUser = await updateUserService(data, userId)

    return res.json(updateUser).status(201)
}