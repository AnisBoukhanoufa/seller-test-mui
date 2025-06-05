import React from "react";

type ServicesCardParagraphProps = {
  text: string;
};
export default function ServicesCardParagraph({
  text,
}: ServicesCardParagraphProps) {
  return (
    <p className="text-[var(--color-gray)] first-letter:capitalize">{text}</p>
  );
}
