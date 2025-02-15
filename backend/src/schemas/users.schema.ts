import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45).min(2),
  email: z.string().max(45).email(),
  password: z.string().max(120).min(8),
});

const userCreateSchema = userSchema.omit({
  id: true,
});

const userReturnSchema = userSchema.omit({ password: true });

export { userCreateSchema, userReturnSchema };
