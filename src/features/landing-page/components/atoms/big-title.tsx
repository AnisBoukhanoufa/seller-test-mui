import React from "react";

type BigTitleProps = { children: React.ReactNode };

export default function BigTitle({ children }: BigTitleProps) {
  return (
    <h1 className="font-normal sm:leading-[80px] text-[22px] sm:text-5xl lg:text-6xl font-[Montserrat] text-white text-center uppercase">
      {children}
    </h1>
  );
}
