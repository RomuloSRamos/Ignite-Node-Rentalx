import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const SpecificationRouters = Router();
const createSpecificationController = new CreateSpecificationController();
SpecificationRouters.post("/", createSpecificationController.handle);

/* SpecificationRouters.get("/", (request, response) => {
  const all = SpecificationRepository.list();
  return response.status(201).json(all);
});
*/
export { SpecificationRouters };
