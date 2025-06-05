import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";


export default function LogoTitle({}) {
  return (
    <div className="flex gap-4">
      <Image src={logo} height={42} alt={"logo"} />
      <h1 className="uppercase text-[var(--color-primary-blue)] font-medium text-[32px]">
        cod toop
      </h1>
    </div>
  );
}
