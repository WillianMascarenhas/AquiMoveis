import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/app.error";
import { ILogin } from "../../interfaces/login.interfaca";
import jwt from "jsonwebtoken"
import "dotenv/config"

export const createLoginService = async (data: ILogin): Promise<string> =>{
    const { email } = data;
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({ email });

    if(!findUser){
        throw new AppError("invalid credentials", 403)
    }

    const passwordMatch = await compare(data.password, findUser.password);

    if(!passwordMatch){
        throw new AppError("invalid credentials", 403)
    }

    const token = jwt.sign(
        {userName: findUser.name},
        process.env.SECRET_KEY!,
        {expiresIn: "1d", subject: findUser.id.toString()}
      )
    
    return token

}