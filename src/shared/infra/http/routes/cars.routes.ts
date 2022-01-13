import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

const carsRoutes = Router();
const createCarController = new CreateCarController();
carsRoutes.post(
  "/",
  ensureAuthenticate,
  ensureAdmin,
  createCarController.handle
);

export { carsRoutes };
