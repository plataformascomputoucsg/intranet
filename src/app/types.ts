import { StaticImageData } from 'next/image';

export interface NewsItem {
  id: number;
  slug: string;
  image: string | StaticImageData;
  category?: string;
  title: string;
  date: string;
  description: string;
  isFeatured: boolean;
  highlight?: string;
  details?: string;
}

export interface CalendarDay {
  day: string;
  date: string;
  active: boolean;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  image?: string | StaticImageData;
  description: string;
  location?: string;
  category?: string;
}

export interface SectionHeaderProps {
  title: string;
  highlight: string;
  link: string;
}
