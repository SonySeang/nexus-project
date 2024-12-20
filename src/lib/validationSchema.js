import z from "zod";

export const postSchema = z.object({
  title: z.string().min(1, { message: "Please give your  title" }),
  content: z
    .string()
    .min(1, { message: "Content must be at least 1 characters long" }),
});
