import { z } from "zod";
import { productCreateSchema } from "../schemas/products.schema";
import Product from "../entities/Products.entity";
import { DeepPartial, Repository } from "typeorm";

type ProductCreate = z.infer<typeof productCreateSchema>;
type ProductRead = Array<Product>;
type ProductUpdate = DeepPartial<Product>;

type ProductRepo = Repository<Product>;

export { ProductCreate, ProductRead, ProductRepo, ProductUpdate };
