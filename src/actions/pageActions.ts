"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { page } from "@/db/schema";
import { PageType } from "@/lib/types";

const basePath = "/";

// Get all pages
export const getPages = async (): Promise<PageType[]> => {
  try {
    const pages: PageType[] = await db.select().from(page);
    return pages;
  } catch (error: any) {
    console.error("Error fetching pages:", error);
    throw new Error(`Failed to fetch pages: ${error.message}`);
  }
};

// Get a page by pageName
export const getPageByPageName = async (
  pageName: string,
): Promise<PageType | null> => {
  try {
    const result: PageType[] = await db
      .select()
      .from(page)
      .where(eq(page.pageName, pageName));
    return result[0] ?? null; // Returns the first page or null if not found
  } catch (error: any) {
    console.error(`Error fetching page with pageName ${pageName}:`, error);
    throw new Error(
      `Failed to fetch page with pageName ${pageName}: ${error.message}`,
    );
  }
};

// Add a new page
export const addPage = async (
  title: string,
  pageName: string,
  description?: string,
  featuredImageUrl?: string,
): Promise<void> => {
  try {
    await db.insert(page).values({
      title,
      pageName,
      description,
      featuredImageUrl,
    });
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error adding page:", error);
    throw new Error(`Failed to add page: ${error.message}`);
  }
};

// Update an existing page
export const updatePage = async (
  id: string,
  updates: Partial<
    Omit<PageType, "id" | "createdAt" | "updatedAt" | "pageName">
  >, //prevent pageName from being updated
): Promise<void> => {
  try {
    await db.update(page).set(updates).where(eq(page.id, id));
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error updating page:", error);
    throw new Error(`Failed to update page: ${error.message}`);
  }
};

// Delete a page
export const deletePage = async (id: string): Promise<void> => {
  try {
    await db.delete(page).where(eq(page.id, id));
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error deleting page:", error);
    throw new Error(`Failed to delete page: ${error.message}`);
  }
};
