import { DeepPartial } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schema";

export const updateUserService = async (data: IUserUpdate, userId: number) =>{
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOneBy({id: userId})

    const newUserData = userRepository.create({
        ...findUser,
        ...data,
      } as DeepPartial<User>);

      await userRepository.save(newUserData);

      return userSchemaResponse.parse(newUserData)
}