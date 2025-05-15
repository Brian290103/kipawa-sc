"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { heroSection } from "@/db/schema"; // Import the heroSection schema
import { HeroSectionType } from "@/lib/types"; // Import the HeroSection interface

const basePath = "/"; // Define a base path for revalidation

// Get hero section data
export const getHeroSectionData = async (): Promise<HeroSectionType | null> => {
  try {
    const data = await db.select().from(heroSection).limit(1); // Use .all() to get an array
    return data[0] ?? null; // Return the first element, or null if the array is empty
  } catch (error: any) {
    console.error("Error fetching hero section data:", error);
    throw new Error(`Failed to fetch hero section data: ${error.message}`);
  }
};

// Add hero section data
export const addHeroSectionData = async (
  title: string,
  description: string,
): Promise<void> => {
  try {
    await db.insert(heroSection).values({
      title,
      description,
    });
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error adding hero section data:", error);
    throw new Error(`Failed to add hero section data: ${error.message}`);
  }
};

// Update hero section data
export const updateHeroSectionData = async (
  id: string,
  updates: Partial<Omit<HeroSectionType, "id">>,
): Promise<void> => {
  try {
    const updatedData = { ...updates };
    await db.update(heroSection).set(updatedData).where(eq(heroSection.id, id));
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error updating hero section data:", error);
    throw new Error(`Failed to update hero section data: ${error.message}`);
  }
};

// Delete hero section data
export const deleteHeroSectionData = async (id: string): Promise<void> => {
  try {
    await db.delete(heroSection).where(eq(heroSection.id, id));
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error deleting hero section data:", error);
    throw new Error(`Failed to delete hero section data: ${error.message}`);
  }
};
