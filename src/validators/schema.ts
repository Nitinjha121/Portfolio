import { z } from "zod";
import { PROJECT_TYPES, BUDGET_RANGES } from "@/constants";

// Create union types from the constants
const projectTypeValues = PROJECT_TYPES.map(type => type.value);
const budgetRangeValues = BUDGET_RANGES.map(range => range.value);

export const insertMessageSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 character long" })
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

  projectType: z
    .enum(projectTypeValues as [string, ...string[]], {
      message: "Please select a valid project type",
    }),

  budget: z
    .enum(budgetRangeValues as [string, ...string[]], {
      message: "Please select a valid budget range",
    }),
});

export type InsertMessage = z.infer<typeof insertMessageSchema>;
