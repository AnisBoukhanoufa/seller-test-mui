import React from "react";
import LogoTitle from "components-v1/molecules/logo-title";
import { Box } from "@mui/material";
import GoBackButton from "components-v1/atoms/go-back-button";
import { DontHaveAccount } from "components-v1/molecules/dont-have-account/dont-have-account";
import { useNavigate } from "react-router-dom";

export const AuthRightSide = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="sign-in-right w-full 
    flex flex-col justify-center
    lg:w-1/2 xl:w-2/5
     px-6  md:px-[120px]
    py-0 md:py-[80px]
    absolute right-0
    "
    >
      <Box className=" flex flex-col justify-center items-start gap-8">
        <LogoTitle />
        <Box className="hidden md:flex">
          <GoBackButton onClick={handleBack} />
        </Box>
      </Box>
      {children}
      <DontHaveAccount />
    </div>
  );
};
