import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const OpeningNews = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
        <article className="rounded-xl w-full overflow-hidden">
          <Image
            src={"/images/launch.png"}
            alt={""}
            width={1000}
            height={800}
            className={"w-full h-fit"}
          />
        </article>
        <article className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl sm:text-3xl tracking-wide">
            Kipawa Soccer Academy Launches First Academy at The Goal Hub,
            Kitengela
          </h1>
          <p className="hidden">
            Kipawa Soccer Academy is officially open! Join us at The Goal Hub in
            Kitengela and be part of the future of Kenyan football.
          </p>
          <p className="">
            Kipawa Soccer Academy is proud to announce the opening of its first
            academy at The Goal Hub, located near Acacia in Kitengela.
            <br /> The academy welcomes boys and girls aged 6 to 16 years old,
            offering world-class training and development programs designed to
            nurture the next generation of football talent.
            <br /> This marks the beginning of Kipawa’s mission to expand across
            Kenya, providing professional coaching and opportunities to young
            aspiring players nationwide. <br /> Stay tuned — more Kipawa
            academies are coming soon to a town near you!
          </p>
        </article>
      </div>

      <div className="pt-5 rounded-xl overflow-hidden">
        <iframe
          className={"w-full "}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4026902193355!2d36.94142057477783!3d-1.5263312984593642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fa12c8b0b0e0f%3A0xfad5967e60a96fde!2sThe%20Goalhub%20Sports%20and%20Fitness%20Center!5e0!3m2!1sen!2ske!4v1745911648963!5m2!1sen!2ske"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default OpeningNews;
