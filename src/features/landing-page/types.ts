
import { StaticImageData } from "next/image";

export type SingleServiceType = {
  icon: StaticImageData;
  title: string;
  text: string;
  phoneIcon: StaticImageData;
};

export type SingleBenefitType = {
  icon: StaticImageData;
  text: string;
};

export type SingleTestimonialType = {
  id: string;
  text: string;
};
