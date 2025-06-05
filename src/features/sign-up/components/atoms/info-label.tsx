import React from "react";
import { Typography } from "@mui/material";

interface ConfirmInfoLabelProps {
  label: string;
}

const ConfirmInfoLabel: React.FC<ConfirmInfoLabelProps> = ({ label }) => {
  return (
    <Typography
      variant="h2"
      fontSize={"16px"}
      className="text-base text-[var(--color-primary-blue)]  min-w-30 md:min-w-65  capitalize"
    >
      {label}
    </Typography>
  );
};

export default ConfirmInfoLabel;
