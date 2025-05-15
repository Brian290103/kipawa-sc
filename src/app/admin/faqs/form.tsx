"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { addFaq, updateFaq } from "@/actions/faqsActions"; //  import

// Define the form schema based on faq schema
const faqFormSchema = z.object({
  question: z.string().min(1, { message: "Question is required" }),
  answer: z.string().min(1, { message: "Answer is required" }),
});

// Define the form fields array, matching the faq schema
const formFields = [
  {
    name: "question",
    label: "Question",
    placeholder: "Enter the question",
    FormComponent: Textarea, // Use Textarea
    validation: { required: true },
  },
  {
    name: "answer",
    label: "Answer",
    placeholder: "Enter the answer",
    FormComponent: Textarea, // Use Textarea
    validation: { required: true },
  },
];

// Define a type for the form values
type FaqFormValues = z.infer<typeof faqFormSchema>;

interface FaqFormProps {
  initialValues?: FaqFormValues & { id?: string };
}

const FaqForm: React.FC<FaqFormProps> = ({ initialValues }) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FaqFormValues>({
    resolver: zodResolver(faqFormSchema),
    defaultValues: initialValues || {
      question: "",
      answer: "",
    },
  });

  const handleSubmit = async (data: FaqFormValues) => {
    setIsLoading(true);
    try {
      if (initialValues?.id) {
        await updateFaq(initialValues.id, data);
        toast.success("FAQ Updated");
        form.reset();
      } else {
        await addFaq(data.question, data.answer);
        toast.success("FAQ Created");
        form.reset();
      }
    } catch (error: any) {
      toast.error(
        initialValues ? "Failed to update" : "Failed to create",
        error.message,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full space-y-6"
      >
        {formFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formFieldProps }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <field.FormComponent
                    placeholder={field.placeholder}
                    {...formFieldProps}
                    className={cn(
                      "w-full",
                      field.FormComponent === Textarea ? "min-h-[100px]" : "",
                    )}
                  />
                </FormControl>
                <FormDescription>{field.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <Loader className="h-4 w-4 animate-spin" />
          ) : initialValues?.id ? (
            "Update"
          ) : (
            "Create"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default FaqForm;
