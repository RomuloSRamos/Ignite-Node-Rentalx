import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

const specificationRouters = Router();
const createSpecificationController = new CreateSpecificationController();
specificationRouters.use(ensureAuthenticate);
specificationRouters.post("/", createSpecificationController.handle);
export { specificationRouters };
