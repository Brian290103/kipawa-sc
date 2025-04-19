import React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LatestNews = () => {
  const newsItems = [
    {
      title: "Kipawa SC Youth Academy Wins Tournament",
      description:
        "The Kipawa SC Youth Academy team emerged victorious in the regional tournament, showcasing their exceptional talent and teamwork.",
      imageUrl: "/image7.png", //  Add actual paths
      date: "2024-07-28",
    },
    {
      title: "New Training Facilities Unveiled",
      description:
        "Kipawa SC has inaugurated state-of-the-art training facilities, providing our players with the best possible environment to hone their skills.",
      imageUrl: "/image8.png", //  Add actual paths
      date: "2024-07-25",
    },
    {
      title: "Kipawa SC Partners with Local School",
      description:
        "Kipawa SC has partnered with [School Name] to promote football among students and provide coaching and mentorship opportunities.",
      imageUrl: "/image9.jpeg", //  Add actual paths
      date: "2024-07-22",
    },
    {
      title: "Kipawa SC Women's Team Secures Sponsorship",
      description:
        "The Kipawa SC Women's Team has secured a major sponsorship deal, boosting their preparations for the upcoming season.",
      imageUrl: "/image10.png", //  Add actual paths
      date: "2024-07-20",
    },
  ];

  return (
    <section className={cn("w-full py-12 px-4 sm:px-6 lg:px-8", "relative")}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Latest News
        </h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          Stay up-to-date with the latest news and events from Kipawa SC.
        </p>
      </div>
      <Carousel
        className="w-full mx-auto"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        {" "}
        <div className="relative w-full pb-5 flex items-center gap-3 justify-center ">
          <CarouselPrevious
            className={"relative  top-0 -left-0 -translate-y-0"}
          />
          <CarouselNext className={"relative -left-0 -translate-y-0"} />
        </div>
        <CarouselContent>
          {newsItems.map((item, index) => (
            <CarouselItem
              key={index}
              className=" xl:basis-1/4 md:basis-1/3 sm:basis-1/2"
            >
              <div className="bg-neutral-100 rounded-xl">
                <div className="h-full">
                  <div className="flex flex-col  ">
                    <div className="relative mb-4">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="rounded-t-xl object-cover w-full h-64"
                      />
                    </div>
                    <div className={"py-3 px-5"}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <p className="text-gray-500 text-sm">Date: {item.date}</p>
                      <Button variant="link" className="mt-4 px-0">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default LatestNews;
