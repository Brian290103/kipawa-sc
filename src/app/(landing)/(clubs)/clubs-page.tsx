import React from "react";
import HeroSection from "@/components/HeroSection";
import OurCoaches from "@/components/our-coaches";
import OurClubs from "@/components/our-clubs";

const ClubsPage = () => {
  return (
    <div>
      <HeroSection
        imageUrl="/image2.png"
        title="Our Clubs"
        description="Explore the various clubs and academies that make up our organization, each dedicated to fostering a love for football and developing exceptional talent."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Clubs", href: "/clubs" },
        ]}
      />

      <OurCoaches />
      <OurClubs />
    </div>
  );
};

export default ClubsPage;
