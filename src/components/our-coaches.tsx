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
import { LeadersSectionType } from "@/lib/types";

const OurCoaches = ({ data }: { data: LeadersSectionType[] }) => {
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
          {data.map((coach, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:lg:basis-1/4"
            >
              <div className="rounded-xl overflow-hidden bg-white border h-full flex flex-col">
                <div className="flex flex-col items-center gap-4 mb-4">
                  <Image
                    src={coach.imageUrl}
                    alt={coach.username}
                    width={800}
                    className={
                      "w-full h-[400px] scale-100 object-top object-cover"
                    }
                    height={1000}
                  />

                  <div className={"w-full px-4"}>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {coach.username}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 px-5 py-1 leading-relaxed flex-1">
                  {coach.description}
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
