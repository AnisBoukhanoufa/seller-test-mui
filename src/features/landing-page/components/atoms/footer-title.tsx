import React from "react";

type FooterTitleProps = {
  children: React.ReactNode;
};
export default function FooterTitle({ children }: FooterTitleProps) {
  return (
    <h3 className="uppercase font-semibold text-[var(--color-primary-blue)] font-[13px]">
      {children}
    </h3>
  );
}
