import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NewsType } from "@/lib/types";
import EditorClient from "@/components/editor-client";

const OpeningNews = ({ data }: { data: NewsType[] }) => {
  return (
    <section className={cn("w-full py-12 px-4 sm:px-6 lg:px-8", "relative")}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Kipawa Soccer Academy News
        </h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          Stay tuned — more Kipawa academies are coming soon to a town near you!
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
          {data.map((newsItem, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
                <article className="rounded-xl w-full overflow-hidden">
                  <Image
                    src={newsItem.featuredImageUrl}
                    alt={""}
                    width={1000}
                    height={800}
                    className={"w-full h-fit"}
                  />
                </article>
                <article className="flex flex-col gap-2">
                  <h1 className="font-bold text-2xl sm:text-3xl tracking-wide">
                    {newsItem.title}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {newsItem.caption}
                  </p>
                  <EditorClient
                    editable={false}
                    value={JSON.parse(newsItem.content)}
                  />
                </article>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default OpeningNews;
