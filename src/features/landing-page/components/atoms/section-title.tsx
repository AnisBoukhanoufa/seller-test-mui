import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
  alignment: "side" | "center";
  color?: string;
};

export default function SectionTitle({
  children,
  alignment,
  color = "var(--color-dark-gray)",
}: SectionTitleProps) {
  return alignment === "side" ? (
    <h3
      style={{ color }}
      className="font-[Roboto] font-medium text-base sm:text-2xl uppercase text-[#888888]"
    >
      {children}
    </h3>
  ) : (
    <h3
      style={{ color }}
      className="font-[Roboto] font-medium text-center text-base sm:text-2xl uppercase text-[#888888]"
    >
      {children}
    </h3>
  );
}
