import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const CategoriesRouters = Router();
const categoriesRepository = new CategoriesRepository();

CategoriesRouters.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

CategoriesRouters.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.status(201).json(all);
});

export { CategoriesRouters };
