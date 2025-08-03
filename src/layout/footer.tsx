import { Dribbble, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/assets/footer-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#111D5E] flex flex-col items-center text-center text-white space-y-6 py-10 lg:py-[70px]">
      <Link href="/" className="mb-12 lg:mb-20">
        <Image src={logo} alt="logo" width={176} height={48} />
      </Link>

      <div className="flex justify-center items-center gap-8">
        <Twitter color="white" size={24} />
        <Instagram color="white" size={24} />
        <Facebook color="white" size={24} />
        <Dribbble color="white" size={24} />
      </div>

      <p className="font-normal tracking-normal">
        © 2023 Lemonhive. All rights reserved.
      </p>
    </footer>
  );
}
