import React from "react";
import { Box, Typography } from "@mui/material";

interface ConfirmInfoSectionTitleProps {
  title: string;
}

const ConfirmInfoSectionTitle: React.FC<ConfirmInfoSectionTitleProps> = ({
  title,
}) => {
  return (
    <Box className="section-title flex gap-5 items-center">
      <Typography className="w-fit whitespace-nowrap text-xl font-medium text-[var(--color-primary-blue)] capitalize">
        {title}
      </Typography>
      <Box className="h-[1px] w-full bg-[var(--color-border)]" />
    </Box>
  );
};

export default ConfirmInfoSectionTitle;
