import React from "react";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/latest-news";

const NewsPage = () => {
  return (
    <div>
      <HeroSection
        imageUrl="/image4.png" // Use a relevant image
        title="Latest News"
        description="Stay up-to-date with the latest news, match highlights, and club announcements from Kipawa SC."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
        ]}
      />
      <LatestNews />
    </div>
  );
};

export default NewsPage;
