import { Request, Response } from "express";
import usersService from "../services/users.services";
import { UserReturn } from "../interfaces/users.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await usersService.create(req.body);

  return res.status(201).json(user);
};

export default { create };
