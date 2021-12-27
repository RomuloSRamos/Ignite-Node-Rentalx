import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";

import { AppError } from "./errors/AppError";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";
import "./shared/container";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);
app.use(
  (err: Error, Request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `internal server error - ${err.message}`,
    });
  }
);
app.listen(3333, () =>
  console.log(
    "Server is running at http://localhost:3333",
    "See the API documentation at http://localhost:3333/api-docs"
  )
);
