import Hero from "@/components/hero";
import About from "@/components/about";
import MissionVision from "@/components/mission-vision";
import OurClubs from "@/components/our-clubs";
import Testimonials from "@/components/testimonials";
import LatestNews from "@/components/latest-news";
import Sponsors from "@/components/sponsors";
import Faqs from "@/components/faqs";
import OurCoaches from "@/components/our-coaches";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <OurCoaches />
      <OurClubs />
      <Testimonials />
      <LatestNews />
      <Sponsors />
      <Faqs />
    </>
  );
}
