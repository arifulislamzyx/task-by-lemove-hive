import React from "react";
import { Schedule } from "@/types/data";

export default function ScheduleCard({ schedule }: { schedule: Schedule }) {
  return (
    <div className="rounded-lg p-4 shadow">
      <div className="text-lg font-bold flex justify-between">
        <p>{schedule.date}</p>
        <p>{schedule.day}</p>
      </div>
      <p className="text-sm">Duration: {schedule.duration}</p>
      <ul className="list-disc list-inside">
        {schedule.items.map((item, i) => (
          <div key={i}>
            <p>{item}</p>
            <li>{item}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
