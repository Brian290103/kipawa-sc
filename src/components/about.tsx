import React from "react";
import { KipawaButton } from "@/components/kipawa-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import HeadLine from "@/components/head-line";

const AboutUs = () => {
  const teamInfo = [
    {
      title: "Our History",
      description:
        "Founded in 2025, Kipawa Soccer Club has a rich history of developing young talent and competing at the highest levels in Kenyan football.",
      imageUrl: "/image1.png",
      alt: "Kipawa Soccer Club history",
    },
    {
      title: "Our Approach",
      description:
        "We employ a holistic approach to player development, focusing on technical skills, tactical awareness, physical conditioning, and character building.",
      imageUrl: "/image2.png",
      alt: "Kipawa Soccer Club approach",
    },
    {
      title: "Our Values",
      description:
        "Discipline, Integrity, Teamwork, Excellence, and Passion. These values guide everything we do, on and off the field.",
      imageUrl: "/image3.png",
      alt: "Team huddle showcasing unity and motivation",
    },
    {
      title: "The Founder",
      description:
        "Founded by football legend Sammy Owino Kempes, our club is built on a legacy of excellence and a passion for the beautiful game.",
      imageUrl: "/image4.png",
      alt: "Team huddle showcasing unity and motivation",
    },
  ];

  // Define the Kenyan flag color scheme
  const kenyanFlagColors = {
    bg: "green-700",
    text: "white",
    hoverBg: "red-600",
  };

  return (
    <section className="flex flex-col items-center gap-6 px-4 py-16 text-center">
      <HeadLine title={"About Us"} />

      <h1 className="text-3xl md:text-5xl font-bold">Who We Are</h1>

      <p className="max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed">
        Kipawa Soccer Club is a dedicated organization committed to developing
        young football talent. We provide a supportive and challenging
        environment where players can grow their skills, build character, and
        pursue their dreams. Our focus extends beyond the field, as we aim to
        empower our athletes to become leaders in their communities.
      </p>

      <KipawaButton // Use the exported component
        text="Learn More"
        colors={kenyanFlagColors}
        icon={<ArrowRight className="w-6 h-6 group-hover:ms-2 duration-300" />}
      />

      {/* Info Grid */}
      <div className="grid grid-cols-1 w-full max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {teamInfo.map((item, index) => (
          <div
            key={index}
            className={cn(
              "rounded-xl shadow group bg-neutral-50 h-fit overflow-hidden",
              index === 1 || index === 2 ? "lg:mt-12" : "", // Add mt-8 for index 1 and 2
            )}
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.alt}
                width={600}
                height={400}
                className="object-cover group-hover:scale-150 w-full duration-300 h-64"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className=" leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
