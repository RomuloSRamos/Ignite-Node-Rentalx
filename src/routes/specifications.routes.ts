import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const SpecificationRouters = Router();

SpecificationRouters.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

/* SpecificationRouters.get("/", (request, response) => {
  const all = SpecificationRepository.list();
  return response.status(201).json(all);
}); */

export { SpecificationRouters };
