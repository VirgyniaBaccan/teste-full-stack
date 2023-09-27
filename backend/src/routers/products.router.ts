import { Router } from "express";
import productsController from "../controllers/products.controller";
import middlewares from "../middlewares";
import {
  productCreateSchema,
  productUpdateSchema,
} from "../schemas/products.schema";
import { verifyId } from "../middlewares/verifyId.middlewares";

export const productsRouter: Router = Router();

productsRouter.post(
  "",
  middlewares.validateBody(productCreateSchema),
  middlewares.uniqueProductName,
  middlewares.verifyToken,
  productsController.create
);

productsRouter.get("", middlewares.verifyToken, productsController.read);
productsRouter.use("/:id", middlewares.verifyToken, verifyId);

productsRouter.patch(
  "/:id",
  middlewares.validateBody(productUpdateSchema),
  productsController.partialUpdate
);

productsRouter.delete("/:id", productsController.destroy);
