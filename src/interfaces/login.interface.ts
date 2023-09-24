import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";

export type LoginRequest = z.infer<typeof loginSchema>;
export type LoginReturn = { token: string };
