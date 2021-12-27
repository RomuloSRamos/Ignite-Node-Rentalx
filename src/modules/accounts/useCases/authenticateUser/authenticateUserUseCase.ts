import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: { name: string; email: string };
  token: string;
}
@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError("email or password incorrect");
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("email or password incorrect");
    }
    const token = sign({}, "f0649d899c7f938ee730a0921fb7e3aeca111241", {
      subject: user.id,
      expiresIn: "1d",
    });
    const tokenReturn: IResponse = {
      user: { name: user.name, email: user.email },
      token,
    };
    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
