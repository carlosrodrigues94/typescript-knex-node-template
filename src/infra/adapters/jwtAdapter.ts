import * as jwt from "jsonwebtoken";
import { JwtAdapter } from "../../data/adapters/jwtAdapter";

type UserPayload = {
  username: string;
  id: string;
};

export class JsonWebTokenAdapter implements JwtAdapter<UserPayload> {
  generate(payload: UserPayload): { token: string } {
    const token = jwt.sign(payload, "chave");

    return { token };
  }
}
