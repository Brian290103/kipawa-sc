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
import {
  addMissionAndVisionSectionData,
  updateMissionAndVisionSectionData,
} from "@/actions/missionAndVisionSectionActions"; //  import
import { Loader } from "lucide-react";

// Define the form schema based on missionAndVisionSection schema
const missionAndVisionFormSchema = z.object({
  mission: z.string().min(1, { message: "Mission is required" }),
  vision: z.string().min(1, { message: "Vision is required" }),
});

// Define the form fields array, matching the missionAndVisionSection schema
const formFields = [
  {
    name: "mission",
    label: "Mission",
    placeholder: "Enter the mission statement",
    FormComponent: Textarea, // Use Textarea for mission
    validation: { required: true },
  },
  {
    name: "vision",
    label: "Vision",
    placeholder: "Enter the vision statement",
    FormComponent: Textarea, // Use Textarea for vision
    validation: { required: true },
  },
];

// Define a type for the form values
type MissionAndVisionFormValues = z.infer<typeof missionAndVisionFormSchema>;

interface MissionAndVisionFormProps {
  initialValues?: MissionAndVisionFormValues & { id?: string };
}

const MissionAndVisionForm: React.FC<MissionAndVisionFormProps> = ({
  initialValues,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<MissionAndVisionFormValues>({
    resolver: zodResolver(missionAndVisionFormSchema),
    defaultValues: initialValues || {
      mission: "",
      vision: "",
    },
  });

  const handleSubmit = async (data: MissionAndVisionFormValues) => {
    setIsLoading(true);
    try {
      if (initialValues?.id) {
        await updateMissionAndVisionSectionData(initialValues.id, data);
        toast.success("Mission and Vision Section Updated");
      } else {
        await addMissionAndVisionSectionData(data.mission, data.vision);
        toast.success("Mission and Vision Section Created");
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

export default MissionAndVisionForm;
