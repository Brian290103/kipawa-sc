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
      question: "What is Kipawa Soccer Academy?",
      answer:
        "Kipawa Soccer Academy is a dedicated organization committed to developing young football talent in Kenya. We provide a supportive and challenging environment where players can grow their skills, build character, and pursue their dreams.",
    },
    {
      question: "How can I join Kipawa Soccer Academy?",
      answer:
        "Information on joining Kipawa Soccer Academy, including tryout schedules and registration details, can be found on our website's 'Join Us' section.  You can also contact our team directly for more information.",
    },
    {
      question: "What age groups do you serve?",
      answer:
        "We offer programs for a wide range of age groups, typically from U[Age] to U[Age]. Please check our website or contact us for specific age group information.",
    },
    {
      question: "Where are your training facilities located?",
      answer:
        "Our training facilities are located in [Location].  Specific locations and directions can be found on our website or by contacting our team.",
    },
    {
      question: "How can I support Kipawa Soccer Academy?",
      answer:
        "There are many ways to support Kipawa Soccer Academy, including volunteering, donations, and sponsorships.  Please visit our 'Support Us' page for more information.",
    },
    {
      question: "Does Kipawa Soccer Academy have a women's program?",
      answer:
        "Yes, Kipawa Soccer Academy is committed to promoting women's football. We have a dedicated women's team that competes at a high level.  More information can be found on our website.",
    },
    {
      question: "What is the club's philosophy?",
      answer:
        "Our club's philosophy is centered around holistic player development, focusing not only on football skills but also on character building, sportsmanship, and academic excellence.",
    },
    {
      question: "How can I get updates on team schedules and news?",
      answer:
        "You can stay updated on team schedules, news, and events by following our social media channels and subscribing to our newsletter.  Check our website for links and subscription details.",
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
                text={"Get in Touch"}
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
