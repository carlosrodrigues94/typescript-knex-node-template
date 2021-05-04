import { UserModel } from "../models/userModel";

export interface ICreateUserUsecase {
  create(data: Partial<UserModel>): Promise<UserModel> | Error;
}
