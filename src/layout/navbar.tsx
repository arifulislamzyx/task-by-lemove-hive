"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/libs/data/navitems";
import { Menu, X } from "lucide-react";
import logo from "../../public/assets/logo.png";
import clsx from "clsx";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <nav className="w-full z-50 bg-transparent absolute">
      <div className="container mx-auto flex justify-between items-center p-4 lg:px-8">
        <Link href="/" className="font-bold text-xl">
          <Image src={logo} alt="task-logo" width={100} />
        </Link>

        <nav className="hidden lg:flex justify-center gap-14 font-medium text-[18px]">
          {navItems.map((item) => (
            <Link key={item.id} href={item.slug}>
              {item.nav}
            </Link>
          ))}
        </nav>

        <button className="cursor-pointer" onClick={toggleSidebar}>
          <Menu size={28} />
        </button>
      </div>

      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        />
      )}

      <div
        className={clsx(
          "fixed top-0 bottom-0 w-64 bg-white shadow-lg z-50 p-6 transition-transform duration-300 ease-in-out",
          {
            "left-0 translate-x-0": isOpen && isMobile,
            "-translate-x-full left-0": !isOpen && isMobile,
            "right-0 translate-x-0": isOpen && !isMobile,
            "translate-x-full right-0": !isOpen && !isMobile,
          }
        )}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={closeSidebar}>
            <X size={24} />
          </button>
        </div>

        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.slug}
                onClick={closeSidebar}
                className="text-lg font-medium"
              >
                {item.nav}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
