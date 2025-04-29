import React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const OurCoaches = () => {
  const coaches = [
    {
      name: "Sammy Owino 'Kempes'",
      bio: "Former player of Harambee Stars, Gor Mahia and Luo Union.  Founder of AYSES Soccer Academy in the United States and professional club Texas Lighting.  Has a wealth of experience in the corporate world and coach. Experienced in development of physical and soft football infrastructure.",
      avatar: "/images/kempes.jpg", //  Add actual paths
      alt: "Sammy Owino Kempes",
    },
    {
      name: "Anthony Origi",
      bio: "Former Kenya Breweries (now Tusker) Football Club.  He comes from a great football family that includes Michael Okoth, Divock Origi and Austin Oduor. He is a former founder of Aspire Academy of East Africa. He is also a human resources consultant.",
      avatar:
        "https://res.cloudinary.com/dcx55gmhy/image/upload/v1745924308/2b5d01a3-ba48-45bd-95da-a249ef911561.png", //Add actual paths
      alt: "Anthony Origi",
    },
    {
      name: "Jacob 'Ghost' Mulee",
      bio: "Former Breweries (now Tusker) Football Club goalkeeper and Harambee Stars Head Coach.  He is a popular broadcaster and very well connected across the country.",
      avatar: "/ghost.jpg", // Add actual paths
      alt: "Jacob 'Ghost' Mulee",
    },
    {
      name: "Sammy Sholei",
      bio: "Former Breweries (now Tusker) Football Club and Harambee Stars player.  Was also Vice President of Kenya Football Federation.  He also coached in KPL.  Runs multiple businesses including Warriors, an apparel company.",
      avatar: "/images/sholei.jpg", // Add actual paths
      alt: "Sammy Sholei",
    },
  ];

  return (
    <section className={cn("w-full py-12 px-4 sm:px-6 lg:px-8")}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Our Leaders
        </h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          Meet the experienced and dedicated coaches who lead Kipawa Soccer
          Academy.
        </p>
      </div>
      <Carousel
        className="w-full  mx-auto"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <div className="relative w-full pb-5 flex items-center gap-3 justify-center ">
          <CarouselPrevious
            className={"relative  top-0 -left-0 -translate-y-0"}
          />
          <CarouselNext className={"relative -left-0 -translate-y-0"} />
        </div>
        <CarouselContent>
          {coaches.map((coach, index) => (
            <CarouselItem key={index} className="md:basis-1/4">
              <div className="rounded-xl overflow-hidden bg-white border h-full flex flex-col">
                <div className="flex flex-col items-center gap-4 mb-4">
                  <Image
                    src={coach.avatar}
                    alt={coach.alt}
                    width={800}
                    className={"w-full h-[350px] object-cover"}
                    height={1000}
                  />

                  <div className={"w-full px-4"}>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {coach.name}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 px-5 py-1 leading-relaxed flex-1">
                  {coach.bio}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default OurCoaches;
