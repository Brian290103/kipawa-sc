"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { whoWeAreSection } from "@/db/schema"; // Import the whoWeAreSection schema
import { WhoWeAreSectionType } from "@/lib/types"; // Import the WhoWeAreSection interface

const basePath = "/";

// Get "Who We Are" section data
export const getWhoWeAreSectionData =
  async (): Promise<WhoWeAreSectionType | null> => {
    try {
      const data = await db.select().from(whoWeAreSection);
      return data;
    } catch (error: any) {
      console.error("Error fetching 'Who We Are' section data:", error);
      throw new Error(
        `Failed to fetch 'Who We Are' section data: ${error.message}`,
      );
    }
  };

// Add "Who We Are" section data
export const addWhoWeAreSectionData = async (
  title: string,
  description: string,
  imageUrl: string,
): Promise<void> => {
  try {
    await db.insert(whoWeAreSection).values({
      title,
      description,
      imageUrl,
    });
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error adding 'Who We Are' section data:", error);
    throw new Error(
      `Failed to add 'Who We Are' section data: ${error.message}`,
    );
  }
};

// Update "Who We Are" section data
export const updateWhoWeAreSectionData = async (
  id: string,
  updates: Partial<Omit<WhoWeAreSectionType, "id" | "createdAt" | "updatedAt">>,
): Promise<void> => {
  try {
    const updatedData = { ...updates, updatedAt: new Date() };
    await db
      .update(whoWeAreSection)
      .set(updatedData)
      .where(eq(whoWeAreSection.id, id));
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error updating 'Who We Are' section data:", error);
    throw new Error(
      `Failed to update 'Who We Are' section data: ${error.message}`,
    );
  }
};

// Delete "Who We Are" section data
export const deleteWhoWeAreSectionData = async (id: string): Promise<void> => {
  try {
    await db.delete(whoWeAreSection).where(eq(whoWeAreSection.id, id));
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error deleting 'Who We Are' section data:", error);
    throw new Error(
      `Failed to delete 'Who We Are' section data: ${error.message}`,
    );
  }
};
