import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  insertMessageSchema,
  InsertMessage as FormData,
} from "@/validators/schema";
import { Button } from "@/components/ui/button";
import { contactFormFields } from "@/constants";
import { FormFieldComponent } from "@/components/ui/form-field";

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: "",
      budget: "",
    },
  });

  const handleSubmit = async (data: FormData) => {
    try {
      // HubSpot form submission
      const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
      const formId = import.meta.env.VITE_HUBSPOT_FORM_ID;

      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

      const hubspotData = {
        fields: [
          { name: "firstName", value: data.name },
          { name: "email", value: data.email },
          { name: "subject", value: data.subject },
          { name: "message", value: data.message },
          { name: "projectType", value: data.projectType },
          { name: "estimatedbudgetrange", value: data.budget },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hubspotData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {contactFormFields.map((fieldConfig) => (
          <FormField
            key={fieldConfig.name}
            control={form.control}
            name={fieldConfig.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fieldConfig.label}</FormLabel>
                <FormControl>
                  <FormFieldComponent field={field} config={fieldConfig} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
