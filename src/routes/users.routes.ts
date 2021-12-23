import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const UsersRouters = Router();
const createUserController = new CreateUserController();
UsersRouters.post("/", createUserController.handle);

/* SpecificationRouters.get("/", (request, response) => {
  const all = SpecificationRepository.list();
  return response.status(201).json(all);
});
*/
export { UsersRouters };
