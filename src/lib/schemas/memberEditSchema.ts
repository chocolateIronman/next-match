import { z } from "zod";

export const memberEditSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Name must be at least 3 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .min(3, "Description must be at least 3 characters"),
  city: z
    .string()
    .min(1, "City is required")
    .min(3, "City must be at least 3 characters"),
  country: z
    .string()
    .min(1, "Country is required")
    .min(3, "Country must be at least 3 characters"),
});

export type MemberEditSchema = z.infer<typeof memberEditSchema>;
