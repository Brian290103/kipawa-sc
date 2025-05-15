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
import {
  addLeadersSectionData,
  updateLeadersSectionData,
} from "@/actions/ourLeadersSectionActions";

// Define the form schema based on the leaders schema
const leadersFormSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  imageUrl: z.string().optional(), // Make imageUrl optional
});

// Define the form fields array, matching the leaders schema
const formFields = [
  {
    name: "username",
    label: "Username",
    placeholder: "Enter username",
    FormComponent: Input,
    validation: { required: true },
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter a description",
    FormComponent: Textarea,
    validation: { required: true },
  },
  {
    name: "imageUrl",
    label: "Image",
    placeholder: "Upload or select an image",
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
                  className="h-10"
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
];

// Define a type for the form values
type LeadersFormValues = z.infer<typeof leadersFormSchema>;

interface LeadersFormProps {
  initialValues?: LeadersFormValues & { id?: string };
}

const LeadersForm: React.FC<LeadersFormProps> = ({ initialValues }) => {
  const [localImageUrl, setLocalImageUrl] = useState<string | null>(null);
  useEffect(() => {
    initialValues && setLocalImageUrl(initialValues!!.imageUrl);
  }, [localImageUrl]);

  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<LeadersFormValues>({
    resolver: zodResolver(leadersFormSchema),
    defaultValues: initialValues || {
      title: "",
      description: "",
      imageUrl: "",
    },
  });

  const handleCloudinaryUpload = useCallback(
    (info: any) => {
      if (info && info.info && info.info.secure_url) {
        form.setValue("imageUrl", info.info.secure_url);
        setLocalImageUrl(info.info.secure_url);
      }
    },
    [form],
  );

  const handleSubmit = async (data: LeadersFormValues) => {
    setIsLoading(true);
    try {
      if (initialValues?.id) {
        await updateLeadersSectionData(initialValues.id, data);
        toast.success("Leader Updated");
      } else {
        await addLeadersSectionData(
          data.username,
          data.description,
          data.imageUrl!,
        );
        toast.success("Leader Created");
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
                              className="w-full sm:w-fit"
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

export default LeadersForm;
