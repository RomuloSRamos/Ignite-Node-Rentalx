import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoryController } from "@modules/cars/useCases/listCategories/ListCategoryController";

const CategoriesRouters = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
CategoriesRouters.post("/", createCategoryController.handle);

const listCategoryController = new ListCategoryController();
CategoriesRouters.get("/", listCategoryController.handle);

const importCategoryController = new ImportCategoryController();
CategoriesRouters.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);
export { CategoriesRouters };
