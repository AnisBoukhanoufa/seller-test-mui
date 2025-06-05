import React from "react";
import { Link } from "../../../../../renderer/Link";

type FooterCtaButtonProps = {
  children: React.ReactNode;
};
function FooterCtaButton({ children }: FooterCtaButtonProps) {
  return (
    <Link
      to="/sign-up"
      className={`px-8 py-2 
        xl:px-12 xl:py-4   
        text-xl rounded-full
        bg-[var(--color-secondary-green)]  capitalize
        text-white font-medium `}
    >
      {children}
    </Link>
  );
}

export default FooterCtaButton;
