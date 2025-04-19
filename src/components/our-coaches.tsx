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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const OurCoaches = () => {
  const coaches = [
    {
      name: "Coach John Smith",
      role: "Head Coach",
      bio: "John has over 20 years of coaching experience, with a focus on youth development. He holds a UEFA Pro License and has a proven track record of success.",
      avatar: "https://mighty.tools/mockmind-api/content/human/115.jpg", //  Add actual paths
      alt: "Coach John Smith",
    },
    {
      name: "Coach Jane Doe",
      role: "Assistant Coach",
      bio: "Jane specializes in tactical analysis and player performance. She is passionate about creating a positive and supportive team environment.",
      avatar: "https://mighty.tools/mockmind-api/content/human/82.jpg", // Add actual paths
      alt: "Coach Jane Doe",
    },
    {
      name: "Coach David Kimani",
      role: "Goalkeeping Coach",
      bio: "David is a former professional goalkeeper with extensive experience. He is dedicated to training and mentoring our goalkeepers.",
      avatar: "https://mighty.tools/mockmind-api/content/human/42.jpg", // Add actual paths
      alt: "Coach David Kimani",
    },
  ];

  return (
    <section className={cn("w-full py-12 px-4 sm:px-6 lg:px-8")}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Our Coaches
        </h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          Meet the experienced and dedicated coaches who lead Kipawa SC.
        </p>
      </div>
      <Carousel
        className="w-full max-w-4xl mx-auto"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {coaches.map((coach, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <div className="p-1">
                <Card className="transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={coach.avatar} alt={coach.alt} />
                        <AvatarFallback>
                          {coach.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-900">
                          {coach.name}
                        </CardTitle>
                        <CardDescription className="text-gray-500">
                          {coach.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-gray-700 leading-relaxed">{coach.bio}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default OurCoaches;
