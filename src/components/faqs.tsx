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

const Faqs = () => {
  const faqs = [
    {
      question: "Who is Kipawa Soccer Academy?",
      answer:
        "Kipawa Soccer Academy is dedicated to the true development of boys and girls youth players. Beyond player development, we provide a pathway for players to play professionally locally, in Germany, and to universities in the USA. We also provide opportunities for players to pursue non-playing careers.",
    },
    {
      question: "What age group do we serve?",
      answer: "We serve boys and girls from 6 to 16 years of age.",
    },
    {
      question: "Where are training facilities located?",
      answer:
        "We only have one program at the moment, and it is located at “The Goal Hub” in Kitengela near Acacia. We plan to open multiple programs countrywide. We will keep you updated.",
    },
    {
      question: "Does Kipawa Soccer Academy have a women’s program?",
      answer:
        "Kipawa Soccer Academy is for both boys and girls. We believe in providing opportunity for girls and believe that the future for women’s football is very bright. We invite and encourage girls to come join us.",
    },
    {
      question: "What does it cost to join the program?",
      answer: `The cost for joining the program varies with location, but the cost for “The Goal Hub” in Kitengela is as follows:
- Annual registration fees – KES 12,000
- Two sessions a week – KES 6,000
- Three sessions a week – KES 8,000`,
    },
  ];

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
          {faqs.slice(0, 6).map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
