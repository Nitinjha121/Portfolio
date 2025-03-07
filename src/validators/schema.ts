import { z } from "zod";

export const insertMessageSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(1, { message: "Name must be at least 1 character long" })
    .max(100, { message: "Name must be at most 100 characters long" }),

  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid email format" })
    .min(1, { message: "Email cannot be empty" })
    .max(100, { message: "Email must be at most 100 characters long" }),

  subject: z
    .string({ message: "Subject is required" })
    .min(1, { message: "Subject cannot be empty" })
    .max(200, { message: "Subject must be at most 200 characters long" }),

  message: z
    .string({ message: "Message is required" })
    .min(1, { message: "Message cannot be empty" }),
});

export type InsertMessage = z.infer<typeof insertMessageSchema>;
