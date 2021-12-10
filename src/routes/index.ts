import { Router } from "express";

import { CategoriesRouters } from "./categories.routes";
import { SpecificationRouters } from "./specifications.routes";

const router = Router();
router.use("/categories", CategoriesRouters);
router.use("/specifications", SpecificationRouters);
export { router };
