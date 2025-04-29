import React from "react";
import HeroSection from "@/components/HeroSection";
import OpeningNews from "@/components/opening-news";

const NewsPage = () => {
  return (
    <div>
      <HeroSection
        imageUrl="/images/launch.png" // Use a relevant image
        title="Latest News"
        description="Stay tuned — more Kipawa academies are coming soon to a town near you!"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
        ]}
      />
      <OpeningNews />
    </div>
  );
};

export default NewsPage;
