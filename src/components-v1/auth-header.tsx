import React from "react";

interface AuthHeaderProps {
  title?: string;
  subtitle?: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({
  title = "welcome back",
  subtitle = "please enter your details.",
}) => (
  <div className="my-14">
    <h3
      className="text-[var(--color-primary-blue)] capitalize font-medium text-2xl md:text-[40px] "
    >
      {title}
    </h3>
    <p
      className="text-[var(--color-primary-blue)] first-letter:uppercase text-sm md:text-base "
    >
      {subtitle}
    </p>
  </div>
);

export default AuthHeader;
