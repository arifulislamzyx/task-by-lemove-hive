import React from "react";
import { Speaker } from "@/types/data";
import Image from "next/image";
import { Dribbble, Github, Linkedin, Twitter } from "lucide-react";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="flex gap-4 lg:gap-10 rounded-lg p-4 shadow">
      <Image
        width={140}
        height={140}
        src={speaker.image}
        alt={speaker.name}
        className="h-[140px] rounded-lg"
      />
      <div>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <h2 className="text-xl font-bold mt-2 text-ellipsis line-clamp-1 mb-0 lg:mb-5">
            {speaker.name}
          </h2>
          <div className="flex gap-4 mt-2 py-2 lg:py-0">
            <a href={speaker.social.twitter}>
              <Twitter size={20} color="#CDCDCD" />
            </a>
            <a href={speaker.social.linkedin}>
              <Linkedin size={20} color="#CDCDCD" />
            </a>
            <a href={speaker.social.dribbble}>
              <Dribbble size={20} color="#CDCDCD" />
            </a>
            <a href={speaker.social.github}>
              <Github size={20} color="#CDCDCD" />
            </a>
          </div>
        </div>
        <p className="text-ellipsis line-clamp-2">{speaker.description}</p>
      </div>
    </div>
  );
}
