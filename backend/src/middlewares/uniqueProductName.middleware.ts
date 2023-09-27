import { NextFunction, Request, Response } from "express";
import Product from "../entities/Products.entity";
import { productsRepo } from "../repositories";
import AppError from "../errors/App.error";

export const uniqueProductName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundProduct: Product | null = await productsRepo.findOneBy({
    name: req.body.name,
  });

  const { name } = req.body;
  if (!name) {
    return next();
  }

  if (name) {
    if (foundProduct) throw new AppError("Product already exists.", 409);
  }

  next();
};
