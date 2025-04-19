import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const OurClubs = () => {
  const clubs = [
    {
      name: "Kipawa Soccer Club Youth Academy",
      description:
        "Our flagship program, dedicated to developing young talent from the grassroots level.  We provide top-tier coaching and facilities for aspiring footballers.",
      location: "Kitengela, Kenya",
      foundingYear: 2025,
      image: "/image5.png",
      alt: "Kipawa Soccer Academy Youth Academy",
    },
  ];

  return (
    <section className={cn("w-full py-12 px-4 sm:px-6 lg:px-8")}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Our Soccer Clubs
        </h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          Kipawa Soccer Academy is organized into several soccer clubs, each
          with a specific focus and mission. These clubs work together to
          achieve our overall goals.
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
          {clubs.map((club, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1">
                <div className="h-full bg-white rounded-xl ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative mb-4">
                      <Image
                        src={club.image}
                        alt={club.alt}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full h-64"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {club.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {club.description}
                      </p>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className={"font-semibold"}>
                              Location
                            </TableCell>
                            <TableCell> {club.location}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={"font-semibold"}>
                              Founded
                            </TableCell>
                            <TableCell>{club.foundingYear}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}

          <CarouselItem className="">
            <div className="p-1">
              <div className="h-full bg-white rounded-xl ">
                <div className="flex flex-col justify-center gap-6 items-center">
                  <div className="relative mb-4">
                    <Image
                      src={"/icons/soon.png"}
                      alt={"coming soon icon"}
                      width={50}
                      height={50}
                      className=""
                    />
                  </div>
                  <div
                    className={
                      "flex flex-col gap-2 items-center justify-center"
                    }
                  >
                    <h3 className="text-2xl  font-semibold text-gray-900 mb-2">
                      Expanding Our Reach
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed mb-4">
                      We are actively working to establish new soccer academies
                      and expand our programs to reach more young talents across
                      Kenya. Stay tuned for updates on new locations and
                      opportunities!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default OurClubs;
