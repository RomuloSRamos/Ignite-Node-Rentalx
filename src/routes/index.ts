import { Router } from "express";

import { authenticateRouters } from "./authenticate.routes";
import { CategoriesRouters } from "./categories.routes";
import { SpecificationRouters } from "./specifications.routes";
import { UsersRouters } from "./users.routes";

const router = Router();
router.use("/categories", CategoriesRouters);
router.use("/specifications", SpecificationRouters);
router.use("/users", UsersRouters);
router.use(authenticateRouters);

export { router };
