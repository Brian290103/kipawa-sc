import React from "react";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/form/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { getPageByPageName } from "@/actions/pageActions";
import { generateSEOMetadata } from "@/components/seo-metadata";

export async function generateMetadata() {
  const page = await getPageByPageName("contact-us");

  return generateSEOMetadata({
    title: page!!.title,
    description: page!!.description,
    image: page!!.featuredImageUrl,
  });
}
const ContactUs = async () => {
  const heroData = await getPageByPageName("contact-us");
  return (
    <div>
      <HeroSection
        imageUrl={heroData!!.featuredImageUrl} // Provide the image URL
        title={heroData!!.title} // Provide the image URL
        description={heroData!!.description} // Provide the image URL
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact-us" },
        ]}
      />
      <div className="py-12 px-4 grid md:grid-cols-2 gap-3 grid-cols-1 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto">
        <div className="w-full mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-2">
          {/* WhatsApp Card */}
          <Card className="">
            <CardHeader>
              <CardTitle className="font-semibold flex items-center">
                <Phone className={"mr-4 "} /> WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://wa.me/254768425253?text=Hello%20Sammy%2C%20I%27m%20interested%20in%20joining%20Kipawa%20Soccer%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-medium hover:underline"
              >
                +254 768 425 253
              </a>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="">
            <CardHeader>
              <CardTitle className="font-semibold flex items-center">
                <Mail className={"mr-4 "} /> Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:kipawasocceracademy@gmail.com"
                className="text-blue-600 font-medium hover:underline"
              >
                kipawasocceracademy@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4026902193355!2d36.94142057477783!3d-1.5263312984593642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fa12c8b0b0e0f%3A0xfad5967e60a96fde!2sThe%20Goalhub%20Sports%20and%20Fitness%20Center!5e0!3m2!1sen!2ske!4v1745911648963!5m2!1sen!2ske"
        height="600"
        allowFullScreen=""
        className={"w-full"}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactUs;
