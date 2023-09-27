import { sign } from "jsonwebtoken";
import AppError from "../errors/App.error";
import { compare } from "bcryptjs";
import { userRepo } from "../repositories";
import User from "../entities/Users.entity";
import { LoginRequest, LoginReturn } from "../interfaces/login.interface";

const userRepository = userRepo;

const create = async (payload: LoginRequest): Promise<LoginReturn> => {
  const user: User | null = await userRepository.findOne({
    where: { email: payload.email },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }
  const samePassword: boolean = await compare(payload.password, user.password);

  if (!samePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign({ email: user.email }, process.env.SECRET_KEY!, {
    subject: user.id.toString(),
    expiresIn: process.env.EXPIRES_IN!,
  });
  return { token };
};

export default { create };
