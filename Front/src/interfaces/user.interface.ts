import { z } from "zod";
import { userSchema, userSchemaRequest, userSchemaResponse, userSchemaUpdate, usersSchemaResponse } from "../schemas/user.schema";

export type IUser = z.infer<typeof userSchema>
export type IUserRequest = z.infer<typeof userSchemaRequest>
export type IUserResponse = z.infer<typeof userSchemaResponse>
export type IUsersResponse = z.infer<typeof usersSchemaResponse>
export type IUserUpdate = z.infer<typeof userSchemaUpdate>