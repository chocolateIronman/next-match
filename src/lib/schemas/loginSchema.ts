import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must be less than 32 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
