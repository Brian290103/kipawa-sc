import Hero from "@/components/hero";
import About from "@/components/about";
import MissionVision from "@/components/mission-vision";
import Faqs from "@/components/faqs";
import OurCoaches from "@/components/our-coaches";
import OpeningNews from "@/components/opening-news";
import { getHeroSectionData } from "@/actions/heroSectionActions";
import { getWhoWeAreSectionData } from "@/actions/whoWeAreSectionActions";
import { getMissionAndVisionSectionData } from "@/actions/missionAndVisionSectionActions";
import { getLeadersSectionData } from "@/actions/ourLeadersSectionActions";
import { FaqType, LeadersSectionType, NewsType } from "@/lib/types";
import { getNews } from "@/actions/newsAction";
import React from "react";
import { getFaqs } from "@/actions/faqsActions";
import { getPageByPageName } from "@/actions/pageActions";
import { generateSEOMetadata } from "@/components/seo-metadata";

export async function generateMetadata() {
  const page = await getPageByPageName("home");

  return generateSEOMetadata({
    title: page!!.title,
    description: page!!.description,
    image: page!!.featuredImageUrl,
    keywords: [
      "Kipawa Soccer Academy",
      "Youth Football Kenya",
      "Football Academy",
      "Kenyan Soccer",
      "Football Training Kenya",
    ],
  });
}

export default async function Home() {
  const sectionData = await getHeroSectionData();
  const aboutData = await getWhoWeAreSectionData();
  const missionAndVisionData = await getMissionAndVisionSectionData();
  const ourLeadersData: LeadersSectionType[] = await getLeadersSectionData();
  const newsData: NewsType[] = await getNews();
  const faqsData: FaqType[] = await getFaqs();

  return (
    <>
      <Hero data={sectionData} />
      <About data={aboutData} />
      <MissionVision data={missionAndVisionData} />
      <OurCoaches data={ourLeadersData} />
      <OpeningNews data={newsData} />
      <div className="pt-5 rounded-xl overflow-hidden">
        <iframe
          className={"w-full "}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4026902193355!2d36.94142057477783!3d-1.5263312984593642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fa12c8b0b0e0f%3A0xfad5967e60a96fde!2sThe%20Goalhub%20Sports%20and%20Fitness%20Center!5e0!3m2!1sen!2ske!4v1745911648963!5m2!1sen!2ske"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/*<OurClubs />*/}
      {/*<Testimonials />*/}
      {/*<LatestNews />*/}
      {/*<Sponsors />*/}
      <Faqs data={faqsData} />
    </>
  );
}
