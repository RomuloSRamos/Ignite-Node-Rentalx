import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    driver_license,
    password,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const User = this.repository.create({
      name,
      email,
      driver_license,
      password,
      id,
      avatar,
    });
    await this.repository.save(User);
  }

  async findByEmail(email: string): Promise<User> {
    const User = await this.repository.findOne({ email });
    return User;
  }
  async findById(id: string): Promise<User> {
    const User = await this.repository.findOne(id);
    return User;
  }
}

export { UsersRepository };
