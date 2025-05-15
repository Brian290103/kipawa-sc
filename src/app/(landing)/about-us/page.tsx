import React from "react";
import AboutUs from "@/components/about";
import MissionVision from "@/components/mission-vision";
import HeroSection from "@/components/HeroSection";
import Faqs from "@/components/faqs";
import { getMissionAndVisionSectionData } from "@/actions/missionAndVisionSectionActions";
import { FaqType, LeadersSectionType } from "@/lib/types";
import { getLeadersSectionData } from "@/actions/ourLeadersSectionActions";
import { getFaqs } from "@/actions/faqsActions";
import OurCoaches from "@/components/our-coaches";
import { getWhoWeAreSectionData } from "@/actions/whoWeAreSectionActions";
import { getPageByPageName } from "@/actions/pageActions";
import { generateSEOMetadata } from "@/components/seo-metadata";

export async function generateMetadata() {
  const page = await getPageByPageName("about-us");

  return generateSEOMetadata({
    title: page!!.title,
    description: page!!.description,
    image: page!!.featuredImageUrl,
  });
}
const AboutPage = async () => {
  const missionAndVisionData = await getMissionAndVisionSectionData();
  const ourLeadersData: LeadersSectionType[] = await getLeadersSectionData();
  const faqsData: FaqType[] = await getFaqs();
  const aboutData = await getWhoWeAreSectionData();

  const heroData = await getPageByPageName("about-us");

  return (
    <section className={"w-full "}>
      <HeroSection // Use the HeroSection component
        imageUrl={heroData!!.featuredImageUrl} // Provide the image URL
        title={heroData!!.title} // Provide the image URL
        description={heroData!!.description} // Provide the image URL
        breadcrumbs={[
          // Provide breadcrumb data
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <AboutUs data={aboutData} />
      <MissionVision data={missionAndVisionData} />
      {/*<Sponsors />*/}
      <OurCoaches data={ourLeadersData} />
      <Faqs data={faqsData} />
    </section>
  );
};

export default AboutPage;
