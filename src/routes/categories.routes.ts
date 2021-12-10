import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const CategoriesRouters = Router();

CategoriesRouters.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

CategoriesRouters.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

export { CategoriesRouters };
