import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const OurCoaches = () => {
  const coaches = [
    {
      name: "Sammy Owino Kempes",
      role: "Founder & Head Coach",
      bio: "A legendary figure in Kenyan football, Sammy Owino Kempes brings decades of experience as both a player and a coach. His vision and passion drive Kipawa Soccer Academy's commitment to excellence.",
      avatar: "/kempes.jpeg", //  Add actual paths
      alt: "Sammy Owino Kempes",
    },
    {
      name: "Jacob 'Ghost' Mulee",
      role: "Technical Director",
      bio: "Known for his tactical brilliance and success with the Kenyan national team, Jacob 'Ghost' Mulee provides invaluable guidance and expertise to our coaching staff and players.",
      avatar: "/ghost.jpg", // Add actual paths
      alt: "Jacob 'Ghost' Mulee",
    },
    {
      name: "Sammy Sholei",
      role: "Youth Development Coach",
      bio: "Sammy Sholei is dedicated to nurturing young talent and instilling a love for the game in our academy players. His focus is on developing fundamental skills and fostering a positive team environment.",
      avatar: "/sholei.jpg", // Add actual paths
      alt: "Sammy Sholei",
    },
    {
      name: "Anthony Origi",
      role: "Goalkeeping Coach",
      bio: "A former professional goalkeeper, Anthony Origi specializes in training and mentoring our goalkeepers. He brings a wealth of knowledge and experience to help our keepers excel.",
      avatar: "/origi.jpg", //Add actual paths
      alt: "Anthony Origi",
    },
  ];

  return (
    <section className={cn("w-full py-12 px-4 sm:px-6 lg:px-8")}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Our Coaches
        </h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          Meet the experienced and dedicated coaches who lead Kipawa Soccer
          Academy.
        </p>
      </div>
      <Carousel
        className="w-full max-w-4xl mx-auto"
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
            <CarouselItem key={index} className="md:basis-1/3">
              <div className="rounded-lg bg-white border h-full flex flex-col">
                <div className="flex flex-col items-center gap-4 mb-4">
                  <Avatar
                    className={
                      "rounded-t-xl  rounded-b-none w-full h-[300px] !object-cover"
                    }
                  >
                    <AvatarImage src={coach.avatar} alt={coach.alt} />
                    <AvatarFallback>
                      {coach.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className={"w-full px-4"}>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {coach.name}
                    </h3>
                    <p className="text-gray-500">{coach.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 p-5 leading-relaxed flex-1">
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
