import React from "react";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/form/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactUs = () => {
  return (
    <div>
      <HeroSection
        imageUrl="/image5.png" // Use a relevant image
        title="Contact Us"
        description="Get in touch with us for any inquiries, feedback, or support. We'd love to hear from you!"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact-us" },
        ]}
      />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
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
