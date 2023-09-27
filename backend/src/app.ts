import "reflect-metadata";
import "express-async-errors";
import express from "express";
import loginRouter from "./routers/login.router";
import { userRouter } from "./routers/users.router";
import middlewares from "./middlewares";
import { productsRouter } from "./routers/products.router";

const app = express();
app.use(express.json());

app.use("/login", loginRouter);
app.use("/users", userRouter);
app.use("/products", productsRouter);

app.use(middlewares.handleErrors);

export default app;
