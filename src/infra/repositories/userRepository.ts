import { IUserRepository } from "../../data/repositories/userRepository";
import { UserModel } from "../../domain/models/userModel";
// import { Knex } from "./index";

export class UserRepository implements IUserRepository {
  async create(data: Partial<UserModel>): Promise<UserModel> {
    // const [user] = await Knex.table<UserModel>("users")
    //   .insert({ id: "uuid", createdAt: new Date() })
    //   .reurning("*");

    return Promise.resolve({
      createdAt: new Date(),
      id: "uuid",
      name: "user name",
    });
  }
}
