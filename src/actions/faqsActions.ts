"use server";

import { asc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { faq } from "@/db/schema"; // Import the faq schema
import { FaqType } from "@/lib/types"; // Import the FaqType interface

const basePath = "/";

// Get FAQs
export const getFaqs = async (): Promise<FaqType[]> => {
  try {
    const faqs = await db.select().from(faq).orderBy(asc(faq.createdAt));
    return faqs;
  } catch (error: any) {
    console.error("Error fetching FAQs:", error);
    throw new Error(`Failed to fetch FAQs: ${error.message}`);
  }
};

// Add a new FAQ
export const addFaq = async (
  question: string,
  answer: string,
): Promise<void> => {
  try {
    await db.insert(faq).values({ question, answer });
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error adding FAQ:", error);
    throw new Error(`Failed to add FAQ: ${error.message}`);
  }
};

// Update an existing FAQ
export const updateFaq = async (
  id: string,
  updates: Partial<Omit<FaqType, "id" | "createdAt" | "updatedAt">>,
): Promise<void> => {
  try {
    await db.update(faq).set(updates).where(eq(faq.id, id));
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error updating FAQ:", error);
    throw new Error(`Failed to update FAQ: ${error.message}`);
  }
};

// Delete an FAQ
export const deleteFaq = async (id: string): Promise<void> => {
  try {
    await db.delete(faq).where(eq(faq.id, id));
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error deleting FAQ:", error);
    throw new Error(`Failed to delete FAQ: ${error.message}`);
  }
};
