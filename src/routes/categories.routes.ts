import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const CategoriesRouters = Router();
const categoriesRepository = new CategoriesRepository();

CategoriesRouters.post("/", (request, response) => {
  const { name, description } = request.body;
  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

CategoriesRouters.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.status(201).json(all);
});

export { CategoriesRouters };
