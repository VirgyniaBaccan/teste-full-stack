import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import User from "./entities/Users.entity";
import Product from "./entities/Products.entity";

const userRepo: Repository<User> = AppDataSource.getRepository(User);
const productsRepo: Repository<Product> = AppDataSource.getRepository(Product);

export { userRepo, productsRepo };
