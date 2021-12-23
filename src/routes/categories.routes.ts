import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import importCategoryController from "../modules/cars/useCases/importCategory";
import listCategoryController from "../modules/cars/useCases/listCategories";

const CategoriesRouters = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
CategoriesRouters.post("/", createCategoryController.handle);

CategoriesRouters.get("/", (request, response) => {
  return listCategoryController().handle(request, response);
});
CategoriesRouters.post(
  "/import",
  upload.single("file"),
  (request, response) => {
    return importCategoryController().handle(request, response);
  }
);

export { CategoriesRouters };
