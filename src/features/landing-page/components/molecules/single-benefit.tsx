import React from "react";
import Icon from "../atoms/icon";
import { SingleBenefitType } from "../../types";

export default function SingleBenefit({ icon, text }: SingleBenefitType) {
  return (
    <li className="flex gap-[33px] pb-2 items-center ">
      <Icon
        iconSize={"40px"}
        color={"white"}
        bgColor={"var(--color-secondary-green)"}
        borderColor={"var(--color-secondary-green)"}
        icon={icon}
      />
      <p className="text-base sm:text-2xl text-[var(--color-gray)] capitalize">
        {text}
      </p>
    </li>
  );
}
