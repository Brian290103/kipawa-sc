import Hero from "@/components/hero";
import About from "@/components/about";
import MissionVision from "@/components/mission-vision";
import Faqs from "@/components/faqs";
import OurCoaches from "@/components/our-coaches";
import OpeningNews from "@/components/opening-news";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <OurCoaches />
      <OpeningNews />
      {/*<OurClubs />*/}
      {/*<Testimonials />*/}
      {/*<LatestNews />*/}
      {/*<Sponsors />*/}
      <Faqs />
    </>
  );
}
