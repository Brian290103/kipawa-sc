"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/mobile-menu";
import { usePathname } from "next/navigation";

interface NavItemProps {
  item: { title: string; url: string };
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const pathName = usePathname();

  return (
    <li
      className={`font-medium border ${pathName == item.url && "border-transparent bg-green-600"} hover:bg-red-500  rounded-full `}
    >
      <Link
        href={item.url}
        className={`hover:text-white ${pathName == item.url && "text-white "} uppercase tracking-wider `}
      >
        <div className={" py-3 px-5"}>{item.title}</div>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const leftItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
  ];
  const rightItems = [
    {
      title: "Gallery",
      url: "/gallery",
    },
    {
      title: "News",
      url: "/news",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ];

  return (
    <header
      className={cn(
        "w-full relative  justify-between items-center flex w-full max-w-7xl mx-auto bg-white",
        "py-4 md:py-6 px-4 md:px-8 lg:px-12  ",
      )}
    >
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          {leftItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </nav>

      <div className="absolute z-10 left-1/2 bg-white rounded-full p-3 -translate-x-1/2 top-1 -translate-y-0">
        <Link href="/">
          <Image
            src={"/logo.jpg"}
            alt={"logo for kipawa soccer club"}
            width={1000}
            height={1000}
            className="rounded-full hover:animate-spin  w-[130px] h-[130px] md:w-[120px] md:h-[120px]   md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] cursor-pointer"
          />
        </Link>
      </div>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          {rightItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </nav>

      {/* Mobile Menu  */}
      <div className="md:hidden w-full flex justify-between  flex items-center">
        <Link
          href={"/"}
          className={"flex items-center gap-0 text-xl font-semibold"}
        >
          <span className="text-black">KI</span>
          <span className="text-red-600">PA</span>
          <span className="text-green-600">WA</span>
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
