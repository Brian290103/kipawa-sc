"use client";

import React, { useState } from "react";
import Link from "next/link";
import { menuItems } from "@/components/nav-main";

export default function AdminDashboardPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (title: string) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <nav className="w-full bg-white border-r">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-green-700">Kipawa Admin</h2>
          <p className="text-sm text-gray-500 mt-1">Welcome back, Admin!</p>
        </div>
        <ul className="p-4 space-y-2">
          {menuItems.map((group) => {
            const Icon = group.icon;
            const isOpen = expanded[group.title];
            return (
              <li key={group.title}>
                <div
                  className="flex items-center justify-between p-2 rounded hover:bg-green-50 cursor-pointer"
                  onClick={() => group.items && toggle(group.title)}
                >
                  <Link
                    href={group.url}
                    className="flex items-center gap-2 text-gray-800"
                  >
                    <Icon className="w-5 h-5 text-green-600" />
                    <span className="font-medium">{group.title}</span>
                  </Link>
                  {group.items && (
                    <button
                      aria-label="Toggle submenu"
                      className="text-gray-500 hover:text-gray-700 transition"
                    >
                      {isOpen ? "−" : "+"}
                    </button>
                  )}
                </div>
                {group.items && isOpen && (
                  <ul className="ml-8 mt-1 space-y-1">
                    {group.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.url}
                          className="block p-2 text-gray-700 hover:bg-green-50 rounded"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
