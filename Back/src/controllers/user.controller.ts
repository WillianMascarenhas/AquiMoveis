import { Request, Response } from "express";
import { IUserResponse, IUsersResponse } from "../interfaces/user.interface";
import { retriveUsersServices } from "../services/User/retriveUsers.service";
import { createUserService } from "../services/User/createUser.service";

export const retiveUsersController = async (req: Request, res: Response): Promise<Response> =>{
    const retriveUsers = await retriveUsersServices()

    return res.json(retriveUsers).status(200)
}

export const createUsersController = async (req: Request, res:Response): Promise<Response> =>{
    const data = req.body
    const createUser = await createUserService(data)

    return res.json(createUser).status(201)
}