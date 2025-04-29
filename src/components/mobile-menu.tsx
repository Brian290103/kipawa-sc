"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Volleyball } from "lucide-react";
import Link from "next/link"; // Import Link
import { cn } from "@/lib/utils";

interface NavItemProps {
  item: { title: string; url: string };
  index: number;
  setOpen: (open: boolean) => void;
}

const MobileMenuItem: React.FC<NavItemProps> = ({ item, index, setOpen }) => {
  const colors = ["black", "red-500", "green-500"];
  const color = colors[index % colors.length];

  return (
    <li className="px-3 py-1">
      <Link
        href={item.url}
        className="flex w-full"
        onClick={() => setOpen(false)}
      >
        <div
          className={cn(
            "w-full items-center justify-start backdrop-blur flex p-3 border rounded-xl gap-3 hover:bg-white",
          )}
        >
          <Volleyball className={cn("w-4 h-4", `text-${color}`)} />
          <span className="hidden text-red-500 text-green-500"></span>
          {item.title}
        </div>
      </Link>
    </li>
  );
};

const MobileMenu = () => {
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

  const allMenuItems = [...leftItems, ...rightItems];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="max-w-sm bg-white bg-[url(/images/soccer-field.jpg)] bg-cover bg-center"
        >
          <SheetHeader className="text-left backdrop-blur">
            <SheetTitle>KIPAWA Soccer Academy</SheetTitle>
            <SheetDescription className={"text-black"}>
              Building the foundation for a great footballing nation: One player
              at a time.
            </SheetDescription>
          </SheetHeader>

          {/* Render the menu here */}
          <div className="mt-8">
            <ul className={""}>
              {allMenuItems.map((item, index) => (
                <MobileMenuItem
                  key={index}
                  item={item}
                  index={index}
                  setOpen={setOpen}
                />
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
