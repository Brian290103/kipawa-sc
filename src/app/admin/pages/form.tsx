"use client";

import React, { useCallback, useEffect, useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ImagePlus, Loader } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import { AnimatePresence, motion } from "framer-motion";
import { addPage, updatePage } from "@/actions/pageActions";

// Define the form schema based on your page schema
const pageFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().optional(),
  featuredImageUrl: z.string().optional(), // Make imageUrl optional
  pageName: z
    .string()
    .min(1, { message: "Page Name is required" })
    .regex(/^[a-z0-9-]+$/, {
      message:
        "Page name must contain only lowercase letters, numbers, and dashes.",
    }),
});

// Define the form fields array, matching the page schema
const formFields = [
  {
    name: "title",
    label: "Title",
    placeholder: "Enter the title of the page",
    FormComponent: Input,
    validation: { required: true },
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter a description for the page",
    FormComponent: Textarea,
    validation: {},
  },
  {
    name: "featuredImageUrl",
    label: "Featured Image",
    placeholder: "Upload or select a featured image",
    FormComponent: ({ field, ...props }) => {
      const [localImageUrl, setLocalImageUrl] = useState<string | undefined>(
        field.value,
      );

      const handleImageChange = useCallback(
        (url: string) => {
          setLocalImageUrl(url);
          field.onChange(url); // Update the form field value
        },
        [field],
      );

      return (
        <>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Input
              {...props}
              value={localImageUrl}
              className="w-full"
              readOnly
            />
            <CldUploadWidget
              uploadPreset="kipawa_unsigned"
              onSuccess={(info) => {
                if (info && info.info && info.info.secure_url) {
                  handleImageChange(info.info.secure_url);
                }
              }}
              options={{
                sources: ["local", "url", "camera", "unsplash"],
              }}
            >
              {({ open }) => (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => open()}
                  className="w-full sm:w-fit h-10"
                >
                  <ImagePlus className="mr-2 h-4 w-4" />
                  Choose Image
                </Button>
              )}
            </CldUploadWidget>
          </div>
          <div className="hidden">
            <AnimatePresence>
              {localImageUrl && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 overflow-hidden rounded-md"
                >
                  <img
                    src={localImageUrl}
                    alt="Preview"
                    className="max-h-60 w-full object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      );
    },
    validation: {},
    isImageField: true,
  },

  {
    name: "pageName",
    label: "Page Name (home, about-us, contact-us, gallery)",
    placeholder: "Enter the page name (e.g., about-us)",
    FormComponent: Input,
    validation: {
      required: true,
      pattern: {
        value: /^[a-z0-9-]+$/,
        message:
          "Page name must contain only lowercase letters, numbers, and dashes.",
      },
    },
  },
];

// Define a type for the form values
type PageFormValues = z.infer<typeof pageFormSchema>;

interface PageFormProps {
  initialValues?: PageFormValues & { id?: string };
}

const PageForm: React.FC<PageFormProps> = ({ initialValues }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [localImageUrl, setLocalImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (initialValues?.featuredImageUrl) {
      setLocalImageUrl(initialValues.featuredImageUrl);
    }
  }, [initialValues?.featuredImageUrl]);

  const form = useForm<PageFormValues>({
    resolver: zodResolver(pageFormSchema),
    defaultValues: initialValues || {
      title: "",
      description: "",
      featuredImageUrl: "",
      pageName: "",
    },
  });

  const handleCloudinaryUpload = useCallback(
    (info: any) => {
      if (info && info.info && info.info.secure_url) {
        form.setValue("featuredImageUrl", info.info.secure_url);
        setLocalImageUrl(info.info.secure_url);
      }
    },
    [form],
  );

  const handleSubmit = async (data: PageFormValues) => {
    setIsLoading(true);
    try {
      if (initialValues?.id) {
        await updatePage(initialValues.id, data);
        toast.success("Page Updated");
      } else {
        await addPage(
          data.title,
          data.pageName,
          data.description,
          data.featuredImageUrl,
        );
        toast.success("Page Created");
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
                  {field.isImageField ? (
                    <>
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Input
                          placeholder={field.placeholder}
                          {...formFieldProps}
                          className="w-full"
                          readOnly
                        />
                        <CldUploadWidget
                          uploadPreset="kipawa_unsigned"
                          onSuccess={handleCloudinaryUpload}
                          options={{
                            sources: ["local", "url", "camera", "unsplash"],
                          }}
                        >
                          {({ open }) => (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => open()}
                              className="w-full sm:w-fit h-10"
                            >
                              <ImagePlus className="mr-2 h-4 w-4" />
                              Choose Image
                            </Button>
                          )}
                        </CldUploadWidget>
                      </div>
                      <div className="hidden">
                        <AnimatePresence>
                          {localImageUrl && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 overflow-hidden rounded-md"
                            >
                              <img
                                src={localImageUrl}
                                alt="Preview"
                                className="max-h-60 w-full object-contain"
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </>
                  ) : (
                    <field.FormComponent
                      placeholder={field.placeholder}
                      {...formFieldProps}
                      className={cn(
                        "w-full",
                        field.FormComponent === Textarea ? "min-h-[100px]" : "",
                      )}
                    />
                  )}
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

export default PageForm;
