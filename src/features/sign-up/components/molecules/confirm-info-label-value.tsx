import React from "react";
import "./value-label.scss";
import { Box } from "@mui/material";
import ConfirmInfoLabel from "../atoms/info-label";
import ConfirmInfoValue from "../atoms/info-value";

interface ConfirmInfoValueLabelProps {
  label: string;
  value: string | null | undefined;
}

const ConfirmInfoValueLabel: React.FC<ConfirmInfoValueLabelProps> = ({
  label,
  value,
}) => {
  const displayValue =
    value !== undefined && value !== null && value !== "" ? value : "-";

  return (
    <Box className="value-label flex gap-14">
      <ConfirmInfoLabel label={label} />
      <ConfirmInfoValue value={displayValue} />
    </Box>
  );
};

export default ConfirmInfoValueLabel;
