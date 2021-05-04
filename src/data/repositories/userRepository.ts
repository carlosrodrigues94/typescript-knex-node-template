import { UserModel } from "@domain/";

export interface IUserRepository {
  create(data: Partial<UserModel>): Promise<UserModel>;
}
