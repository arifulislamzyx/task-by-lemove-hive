export interface Organizer {
  content?: string;
  title?: string;
  id?: number;
  name?: string;
  image: string;
  description: string;
  category: string;
}

export interface Speaker {
  content?: string;
  title?: string;
  id: number;
  name: string;
  image: string;
  description: string;
  social: {
    twitter: string;
    linkedin: string;
    dribbble: string;
    github: string;
  };
}

export interface Schedule {
  title?: string;
  id: number;
  date: string;
  day: string;
  duration: string;
  items: string[];
}

export interface Sponsor {
  content?: string;
  title?: string;
  id: number;
  name: string;
  image: string;
  description: string;
}

export type Post = Organizer | Speaker | Schedule | Sponsor;
