"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { leadersSection } from "@/db/schema";
import { LeadersSectionType } from "@/lib/types";

const basePath = "/admin/our-leaders";

// Get leaders section data
export const getLeadersSectionData = async (): Promise<
  LeadersSectionType[]
> => {
  try {
    const data = await db.select().from(leadersSection);
    return data;
  } catch (error: any) {
    console.error("Error fetching leaders section data:", error);
    throw new Error(`Failed to fetch leaders section data: ${error.message}`);
  }
};

// Add leaders section data
export const addLeadersSectionData = async (
  username: string,
  description: string,
  imageUrl: string,
): Promise<void> => {
  try {
    await db.insert(leadersSection).values({
      username,
      description,
      imageUrl,
    });
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error adding leaders section data:", error);
    throw new Error(`Failed to add leaders section data: ${error.message}`);
  }
};

// Update leaders section data
export const updateLeadersSectionData = async (
  id: string,
  updates: Partial<Omit<LeadersSectionType, "id" | "createdAt" | "updatedAt">>,
): Promise<void> => {
  try {
    const updatedData = { ...updates, updatedAt: new Date() };
    await db
      .update(leadersSection)
      .set(updatedData)
      .where(eq(leadersSection.id, id));
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error updating leaders section data:", error);
    throw new Error(`Failed to update leaders section data: ${error.message}`);
  }
};

// Delete leaders section data
export const deleteLeadersSectionData = async (id: string): Promise<void> => {
  try {
    await db.delete(leadersSection).where(eq(leadersSection.id, id));
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error deleting leaders section data:", error);
    throw new Error(`Failed to delete leaders section data: ${error.message}`);
  }
};
