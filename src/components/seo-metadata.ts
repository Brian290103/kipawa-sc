import { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  image: string;
  keywords?: string[];
  canonical?: string;
  twitterHandle?: string;
};

export function generateSEOMetadata({
  title,
  description,
  image,
  keywords = [],
  canonical = "https://kipawa-sc.com",
  twitterHandle = "@kipawasocceracademy", // optional
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Kipawa Soccer Academy",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: twitterHandle,
    },
    icons: {
      icon: "/favicon.ico",
    },
    metadataBase: new URL(canonical),
    alternates: {
      canonical,
    },
  };
}
