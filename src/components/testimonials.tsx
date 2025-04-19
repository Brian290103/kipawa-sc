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

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Parent",
      quote:
        "Kipawa SC has been amazing for my son.  The coaches are dedicated, and he's developed so much as a player and a person.",
      avatar: "https://mighty.tools/mockmind-api/content/human/95.jpg", //  Add actual paths
    },
    {
      name: "Jane Smith",
      role: "Player",
      quote:
        "I've been with Kipawa SC for several years, and it's like a family.  I've made great friends and learned so much.",
      avatar: "https://mighty.tools/mockmind-api/content/human/41.jpg", // Add actual paths
    },
    {
      name: "David Johnson",
      role: "Community Member",
      quote:
        "Kipawa SC is a huge asset to our community.  They're doing great work with the youth and making a positive impact.",
      avatar: "https://mighty.tools/mockmind-api/content/human/100.jpg", // Add actual paths
    },
    {
      name: "Sarah Williams",
      role: "Sponsor",
      quote:
        "Supporting Kipawa SC has been a rewarding experience.  Their commitment to excellence and community development is truly commendable.",
      avatar: "https://mighty.tools/mockmind-api/content/human/42.jpg",
    },
  ];

  return (
    <section
      className={cn(
        "w-full py-12 px-4 sm:px-6 lg:px-8",
        "bg-gray-50",
        "relative",
      )}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          What People Say
        </h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. See what our community has to say
          about their experience with Kipawa SC.
        </p>
      </div>
      <Carousel
        className="w-full max-w-4xl mx-auto"
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
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div
                className={cn(
                  "bg-white rounded-xl p-6 border",
                  "flex flex-col min-h-[200px] justify-between", // Ensure minimum height and distribute space
                )}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      <div className="uppercase">
                        {" "}
                        {testimonial.name.substring(0, 2)}
                      </div>
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 leading-relaxed flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Testimonials;
