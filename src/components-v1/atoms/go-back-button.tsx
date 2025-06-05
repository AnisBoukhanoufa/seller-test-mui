import React from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface GoBackButtonProps {
  onClick: () => void;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      startIcon={<ArrowBackIcon />}
      sx={{
        textTransform: "capitalize",
        fontSize: "16px",
        fontWeight: 400,
        color: "var(--color-dark-gray)",
        textDecoration: "underline",
        display: "flex",
        alignItems: "center",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      go back
    </Button>
  );
};

export default GoBackButton;
