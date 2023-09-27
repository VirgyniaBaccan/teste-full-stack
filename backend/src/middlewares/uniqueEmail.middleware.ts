import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";
import { userRepo } from "../repositories";
import User from "../entities/Users.entity";

export const uniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundUserMail: User | null = await userRepo.findOneBy({
    email: req.body.email,
  });

  const { email } = req.body;
  if (!email) {
    return next();
  }

  if (email) {
    if (foundUserMail) throw new AppError("Email already exists", 409);
  }
  return next();
};
