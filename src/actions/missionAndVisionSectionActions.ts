"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { missionAndVisionSection } from "@/db/schema";
import { MissionAndVisionSectionType } from "@/lib/types";

const basePath = "/";

// Get mission and vision section data
export const getMissionAndVisionSectionData =
  async (): Promise<MissionAndVisionSectionType | null> => {
    try {
      const data = await db.select().from(missionAndVisionSection).limit(1);
      return data[0] ?? null;
    } catch (error: any) {
      console.error("Error fetching mission and vision section data:", error);
      throw new Error(
        `Failed to fetch mission and vision section data: ${error.message}`,
      );
    }
  };

// Add mission and vision section data
export const addMissionAndVisionSectionData = async (
  mission: string,
  vision: string,
  imageUrl?: string,
): Promise<void> => {
  try {
    await db.insert(missionAndVisionSection).values({
      mission,
      vision,
      imageUrl,
    });
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error adding mission and vision section data:", error);
    throw new Error(
      `Failed to add mission and vision section data: ${error.message}`,
    );
  }
};

// Update mission and vision section data
export const updateMissionAndVisionSectionData = async (
  id: string,
  updates: Partial<Omit<MissionAndVisionSectionType, "id">>,
): Promise<void> => {
  try {
    const updatedData = { ...updates };
    await db
      .update(missionAndVisionSection)
      .set(updatedData)
      .where(eq(missionAndVisionSection.id, id));
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error updating mission and vision section data:", error);
    throw new Error(
      `Failed to update mission and vision section data: ${error.message}`,
    );
  }
};

// Delete mission and vision section data
export const deleteMissionAndVisionSectionData = async (
  id: string,
): Promise<void> => {
  try {
    await db
      .delete(missionAndVisionSection)
      .where(eq(missionAndVisionSection.id, id));
    revalidatePath(basePath);
  } catch (error: any) {
    console.error("Error deleting mission and vision section data:", error);
    throw new Error(
      `Failed to delete mission and vision section data: ${error.message}`,
    );
  }
};
