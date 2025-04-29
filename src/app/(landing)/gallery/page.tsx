// app/gallery/page.tsx
import React from "react";
import HeroSection from "@/components/HeroSection";
import { fetchCloudinaryImages } from "@/actions/galleryActions";
import GalleryGrid from "./gallery-grid";

export default async function GalleryPage() {
  const { images, nextCursor } = await fetchCloudinaryImages();

  return (
    <div>
      <HeroSection
        imageUrl="https://res.cloudinary.com/dcx55gmhy/image/upload/v1745923221/IMG-20250429-WA0061_vowqvq.jpg"
        title="Gallery"
        description="Explore our curated collection of images capturing memorable moments, events, and the essence of our journey."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />
      <GalleryGrid initialImages={images} initialCursor={nextCursor} />
    </div>
  );
}
