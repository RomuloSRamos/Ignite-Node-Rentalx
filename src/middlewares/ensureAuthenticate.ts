import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}
export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError("token missing", 401);
  }
  const [, token] = authHeader.split(" ");
  try {
    const { sub: user_id } = verify(
      token,
      "f0649d899c7f938ee730a0921fb7e3aeca111241"
    ) as IPayload;
    const userRepository = new UsersRepository();
    const user = userRepository.findById(user_id);
    if (!user) {
      throw new AppError("User does not exists!", 401);
    }
    request.user = {
      id: user_id,
    };
    next();
  } catch (error) {
    throw new AppError("invalid token!", 401);
  }
}
