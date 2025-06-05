import React from "react";

type FooterCtaTextProps = {
  children: React.ReactNode;
};
export default function FooterText({ children }: FooterCtaTextProps) {
  return (
    <p className="font-sm first-letter:capitalize text-[var(--color-gray)]">
      {children}
    </p>
  );
}
