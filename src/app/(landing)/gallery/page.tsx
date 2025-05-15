// app/gallery/page.tsx
import React from "react";
import HeroSection from "@/components/HeroSection";
import { fetchCloudinaryImages } from "@/actions/galleryActions";
import GalleryGrid from "./gallery-grid";
import { getPageByPageName } from "@/actions/pageActions";
import { generateSEOMetadata } from "@/components/seo-metadata";

export async function generateMetadata() {
  const page = await getPageByPageName("gallery");

  return generateSEOMetadata({
    title: page!!.title,
    description: page!!.description,
    image: page!!.featuredImageUrl,
  });
}
export default async function GalleryPage() {
  const { images, nextCursor } = await fetchCloudinaryImages();
  const heroData = await getPageByPageName("gallery");
  return (
    <div>
      <HeroSection
        imageUrl={heroData!!.featuredImageUrl} // Provide the image URL
        title={heroData!!.title} // Provide the image URL
        description={heroData!!.description} // Provide the image URL
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />
      <GalleryGrid initialImages={images} initialCursor={nextCursor} />
    </div>
  );
}
