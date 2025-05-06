import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/mobile-menu";

interface NavItemProps {
  item: { title: string; url: string };
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  return (
    <li className="font-medium border rounded-full py-3 px-5">
      <Link
        href={item.url}
        className="hover:text-green-500 uppercase tracking-wider transition-colors duration-200"
      >
        {item.title}
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
            className="rounded-full w-[130px] h-[130px] md:w-[120px] md:h-[120px]   md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] cursor-pointer"
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
