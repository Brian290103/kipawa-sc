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
        <Button
          className={cn("w-full items-center justify-start")}
          variant={"outline"}
          size={"lg"}
        >
          <Volleyball className={cn("w-4 h-4", `text-${color}`)} />
          <span className="hidden text-red-500 text-green-500"></span>
          {item.title}
        </Button>
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
      title: "About",
      url: "/about",
    },
    {
      title: "Clubs",
      url: "/clubs",
    },
  ];
  const rightItems = [
    {
      title: "Testimonies",
      url: "/testimonies",
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
        <SheetContent side={"left"} className="max-w-sm bg-white">
          <SheetHeader className="text-left">
            <SheetTitle>KIPAWA Soccer Academy</SheetTitle>
            <SheetDescription>KIPAWA</SheetDescription>
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
