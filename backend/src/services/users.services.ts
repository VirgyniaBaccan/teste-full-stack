import User from "../entities/Users.entity";
import { UserCreate, UserReturn } from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import { userReturnSchema } from "../schemas/users.schema";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepo.create(payload);
  await userRepo.save(user);

  return userReturnSchema.parse(user);
};

export default { create };
