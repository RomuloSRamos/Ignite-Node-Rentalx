import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/ListAvailableCarsController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

const carsRoutes = Router();
const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
carsRoutes.post(
  "/",
  ensureAuthenticate,
  ensureAdmin,
  createCarController.handle
);
carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.post(
  "/specifications/:id",
  ensureAuthenticate,
  ensureAdmin,
  createCarSpecificationController.handle
);
export { carsRoutes };
