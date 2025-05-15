"use client";

import React from "react";
import {
  ChevronRight,
  FileText,
  Layers,
  LucideIcon,
  Users,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

interface MenuItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  items?: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  url: string;
}
export const menuItems: MenuItem[] = [
  {
    title: "Sections",
    icon: Layers,
    items: [
      { title: "Hero Section", url: "/admin/sections/hero-section" },
      {
        title: "Who We Are Section",
        url: "/admin/sections/who-we-are-section",
      },
      {
        title: "Mission and Vision",
        url: "/admin/sections/mission-and-vision-section",
      },
    ],
    url: "/admin/sections",
  },
  {
    title: "Our Leaders",
    icon: Users,
    url: "/admin/our-leaders",
  },
  {
    title: "News",
    icon: FileText,
    items: [
      { title: "Create", url: "/admin/news/create" },
      { title: "List", url: "/admin/news" },
    ],
    url: "/admin/news",
  },
  {
    title: "FAQs",
    icon: Users,
    url: "/admin/faqs",
  },
  {
    title: "Pages",
    icon: Users,
    url: "/admin/pages",
  },
];

const NavMain = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {menuItems.map((item) => {
          const hasSubmenu = item.items && item.items.length > 0;

          if (hasSubmenu) {
            return (
              <Collapsible
                key={item.title}
                asChild
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          } else {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title} asChild>
                  <a href={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
