import gold from "../../../public/assets/gold-1.png";
import goldTwo from "../../../public/assets/gold-2.png";
import silverOne from "../../../public/assets/silver-1.png";
import silverTwo from "../../../public/assets/silver-2.png";
import silverThree from "../../../public/assets/silver-3.png";
import bronze from "../../../public/assets/bronze-1.png";
import bronzeTwo from "../../../public/assets/bronze-2.png";
import bronzeThree from "../../../public/assets/bornze-3.png";
import bronzeFour from "../../../public/assets/bronze-4.png";
import { StaticImageData } from "next/image";

export type Sponsor = {
  name: string;
  logo: StaticImageData;
};

export type SponsorSegment = {
  tier: "🥇 Gold" | "🥈 Silver" | "🥉 Bronze";
  sponsors: Sponsor[];
};

export const sponsorsData: SponsorSegment[] = [
  {
    tier: "🥇 Gold",
    sponsors: [
      { name: "Gold Sponsor 1", logo: gold },
      { name: "Gold Sponsor 2", logo: goldTwo },
    ],
  },
  {
    tier: "🥈 Silver",
    sponsors: [
      { name: "Silver Sponsor 1", logo: silverOne },
      { name: "Silver Sponsor 2", logo: silverTwo },
      { name: "Silver Sponsor 3", logo: silverThree },
    ],
  },
  {
    tier: "🥉 Bronze",
    sponsors: [
      { name: "Bronze Sponsor 1", logo: bronze },
      { name: "Bronze Sponsor 2", logo: bronzeTwo },
      { name: "Bronze Sponsor 3", logo: bronzeThree },
      { name: "Bronze Sponsor 4", logo: bronzeFour },
    ],
  },
];
