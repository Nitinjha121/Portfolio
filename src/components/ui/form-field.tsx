import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectOption {
  label: string;
  value: string;
}

export interface FormFieldConfig<TName = string> {
  name: TName;
  label: string;
  placeholder: string;
  type: "input" | "textarea" | "select";
  options?: readonly SelectOption[];
}

interface FormFieldComponentProps {
  field: any; // You might want to type this properly based on your needs
  config: FormFieldConfig;
}

export function FormFieldComponent({ field, config }: FormFieldComponentProps) {
  switch (config.type) {
    case "select":
      return (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger className="focus:shadow-lg">
            <SelectValue
              placeholder={
                <span className="text-muted-foreground">
                  {config.placeholder}
                </span>
              }
            />
          </SelectTrigger>
          <SelectContent>
            {config.options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    case "textarea":
      return (
        <Textarea
          placeholder={config.placeholder}
          className="min-h-[120px] border dark:border-gray-700 dark:focus:border-gray-600 transition-colors"
          {...field}
        />
      );
    default:
      return <Input placeholder={config.placeholder} {...field} />;
  }
}
