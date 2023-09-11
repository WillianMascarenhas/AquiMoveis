import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Cart } from "../../entities/cart.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/app.error";
import { IUserRequest, IUserResponse } from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schema";

export const createUserService = async (data: IUserRequest): Promise<IUserResponse> => {
  const { email, phone } = data;
  const userRepository = AppDataSource.getRepository(User);
  const cartRepository = AppDataSource.getRepository(Cart);
  const existingUser = await userRepository.findOne({
    where: [{ email }, { phone }],
  });

  if (existingUser) {
    throw new AppError("User already exists", 409);
  }

  const createCart = cartRepository.create();
  await cartRepository.save(createCart)

  const createUser = userRepository.create({
    ...data,
    cart: createCart
  });
  await userRepository.save(createUser);

  return userSchemaResponse.parse(createUser);
};
