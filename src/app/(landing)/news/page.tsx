import React from "react";
import HeroSection from "@/components/HeroSection";
import OpeningNews from "@/components/opening-news";
import { NewsType } from "@/lib/types";
import { getNews } from "@/actions/newsAction";
import { getPageByPageName } from "@/actions/pageActions";
import { generateSEOMetadata } from "@/components/seo-metadata";

export async function generateMetadata() {
  const page = await getPageByPageName("news");

  return generateSEOMetadata({
    title: page!!.title,
    description: page!!.description,
    image: page!!.featuredImageUrl,
  });
}
const NewsPage = async () => {
  const newsData: NewsType[] = await getNews();
  const heroData = await getPageByPageName("news");
  return (
    <div>
      <HeroSection
        imageUrl={heroData!!.featuredImageUrl} // Provide the image URL
        title={heroData!!.title} // Provide the image URL
        description={heroData!!.description} // Provide the image URL
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
        ]}
      />
      <OpeningNews data={newsData} />
    </div>
  );
};

export default NewsPage;
