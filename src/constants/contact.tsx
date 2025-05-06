import { InsertMessage as FormData } from "@/validators/schema";
import { FormFieldConfig } from "@/components/ui/form-field";

export const PROJECT_TYPES = [
  {
    value: "New Project",
    label: "New Project",
  },
  {
    value: "Existing Project Enhancement",
    label: "Existing Project Enhancement",
  },
  {
    value: "Technical Consultation",
    label: "Technical Consultation",
  },
] as const;

export const BUDGET_RANGES = [
  {
    value: "<$5,000",
    label: "<$5,000",
  },
  {
    value: "$5,000 - $10,000",
    label: "$5,000 - $10,000",
  },
  {
    value: "$10,000 - $25,000",
    label: "$10,000 - $25,000",
  },
  {
    value: "$25,000+",
    label: "$25,000+",
  },
] as const;

export const contactFormFields: FormFieldConfig<keyof FormData>[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your name",
    type: "input",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "your.email@example.com",
    type: "input",
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "Message subject",
    type: "input",
  },
  {
    name: "projectType",
    label: "Project Type",
    placeholder: "Select project type",
    type: "select",
    options: PROJECT_TYPES,
  },
  {
    name: "budget",
    label: "Estimated Budget Range",
    placeholder: "Select budget range",
    type: "select",
    options: BUDGET_RANGES,
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Your message",
    type: "textarea",
  },
];
