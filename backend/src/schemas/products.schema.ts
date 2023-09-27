import { z } from "zod";

const productSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().nullish(),
  price: z.number().positive().int(),
});

const productCreateSchema = productSchema.omit({ id: true });
const productUpdateSchema = productSchema.partial();

export { productCreateSchema, productUpdateSchema };
