import React from "react";
import { Sponsor } from "@/types/data";
import Image from "next/image";

export default function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className=" rounded-lg p-4 shadow flex items-center gap-4 lg:gap-10">
      <Image
        width={140}
        height={140}
        src={sponsor.image}
        alt={sponsor.name}
        className="h-[140px]"
      />
      <div>
        <h2 className=" text-xl font-bold mt-2 mb-5">{sponsor.name}</h2>
        <p className="text-ellipsis line-clamp-2">{sponsor.description}</p>
      </div>
    </div>
  );
}
