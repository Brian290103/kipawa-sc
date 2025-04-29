"use server";

export async function fetchCloudinaryImages(nextCursor = "") {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  const authString = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

  const url = new URL(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`,
  );
  url.searchParams.set("max_results", "30");
  url.searchParams.set("folder", "kipawa-sc/kitengela-goal-hub"); // Specify the folder here
  if (nextCursor) url.searchParams.set("next_cursor", nextCursor);

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Authorization: `Basic ${authString}`,
    },
    next: { revalidate: 60 }, // optional
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Cloudinary images");
  }

  const data = await res.json();
  return {
    images: data.resources,
    nextCursor: data.next_cursor || null,
  };
}
