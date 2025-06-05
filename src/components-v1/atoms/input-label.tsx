import React from "react";

type Props = { label: string; htmlFor: string };

const InputLabel = ({ label, htmlFor }: Props) => {
  return (
    <label
      className="pl-1 text-[var(--color-primary-blue)] font-medium text-base mb-2 capitalize text-xs md:text-base flex-1/2"
      htmlFor={htmlFor}
    >
      {label}
    </label>
  );
};

export default InputLabel;
