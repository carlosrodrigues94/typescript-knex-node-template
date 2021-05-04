import { ICreateUserUsecase, UserPayloadDTO, UserModel } from "@domain/";
import { JwtAdapter } from "@data/adapters/jwtAdapter";
import { IUserRepository } from "@data/repositories/userRepository";

export class CreateUserUseCase implements ICreateUserUsecase {
  constructor(
    private readonly usersRepository: IUserRepository,
    private readonly jwtAdapter: JwtAdapter<UserPayloadDTO>
  ) {}

  create(data: Partial<UserModel>): Promise<UserModel> | Error {
    const token = this.jwtAdapter.generate({
      username: "user-name-sample",
      id: "uuid",
    });

    console.log("token generated => ", token);

    if (!token) {
      return new Error("Error saving the user");
    }

    const user = this.usersRepository.create(data);

    return user;
  }
}
