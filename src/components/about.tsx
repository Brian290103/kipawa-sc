"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const AboutUs = ({ data }) => {
  // Define the Kenyan flag color scheme
  const kenyanFlagColors = {
    bg: "green-700",
    text: "white",
    hoverBg: "red-600",
  };
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 + i * 0.2 },
    }),
  };
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-6 px-4 py-16 text-center"
    >
      <motion.h2
        variants={titleVariants}
        className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight"
      >
        Who We Are
      </motion.h2>
      <motion.p
        variants={paragraphVariants}
        className="max-w-2xl hidden text-sm sm:text-base text-gray-600 leading-relaxed"
      >
        Kipawa Soccer Academy is a dedicated organization committed to
        developing young football talent. We provide a supportive and
        challenging environment where players can grow their skills, build
        character, and pursue their dreams. Our focus extends beyond the field,
        as we aim to empower our athletes to become leaders in their
        communities.
      </motion.p>

      {/*<KipawaButton*/}
      {/*  url={"/about-us"} // Use the exported component*/}
      {/*  text="Learn More"*/}
      {/*  colors={kenyanFlagColors}*/}
      {/*  icon={<ArrowRight className="w-6 h-6 group-hover:ms-2 duration-300" />}*/}
      {/*/>*/}

      {/* Info Grid */}
      <div className="grid grid-cols-1 w-full  mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {data.map((item, index) => (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={index}
            key={index}
            className={cn(
              "rounded-xl shadow group bg-neutral-50 h-full overflow-hidden",
              "",
            )}
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={600}
                height={600}
                className="object-center object-cover object-top group-hover:scale-150 w-full duration-300 h-84 md:h-52 lg:h-64"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className=" leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutUs;
