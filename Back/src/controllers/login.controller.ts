import { Request, Response } from "express";
import { createLoginService } from "../services/Login/createLogin.service";

export const makeLoginController = async (req: Request, res: Response): Promise<Response> =>{
    const data = req.body

    const makeLogin = await createLoginService(data)

    return res.json({"token":makeLogin}).status(200) 

}