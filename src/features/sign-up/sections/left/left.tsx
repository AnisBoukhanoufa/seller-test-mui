import React from "react";
import { HaveAccount } from "../../components/molecules/have-account/have-account";
import LogoTitle from "components-v1/molecules/logo-title";

export const SignUpLefttSide = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="sign-up-left w-full 
    lg:w-1/2 
     px-6  md:px-[120px]
      py-[80px] flex flex-col gap-8
     
       ">
        {/* fixed top-0 bottom-0 left-0  */}
      <LogoTitle />
      {children}
      <HaveAccount />
    </div>
  );
};
