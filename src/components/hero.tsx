import React from "react";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Hero = () => {
  const coaches = [
    {
      image: "/kempes.jpeg",
      alt: "Sammy Kempes",
      name: "Sammy Kempes",
    },
    {
      image: "/ghost.jpg",
      alt: "Jacob 'Ghost' Mulee",
      name: "Jacob Mulee",
    },
    {
      image: "/sholei.jpg",
      alt: "Sammy Sholei",
      name: "Sammy Sholei",
    },
  ];
  return (
    <div
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dcx55gmhy/image/upload/v1745923228/IMG-20250429-WA0066_p9yeib.jpg)",
      }}
      className={
        "bg-center relative  min-h-screen w-full bg-no-repeat bg-cover flex items-center p-5"
      }
    >
      <div className="h-full w-full bg-black opacity-50 absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="w-full pt-20 lg:pt-0 grid md:grid-cols-3 gap-3">
        <div className="flex flex-col  gap-5 col-span-2 z-10">
          <h1 className="bg-white w-fit p-3 md:p-5 rounded-ss-3xl font-semibold rounded-ee-3xl text-2xl md:text-4xl lg:text-5xl">
            <span className="text-black">Kipawa</span>{" "}
            <span className="text-red-500">Soccer</span>{" "}
            <span className="text-green-600">Academy</span>
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tighter  font-bold text-white">
            Building the foundation for a great footballing nation:
            <br />
            One player at a time.
          </h1>
          <h1 className="text-base md:text-xl text-white">
            Empowering Kenya’s youth through football:
            <br />
            Developing talent and providing a pathway for greatness.
          </h1>
          <div className="flex md:flex-row flex-col gap-3">
            <Link
              href={"/contact-us"}
              className={
                "p-5 flex hover:bg-red-600 flex items-center justify-center duration-300 group items-center gap-4  rounded-full bg-black text-white"
              }
            >
              <span className="uppercase tracking-wider font-semibold">
                Contact Us
              </span>
              <ArrowRight className={"w-6 h-6 group-hover:ms-2 duration-300"} />
            </Link>{" "}
            <Link
              href={"/about-us"}
              className={
                "p-5 flex hover:bg-red-600 flex items-center justify-center duration-300 group items-center gap-4 rounded-full bg-green-700 text-white"
              }
            >
              <span className="uppercase tracking-wider font-semibold">
                About Us
              </span>
              <ArrowRight className={"w-6 h-6 group-hover:ms-2 duration-300"} />
            </Link>
          </div>
        </div>

        <div className="z-10 mt-auto hidden">
          <div className="w-fit border p-2 rounded-full">
            <ul className="flex items-center">
              {coaches.map((coach, index) => (
                <li className="" key={index}>
                  <Avatar>
                    <AvatarImage src={coach.image} alt={coach.alt} />
                    <AvatarFallback>
                      {coach.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-white md:text-lg">
            “At Kipawa, we don’t just train players — we mentor leaders. Every
            kick, every drill, every match is a step toward greatness.”
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
