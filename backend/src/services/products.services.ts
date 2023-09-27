import Product from "../entities/Products.entity";
import {
  ProductCreate,
  ProductRead,
  ProductUpdate,
} from "../interfaces/products.interface";
import { productsRepo } from "../repositories";

const create = async (payload: ProductCreate): Promise<Product> => {
  return await productsRepo.save(payload);
};

const read = async (): Promise<ProductRead> => {
  const productsList = await productsRepo.find();
  return productsList;
};

const partialUpdate = async (
  product: Product,
  payload: ProductUpdate
): Promise<Product> => {
  const productUpdated = await productsRepo.save({ ...product, ...payload });
  return productUpdated;
};

const destroy = async (product: Product): Promise<void> => {
  await productsRepo.remove(product);
};

export default { create, read, destroy, partialUpdate };
