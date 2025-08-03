import React from "react";
import { Organizer } from "@/types/data";
import Image from "next/image";

export default function OrganizerCard({ organizer }: { organizer: Organizer }) {
  return (
    <div className="rounded-lg p-4 shadow flex justify-center gap-4 lg:gap-20 bg-white">
      <Image
        width={140}
        height={140}
        src={organizer.image}
        alt={organizer.name!}
        className="h-[140px]  object-cover rounded-2xl"
      />
      <div>
        <h2 className="text-xl font-bold mt-2 tracking-normal line-height text-ellipsis line-clamp-1">
          {organizer.name}
        </h2>
        <p className="text-ellipsis line-clamp-2 mt-5">
          {organizer.description}
        </p>
      </div>
    </div>
  );
}
