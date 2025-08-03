"use client";

import { useState } from "react";
import Sidebar from "@/layout/sidebar";
import CategorySection from "../category/category";
import { Organizer, Speaker, Schedule, Sponsor } from "@/types/data";

interface EventClientProps {
  data: {
    organizers: Organizer[];
    speakers: Speaker[];
    schedule: Schedule[];
    sponsors: Sponsor[];
  };
  categories: string[];
}

export default function EventClient({ data, categories }: EventClientProps) {
  const [selected, setSelected] = useState<string>(categories[0]);
  const [orderedCategories, setOrderedCategories] =
    useState<string[]>(categories);

  return (
    <main className="container mx-auto p-4 py-14 lg:py-[100px]">
      <div className="mb-12">
        <h2 className=" text-2xl lg:text-5xl font-bold mb-4">{selected}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          repudiandae?
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 ">
        <aside className="w-full md:w-2/6">
          <Sidebar
            categories={orderedCategories}
            onReorder={setOrderedCategories}
            selected={selected}
            onSelect={setSelected}
          />
        </aside>
        <section className="w-full md:w-4/5">
          <CategorySection category={selected} data={data} />
        </section>
      </div>
    </main>
  );
}
