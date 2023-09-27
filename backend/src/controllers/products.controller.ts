import { Request, Response } from "express";
import Product from "../entities/Products.entity";
import productsServices from "../services/products.services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const product: Product = await productsServices.create(req.body);

  return res.status(201).json(product);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const products: Product[] = await productsServices.read();

  return res.status(200).json(products);
};

const partialUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundProduct } = res.locals;
  const { body } = req;

  const product: Product = await productsServices.partialUpdate(
    foundProduct,
    body
  );

  return res.status(200).json(product);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await productsServices.destroy(res.locals.foundProduct);

  return res.status(204).json();
};

export default { create, read, destroy, partialUpdate };
