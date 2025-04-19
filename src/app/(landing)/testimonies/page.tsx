import React from "react";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/testimonials";

const TestimoniesPage = () => {
  return (
    <div>
      <HeroSection
        imageUrl="/image3.png"
        title="What Our Members Say"
        description="Discover the impact Kipawa SC has had on our members and their football journey. Read inspiring stories and testimonials from players, parents, and coaches."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Testimonials", href: "/testimonials" },
        ]}
      />

      <Testimonials />
    </div>
  );
};

export default TestimoniesPage;
