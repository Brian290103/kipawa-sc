import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/footerLinks";
import { SocialLinks } from "@/data/socialLinks";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t text-gray-900 ">
      <section className="grid hidden grid-cols-2 gap-3 items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-8 border-b">
        <h1 className="text-2xl font-bold">
          Join our newsletter to <br />
          keep you updated with us!
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2 border border-gray-700 rounded-full px-4 py-2 w-full sm:w-[300px] bg-gray-50">
            <Mail className="text-gray-400 w-5 h-5" />
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border-none focus-visible:ring-0 p-0 text-gray-900 placeholder:text-gray-400 shadow-none"
            />
          </div>
          <Button
            variant="default"
            className={cn(
              "bg-green-600 hover:bg-green-700 text-white px-6 py-5 rounded-full",
              "transition-colors duration-300",
              "w-full sm:w-auto",
            )}
          >
            Subscribe
          </Button>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col items-center justify-between gap-3 justify-between items-start gap-8">
        <article className="flex flex-col max-w-xl items-start gap-4 col-span-1">
          <Image
            src="/logo.jpg"
            alt="Kipawa Soccer Academy Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h1 className="text-xl font-semibold">Kipawa Soccer Academy</h1>
          <p className="text-gray-600">
            Kipawa Soccer Academy is dedicated to improving the level of youth
            football in the country by helping create an infrastructure, improve
            standard of coaching and provide clear pathway for a player.
          </p>

          <ul className="flex items-center gap-4">
            {SocialLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform "
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                    className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-125"
                  />
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {footerLinks.map((group, idx) => (
            <ul key={idx} className="space-y-2">
              <li className="font-semibold text-gray-900">{group.title}</li>
              {group.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-green-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </article>
      </section>
      <section className="w-full  py-6  px-4 sm:px-6 lg:px-8  border-t mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <p className="text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Kipawa Soccer Academy. All rights
            reserved.
          </p>

          <div className="flex gap-4 hidden text-gray-600">
            <a href="#" className="hover:text-blue-500 transition-colors">
              Terms of Service
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
