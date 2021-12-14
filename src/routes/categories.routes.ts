import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const CategoriesRouters = Router();
const upload = multer({
  dest: "./tmp",
});

CategoriesRouters.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

CategoriesRouters.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});
CategoriesRouters.post(
  "/import",
  upload.single("file"),
  (request, response) => {
    return importCategoryController.handle(request, response);
  }
);

export { CategoriesRouters };
