import { StaticImageData } from "next/dist/shared/lib/get-img-props";

export interface tile {
  logo: StaticImageData;
  group: string;
  location: string;
  role: string;
  start: string;
  end: string;
  alt: string;
  description: string[];
  even: boolean;
}
