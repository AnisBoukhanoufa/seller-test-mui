import React from "react";

type HeadlineProps = {
  children: React.ReactNode;
  color?: string;
};
export default function Headline({
  children,
  color = "#000000",
}: HeadlineProps) {
  return (
    <h2 style={{ color: color }} className="text-2xl sm:text-[46px] uppercase">
      {children}
    </h2>
  );
}
