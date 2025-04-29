// app/gallery/GalleryGrid.tsx
"use client";

import React, { useState, useTransition } from "react";
import { fetchCloudinaryImages } from "@/actions/galleryActions";

// react-photo-album
import { Photo, RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

// yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "yet-another-react-lightbox/plugins/counter.css";

type CloudinaryImage = {
  asset_id: string;
  secure_url: string;
  width: number;
  height: number;
  display_name?: string;
};
export default function GalleryGrid({ initialImages, initialCursor }) {
  const [images, setImages] = useState<CloudinaryImage[]>(initialImages);
  const [cursor, setCursor] = useState<string | null>(initialCursor);
  const [isPending, startTransition] = useTransition();

  // build the react-photo-album “photos” array
  const photos: Photo[] = images.map((img) => ({
    src: img.secure_url,
    width: img.width,
    height: img.height,
    alt: img.display_name ?? img.asset_id,
  }));

  // **new**: track which photo (by index) the user clicked
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const loadMore = () => {
    startTransition(async () => {
      const result = await fetchCloudinaryImages(cursor);
      setImages((prev) => [...prev, ...result.images]);
      setCursor(result.nextCursor);
    });
  };

  return (
    <div className="p-4">
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={180}
        breakpoints={[360, 480, 600, 900, 1200]}
        onClick={({ index, event }) => {
          event.preventDefault();
          setSelectedIndex(index);
        }}
        sizes={{
          size: "1200px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
      />

      {cursor && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={loadMore}
            disabled={isPending}
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            {isPending ? "Loading..." : "Load More"}
          </button>
        </div>
      )}

      <Lightbox
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        open={selectedIndex !== null}
        // here we tell yarl to jump straight to our selectedIndex
        index={selectedIndex ?? 0}
        close={() => setSelectedIndex(null)}
        slides={photos.map((p) => ({ src: p.src }))}
        carousel={{ finite: true }}
        styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, 0.85)" } }}
        on={{
          slideChange: ({ index }) => setSelectedIndex(index),
          // optional: close on backdrop click
          backdropClick: () => setSelectedIndex(null),
        }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </div>
  );
}
