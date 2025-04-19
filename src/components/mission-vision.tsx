import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import HeadLine from "@/components/head-line";

const MissionVision = () => {
  const list = [
    {
      title: "Our Mission",
      icon: "/icons/mission.png", //  Make sure these paths are correct
      caption:
        "To identify, nurture, and promote young football talent in Kenya, providing them with the platform to achieve their full potential.",
    },
    {
      title: "Our Vision",
      icon: "/icons/vision.png", // Make sure these paths are correct
      caption:
        "To be the leading football academy in Kenya, recognized for producing world-class players and empowering communities through sports.",
    },
  ];
  return (
    <section
      className={cn(
        "w-full  py-12 px-4 sm:px-6 lg:px-8", // Added padding
        "bg-neutral-50", // Light background
      )}
    >
      <div className="text-center mb-8 flex-col gap-3 flex">
        <div className="flex ">
          <HeadLine title={"Mission and Vision"} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Our Mission & Vision2
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          A clear roadmap for our goals and aspirations.
        </p>
      </div>
      <ul
        className={cn(
          "grid grid-cols-1 max-w-4xl mx-auto md:grid-cols-2 gap-5", // Grid layout for items
          "space-y-8 md:space-y-0",
        )}
      >
        {list.map((item, index) => (
          <li
            key={index}
            className={cn(
              "flex flex-col items-start gap-6", // Flex layout for icon and text
              "bg-white rounded-xl p-6", // White background, rounded corners, padding
            )}
          >
            <div className="flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                width={56} //  Set appropriate dimensions
                height={56}
                className="rounded-md"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.caption}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MissionVision;
