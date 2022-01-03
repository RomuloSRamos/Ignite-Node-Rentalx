import { Router } from "express";
import { ensureAuthenticate } from "middlewares/ensureAuthenticate";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRouters = Router();
const createSpecificationController = new CreateSpecificationController();
specificationRouters.use(ensureAuthenticate);
specificationRouters.post("/", createSpecificationController.handle);
export { specificationRouters };
