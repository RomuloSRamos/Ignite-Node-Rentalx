// import { User } from "../entities/User";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create(date: ICreateUserDTO): Promise<void>;
  // list(): Promise<User[]>;
  // findByName(name: string): Promise<User>;
}
export { IUsersRepository };
