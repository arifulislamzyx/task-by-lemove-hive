import ConferenceTimeline from "@/sections/home/conferrance-timeline";
import Header from "@/sections/home/header";
import SponsorsSection from "@/sections/home/sponsers";

export default function Home() {
  return (
    <div className="">
      <Header />
      <ConferenceTimeline />
      <SponsorsSection />
    </div>
  );
}
