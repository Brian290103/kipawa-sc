import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const leftItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about", // Added route
    },
    {
      title: "Club",
      url: "/club", // Added route
    },
  ];
  const rightItems = [
    {
      title: "Events",
      url: "/events", // Added route
    },
    {
      title: "News",
      url: "/news", // Added route
    },
    {
      title: "Contact Us",
      url: "/contact", // Added route
    },
  ];

  return (
    <header
      className={cn(
        "w-full relative justify-between items-center flex w-full max-w-7xl mx-auto bg-white",
        "py-4 md:py-6 px-4 md:px-8 lg:px-12  ", // Added padding for better spacing
      )}
    >
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          {leftItems.map((item, index) => (
            <li key={index} className="text-sm font-medium">
              <a
                href={item.url}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute z-10 left-1/2 bg-white rounded-full p-3 -translate-x-1/2 top-1 -translate-y-0">
        <Image
          src={"/logo.png"}
          alt={"logo for kipawa soccer club"}
          width={100}
          height={100}
          className="rounded-full" //Added rounded corners
        />
      </div>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          {rightItems.map((item, index) => (
            <li key={index} className="text-sm font-medium">
              <a
                href={item.url}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu (Simplified -  For full mobile menu, you'd typically use a library or more complex state) */}
      <div className="md:hidden flex items-center">
        {/* Placeholder for a mobile menu icon (hamburger) */}
        <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:shadow-outline">
          {/* Replace this with an actual icon, like a hamburger menu icon from a library (e.g., Lucide React) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
