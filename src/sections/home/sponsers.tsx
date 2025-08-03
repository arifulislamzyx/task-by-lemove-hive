import Image from "next/image";
import { sponsorsData } from "@/libs/data/sposers-images";

export default function SponsorsSection() {
  return (
    <section className="py-10 px-4">
      <h3 className="font-bold text-xl text-center mb-6 md:mb-8 md:text-5xl">
        Our Sponsor
      </h3>
      {sponsorsData.map((segment) => (
        <div key={segment.tier} className="mb-12 text-center">
          <h2 className=" text-xs font-medium text-gray-500 md:text-xl mb-4 md:mb-8">
            {segment.tier} Sponsors
          </h2>
          <div className="flex justify-center flex-wrap gap-14">
            {segment.sponsors.map((sponsor) => (
              <div key={sponsor.name} className="relative">
                <Image
                  width={217}
                  height={66}
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
