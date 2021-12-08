import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const CategoriesRouters = Router();
const categoriesRepository = new CategoriesRepository();

CategoriesRouters.post("/", (request, response) => {
  const { name, description } = request.body;
  const categoryAlreadyExists = categoriesRepository.findByName(name);
  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "this category already Exists" });
  }
  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

CategoriesRouters.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.status(201).json(all);
});

export { CategoriesRouters };
