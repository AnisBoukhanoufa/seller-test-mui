import React from "react";
import { Typography } from "@mui/material";

interface ConfirmInfoValueProps {
  value: string | null | undefined;
}

const ConfirmInfoValue: React.FC<ConfirmInfoValueProps> = ({ value }) => {
let valueToDisplay: string | number = "-";
  
  // Handle arrays
  if (Array.isArray(value)) {
    valueToDisplay = value.join(", ");
  }
  // Handle other types
  else {
    switch (typeof value) {
      case "string":
        // Handle string boolean values
        if (value.toLowerCase() === "true") {
          valueToDisplay = "yes";
        } else if (value.toLowerCase() === "false") {
          valueToDisplay = "no";
        } else {
          valueToDisplay = value;
        }
        break;
      case "number":
        valueToDisplay = value;
        break;
      case "boolean":
        valueToDisplay = value ? "yes" : "no";
        break;
      default:
        valueToDisplay = "-";
        break;
    }
  }
  return (
    <Typography color="var(--color-gray)" className="first-letter:capitalize" fontSize={"16px"}>
      {valueToDisplay}
    </Typography>
  );
};

export default ConfirmInfoValue;
