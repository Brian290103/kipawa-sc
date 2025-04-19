import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-900 ">
      <section className="flex  flex-col md:flex-row items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-8 border-b">
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

      <section className="w-full py-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start gap-8">
        <article className="flex flex-col items-start gap-4">
          <Image
            src={"/logo.png"}
            alt={"Kipawa SC Logo"}
            width={80}
            height={80}
            className="rounded-full"
          />
          <h1 className="text-xl font-semibold">Kipawa SC</h1>
          <p className="text-gray-600">
            Kipawa SC is a leading football club dedicated to developing talent
            and promoting the sport in Kenya.
          </p>
        </article>

        <article className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4   gap-8 md:gap-16">
          {/* 4 menu links in each ul */}
          <ul className="space-y-2">
            <li className="font-semibold text-gray-900">Quick Links</li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Teams
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                News
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="font-semibold text-gray-900">Club Info</li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Vision
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                History
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="font-semibold text-gray-900">Resources</li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Schedule
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Results
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Standings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="font-semibold text-gray-900">Legal</li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Terms of Use
              </a>
            </li>
          </ul>
        </article>
      </section>
      <section className="w-full  py-6  px-4 sm:px-6 lg:px-8  border-t mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Kipawa SC. All rights reserved.
          </p>

          <div className="flex gap-4 text-gray-600">
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
