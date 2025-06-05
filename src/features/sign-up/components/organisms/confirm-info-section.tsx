import React from "react";
import { Box } from "@mui/material";
import ConfirmInfoSectionTitle from "../atoms/section-title";
import ConfirmInfoValue from "../atoms/info-value";
import ConfirmInfoLabel from "../atoms/info-label";

interface ConfirmInfoSectionProps {
  title: string;
  infos: { label: string; value: string | null | undefined }[];
  direction?: "row" | "column";
}

const ConfirmInfoSection: React.FC<ConfirmInfoSectionProps> = ({
  title,
  infos,
  direction = "row",
}) => {
  return (
    <Box className="flex flex-col gap-4">
      <ConfirmInfoSectionTitle title={title} />
      <Box className="flex flex-col gap-2 ">
        {infos.map((info, index) => (
          <Box
            key={index}
            className={`flex md:gap-14   ${direction === "row" ? "gap-4 " : "flex-col md:flex-row gap-1"}`}
          >
            <ConfirmInfoLabel label={info.label} />
            <ConfirmInfoValue value={info.value} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ConfirmInfoSection;
