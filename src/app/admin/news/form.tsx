"use client";

import React, { useCallback, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addNews, updateNews } from "@/actions/newsAction";
import { ImagePlus, Loader2 } from "lucide-react";
import { slugify } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Block } from "@blocknote/core";
import { CldUploadWidget } from "next-cloudinary";
import { AnimatePresence, motion } from "framer-motion";
import { useEditorStore } from "@/store/editor-store";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

// Define schema
const NewsFormSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  caption: z
    .string()
    .min(2, { message: "Caption must be at least 2 characters." }),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters." }),
  featuredImageUrl: z.string().url({ message: "Please enter a valid URL" }),
});

type NewsFormValues = z.infer<typeof NewsFormSchema>;

const formFields = [
  {
    name: "title",
    label: "Title",
    placeholder: "News Title",
    element: "input",
  },
  {
    name: "caption",
    label: "Caption",
    placeholder: "Short description or headline",
    element: "textarea",
  },
  {
    name: "featuredImageUrl",
    label: "Featured Image",
    placeholder: "Select Image",
    element: "custom",
  },
  {
    name: "content",
    label: "Content",
    placeholder: "Main content of the news article",
    element: "custom",
  },
] as const;
interface NewsFormProps {
  initialValues?: NewsFormValues & { id: string }; // Add id to initialValues
}
const NewsForm: React.FC<NewsFormProps> = ({ initialValues }) => {
  const form = useForm<NewsFormValues>({
    resolver: zodResolver(NewsFormSchema),
    defaultValues: initialValues || {
      title: "",
      caption: "",
      content: "",
      featuredImageUrl: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [localImageUrl, setLocalImageUrl] = useState<string | undefined>(
    initialValues?.featuredImageUrl,
  );
  const [isUpdate, setIsUpdate] = useState(!!initialValues?.id); // Determine if it's an update
  const { setBlocks } = useEditorStore();
  useEffect(() => {
    if (initialValues?.featuredImageUrl) {
      setLocalImageUrl(initialValues.featuredImageUrl);
      form.setValue("featuredImageUrl", initialValues.featuredImageUrl);
      setBlocks(JSON.parse(initialValues.content));
    }
  }, [initialValues, form]);
  const onSubmit = async (values: NewsFormValues) => {
    setIsLoading(true);
    try {
      if (isUpdate && initialValues?.id) {
        // Call updateNews action
        await updateNews(initialValues.id, values);
        toast.success("News updated successfully!");
      } else {
        // Call addNews action
        await addNews(
          values.title,
          values.content,
          values.caption,
          slugify(values.title),
          values.featuredImageUrl,
        );
        toast.success("News created successfully!");
        form.reset({
          title: "",
          caption: "",
          content: "",
          featuredImageUrl: "",
        });
        setLocalImageUrl(undefined);
      }
    } catch (error: any) {
      toast.error(
        `Failed to ${isUpdate ? "update" : "create"} news: ${error.message}`,
      );
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleCloudinaryUpload = useCallback(
    (info: any) => {
      if (info && info.info && info.info.secure_url) {
        form.setValue("featuredImageUrl", info.info.secure_url);
        setLocalImageUrl(info.info.secure_url);
      }
    },
    [form],
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="w-full flex sticky top-14 relative z-20 left-0 right-0 items-center justify-end pb-4 md:pb-6">
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isUpdate ? "Update News" : "Submit News"}
          </Button>
        </div>

        {formFields.map((field) => {
          if (field.name === "featuredImageUrl") {
            return (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={({ field: formFieldProps }) => (
                  <FormItem key={field.name}>
                    {/*<FormLabel>{field.label}</FormLabel>*/}
                    <FormControl>
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
                        <div className="">
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
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          }

          return (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={({ field: formFieldProps }) => (
                <FormItem>
                  {/*<FormLabel>{field.label}</FormLabel>*/}
                  <FormControl>
                    {field.element === "input" ? (
                      <Input
                        placeholder={field.placeholder}
                        {...formFieldProps}
                      />
                    ) : field.name === "content" ? (
                      <Editor
                        onChange={(blocks: Block[]) => {
                          form.setValue("content", JSON.stringify(blocks));
                        }}
                      />
                    ) : (
                      <Textarea
                        placeholder={field.placeholder}
                        rows={5}
                        cols={5}
                        {...formFieldProps}
                      />
                    )}
                  </FormControl>
                  {field.description && (
                    <FormDescription>{field.description}</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}
      </form>
    </Form>
  );
};

export default NewsForm;
