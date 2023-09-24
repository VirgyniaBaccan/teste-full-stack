import { NextFunction, Request, Response } from "express";
import { productsRepo } from "../repositories";
import AppError from "../errors/App.error";
import Product from "../entities/Products.entity";

export const verifyId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundProduct: Product | null = await productsRepo.findOneBy({
    id: Number(req.params.id),
  });

  if (!foundProduct) throw new AppError("Product not found", 404);

  res.locals = { ...res.locals, foundProduct };

  return next();
};
