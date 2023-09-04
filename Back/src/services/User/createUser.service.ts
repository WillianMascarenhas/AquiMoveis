import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/app.error";
import { IUserRequest, IUserResponse } from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schema";

export const createUserService = async (data: IUserRequest): Promise<IUserResponse> =>{
    const { email, phone } = data;
    const userRepository = AppDataSource.getRepository(User);
    const findUserEmail = await userRepository.findOneBy({
      email,
    });
    const findUserPhone = await userRepository.findOneBy({
      phone,
    });
    if (findUserEmail || findUserPhone) {
      throw new AppError("User already exists", 409);
    }

    const createUser = userRepository.create({
        ...data,
    });

    await userRepository.save(createUser)

    return userSchemaResponse.parse(createUser)

}