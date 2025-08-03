import { organizers, speakers, sponsors } from "@/libs/data/event-images";
import EventClient from "@/sections/event/event-client";
import { Organizer, Speaker, Schedule, Sponsor } from "@/types/data";
import axios from "axios";

async function fetchEvent() {
  const res = await axios("https://jsonplaceholder.org/posts");
  const raw = res.data;

  const data: {
    organizers: Organizer[];
    speakers: Speaker[];
    schedule: Schedule[];
    sponsors: Sponsor[];
  } = {
    organizers: raw.slice(0, 4).map((item: Organizer, i: number) => ({
      id: item.id,
      name: item.title,
      image: organizers[i],
      description: item.content,
    })),
    speakers: raw.slice(4, 8).map((item: Speaker, i: number) => ({
      id: item.id,
      name: item.title,
      image: speakers[i],
      description: item.content,
      social: {
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        dribbble: "https://dribble.com/",
        github: "https://github.com/",
      },
    })),
    schedule: raw.slice(8, 10).map((item: Schedule) => ({
      id: item.id,
      date: "February 11,2014",
      day: "Monday",
      duration: "05:00-06:00",
      items: [item.title, "Break", "Q&A"],
    })),
    sponsors: raw.slice(10, 14).map((item: Sponsor, i: number) => ({
      id: item.id,
      name: item.title,
      image: sponsors[i],
      description: item.content,
    })),
  };

  return data;
}

export default async function EventPage() {
  const data = await fetchEvent();
  const categories = ["Organizers", "Speakers", "Schedule", "Sponsors"];

  return <EventClient data={data} categories={categories} />;
}
