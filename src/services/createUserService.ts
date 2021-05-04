import { CreateUserUseCase } from "@data/usecases/createUserUsercase";
import { UserModel } from "@domain/";
import { JsonWebTokenAdapter } from "@infra/adapters/jwtAdapter";
import { UserRepository } from "@infra/repositories/userRepository";

export class CreateUserService {
  async execute(data: UserModel) {
    const jwtAdapter = new JsonWebTokenAdapter();

    const userRepository = new UserRepository();

    const createUserUsecase = new CreateUserUseCase(userRepository, jwtAdapter);

    const user = await createUserUsecase.create(data);

    return user;
  }
}
