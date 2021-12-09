import express from "express";

import { CategoriesRouters } from "./routes/categories.routes";
import { SpecificationRouters } from "./routes/specifications.routes";

const app = express();
app.use(express.json());
app.use("/categories", CategoriesRouters);
app.use("/specifications", SpecificationRouters);
app.listen(3333, () =>
  console.log("Server is running at http://localhost:3333")
);
