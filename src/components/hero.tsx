import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const coaches = [
    {
      image: "/profile1.jpg",
      alt: "Profile 1",
    },
    {
      image: "/profile2.jpg",
      alt: "Profile 1",
    },
    {
      image: "/profile3.jpg",
      alt: "Profile 1",
    },
  ];
  return (
    <div
      className={
        "bg-[url(/hero1.png)] bg-left md:bg-[url(/hero3.png)] relative  min-h-screen w-full bg-no-repeat bg-cover flex items-center p-5"
      }
    >
      <div className="h-full w-full bg-black opacity-50 absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="w-full pt-20 lg:pt-0 grid md:grid-cols-3 gap-3">
        <div className="flex flex-col  gap-5 col-span-2 z-10">
          <h1 className="bg-white w-fit p-3 md:p-5 rounded-ss-3xl font-semibold rounded-ee-3xl text-2xl md:text-4xl lg:text-5xl">
            <span className="text-black">Kipawa</span>{" "}
            <span className="text-red-500">Soccer</span>{" "}
            <span className="text-green-600">Club</span>
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tighter  font-bold text-white">
            Shaping Tomorrow’s <br /> Football Stars, Today.
          </h1>
          <h1 className="text-base md:text-xl text-white">
            Empowering Kenya’s youth through world-class football training{" "}
            <br /> — nurturing talent, building champions, and shaping
            futures.{" "}
          </h1>
          <div className="flex md:flex-row flex-col gap-3">
            <button
              className={
                "p-5 flex hover:bg-red-600 flex items-center justify-center duration-300 group items-center gap-4  rounded-full bg-black text-white"
              }
            >
              <span className="uppercase tracking-wider font-semibold">
                Contact Us
              </span>
              <ArrowRight className={"w-6 h-6 group-hover:ms-2 duration-300"} />
            </button>{" "}
            <button
              className={
                "p-5 flex hover:bg-red-600 flex items-center justify-center duration-300 group items-center gap-4 rounded-full bg-green-700 text-white"
              }
            >
              <span className="uppercase tracking-wider font-semibold">
                Watch Highlights
              </span>
              <ArrowRight className={"w-6 h-6 group-hover:ms-2 duration-300"} />
            </button>
          </div>
        </div>

        <div className="z-10 mt-auto">
          <div className="w-fit border p-2 rounded-full">
            <ul className="flex items-center">
              {coaches.map((item, index) => (
                <li className="" key={index}>
                  <Image
                    src={item.image}
                    alt={"profile image"}
                    className={"rounded-full "}
                    width={40}
                    height={40}
                  />
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
