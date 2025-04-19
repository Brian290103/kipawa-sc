import React from "react";
import AboutUs from "@/components/about";
import MissionVision from "@/components/mission-vision";
import HeroSection from "@/components/HeroSection";
import Sponsors from "@/components/sponsors";
import Faqs from "@/components/faqs";

interface ArticleProps {
  title: string;
  subtitle?: string;
  description: string;
  content?: string;
  className?: string;
}

const AboutPage = () => {
  return (
    <section className={"w-full "}>
      <HeroSection // Use the HeroSection component
        imageUrl="/image1.png" // Provide the image URL
        title="About Kipawa SC" // Provide the title
        description="Learn more about our club's history, mission, and values." // Add a description
        breadcrumbs={[
          // Provide breadcrumb data
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <AboutUs />
      <MissionVision />
      <Sponsors />
      <Faqs />
    </section>
  );
};

export default AboutPage;
