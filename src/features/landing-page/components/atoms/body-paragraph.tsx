import React from "react";
type BodyParagraphProps = {
  children: React.ReactNode;
  color?: string;
};

export default function BodyParagraph({
  children,
  color = "var(--color-gray)",
}: BodyParagraphProps) {
  return (
    <p style={{ color }} className="text-[13px] sm:text-xl ">
      {children}
    </p>
  );
}
