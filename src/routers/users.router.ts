import { Router } from "express";
import { userCreateSchema } from "../schemas/users.schema";
import middlewares from "../middlewares";
import usersController from "../controllers/users.controller";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  usersController.create
);
