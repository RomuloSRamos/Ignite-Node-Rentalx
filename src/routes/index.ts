import { Router } from "express";

import { authenticateRouters } from "./authenticate.routes";
import { CategoriesRouters } from "./categories.routes";
import { specificationRouters } from "./specifications.routes";
import { UsersRouters } from "./users.routes";

const router = Router();
router.use("/categories", CategoriesRouters);
router.use("/specifications", specificationRouters);
router.use("/users", UsersRouters);
router.use(authenticateRouters);

export { router };
