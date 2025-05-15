import React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { KipawaButton } from "@/components/kipawa-button";
import { ArrowRight } from "lucide-react";
import { FaqType } from "@/lib/types";

const Faqs = ({ data }: { data: FaqType[] }) => {
  const kenyanFlagColors = {
    bg: "green-700",
    text: "white",
    hoverBg: "red-600",
  };

  return (
    <section className={cn("w-full py-12 px-4 sm:px-6 lg:px-8")}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          Here are some answers to common questions about Kipawa Soccer Academy.
          If you have other questions, please don't hesitate to contact us.
        </p>
      </div>
      <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {data.slice(0, 6).map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
                {/*<p className="text-gray-700 leading-relaxed">{faq.answer}</p>*/}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-xl p-6 bg-white  border ">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/faqs.png"}
                alt={"Faqs icon"}
                width={100}
                height={100}
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
              Do you have any more questions?
            </h2>
            <p className="text-gray-600 text-center leading-relaxed mb-6">
              If you have any other questions, please don't hesitate to contact
              us. We are here to help.
            </p>
            <div className="flex justify-center">
              <KipawaButton
                text={"Contact US"}
                url={"/contact-us"}
                colors={kenyanFlagColors}
                icon={<ArrowRight className={"w-6 h-6 ms-2 text-white"} />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
