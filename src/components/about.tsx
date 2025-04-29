import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AboutUs = () => {
  const teamInfo = [
    {
      title: "Our Partners",
      description:
        "Our key people have established relationships with our partners in Germany, Schechter Sports, universities in the United States, and influential individuals within the country and the region, that will allow us to provide a pathway for our players.",
      imageUrl: "/images/partners.png",
      alt: "Kipawa Soccer Academy history",
    },
    {
      title: "Our Approach",
      description:
        "We employ a holistic approach to player development, focusing on technical skills, tactical awareness, physical conditioning, and character building. We believe in nurturing each child’s potential both on and off the pitch by combining structured training with mentorship and academic support.",
      imageUrl:
        "https://res.cloudinary.com/dcx55gmhy/image/upload/v1745923275/IMG-20250429-WA0038_d0lbhf.jpg",
      alt: "Kipawa Soccer Academy approach",
    },
    {
      title: "Our Values",
      description:
        "Discipline, Integrity, Teamwork, Excellence, and Passion. These values guide everything we do, on and off the field. We foster an environment that promotes fairness, respect, and hard work. By instilling strong values in our players, we aim to develop not only exceptional athletes but also responsible and respectful citizens who positively impact their communities.",
      imageUrl:
        "https://res.cloudinary.com/dcx55gmhy/image/upload/v1745923222/IMG-20250429-WA0062_kcenfs.jpg",
      alt: "Team huddle showcasing unity and motivation",
    },
    {
      title: "Our Goal",
      description:
        "Develop Kipawa Soccer Academy nationally and work with other academies to help build the country’s youth football infrastructure by elevating coaching standards, creating a viable national youth league and providing a clear pathway to national team and beyond. ",
      imageUrl: "/images/goal.png",
      alt: "Team huddle showcasing unity and motivation",
    },
  ];

  // Define the Kenyan flag color scheme
  const kenyanFlagColors = {
    bg: "green-700",
    text: "white",
    hoverBg: "red-600",
  };

  return (
    <section className="flex flex-col items-center gap-6 px-4 py-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
        Who We Are
      </h2>
      <p className="max-w-2xl hidden text-sm sm:text-base text-gray-600 leading-relaxed">
        Kipawa Soccer Academy is a dedicated organization committed to
        developing young football talent. We provide a supportive and
        challenging environment where players can grow their skills, build
        character, and pursue their dreams. Our focus extends beyond the field,
        as we aim to empower our athletes to become leaders in their
        communities.
      </p>

      {/*<KipawaButton*/}
      {/*  url={"/about-us"} // Use the exported component*/}
      {/*  text="Learn More"*/}
      {/*  colors={kenyanFlagColors}*/}
      {/*  icon={<ArrowRight className="w-6 h-6 group-hover:ms-2 duration-300" />}*/}
      {/*/>*/}

      {/* Info Grid */}
      <div className="grid grid-cols-1 w-full  mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {teamInfo.map((item, index) => (
          <div
            key={index}
            className={cn(
              "rounded-xl shadow group bg-neutral-50 h-fit overflow-hidden",
              "",
            )}
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.alt}
                width={600}
                height={400}
                className="object-cover object-top group-hover:scale-150 w-full duration-300 h-64"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className=" leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
