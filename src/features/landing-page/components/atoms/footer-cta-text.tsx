import React from "react";

type FooterCtaTextProps = {
  children: React.ReactNode;
};

export default function FooterCtaText({ children }: FooterCtaTextProps) {
  return (
    <h4 className="text-center md:text-left text-xl  sm:text-2xl md:text-2xl  lg:text-4xl  xl:text-5xl  font-semibold text-white first-letter:uppercase">
      {children}
    </h4>
  );
}
