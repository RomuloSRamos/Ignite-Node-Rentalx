import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const SpecificationRouters = Router();
const specificationRepository = new SpecificationRepository();

SpecificationRouters.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );
  createSpecificationService.execute({ name, description });
  return response.status(201).send();
});

/* SpecificationRouters.get("/", (request, response) => {
  const all = SpecificationRepository.list();
  return response.status(201).json(all);
}); */

export { SpecificationRouters };
