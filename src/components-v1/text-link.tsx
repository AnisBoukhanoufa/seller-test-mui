import React from "react";
import { Link } from "react-router-dom";

type TextLinkProps = {
  url: string;
  children: React.ReactNode;
  underline?: boolean;
};

export default function TextLink({
  children,
  url,
  underline = true,
}: TextLinkProps) {
  return (
    <Link
      to={url}
      className={`text-link text-[var(--color-primary-blue)] capitalize font-bold ${
        underline ? "underline" : ""
      }`}
    >
      {children}
    </Link>
  );
}
