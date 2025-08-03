import React, { useMemo } from "react";
import OrganizerCard from "@/components/cards/Organizer";
import SpeakerCard from "@/components/cards/Speaker";
import ScheduleCard from "@/components/cards/Schedule";
import SponsorCard from "@/components/cards/Sponsor";
import { Organizer, Speaker, Schedule, Sponsor } from "@/types/data";

interface CategorySectionProps {
  category: string;
  data: {
    organizers: Organizer[];
    speakers: Speaker[];
    schedule: Schedule[];
    sponsors: Sponsor[];
  };
}

export default function CategorySection({
  category,
  data,
}: CategorySectionProps) {
  const content = useMemo(() => {
    switch (category) {
      case "Organizers":
        return data.organizers.map((org) => (
          <OrganizerCard key={org.id} organizer={org} />
        ));
      case "Speakers":
        return data.speakers.map((sp) => (
          <SpeakerCard key={sp.id} speaker={sp} />
        ));
      case "Schedule":
        return data.schedule.map((sc) => (
          <ScheduleCard key={sc.id} schedule={sc} />
        ));
      case "Sponsors":
        return data.sponsors.map((sp) => (
          <SponsorCard key={sp.id} sponsor={sp} />
        ));
      default:
        return null;
    }
  }, [category, data]);

  return (
    <div className="bg-[#F9FAFB] p-5 lg:p-[52px] rounded-2xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
      {content}
    </div>
  );
}
