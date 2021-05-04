import { CreateUserService } from "@services/createUserService";
import { Request, Response } from "express";
export class UserController {
  async post(request: Request, response: Response) {
    const data = request.body;

    const userService = new CreateUserService();

    const user = await userService.execute(data);

    return response.json(user);
  }
}
