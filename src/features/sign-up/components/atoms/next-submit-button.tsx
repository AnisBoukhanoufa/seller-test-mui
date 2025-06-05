import React from "react";
import { Button } from "@mui/material";

interface NextSubmitButtonProps {
  activeStep: number;
  steps: string[];
  handleNext: () => void;
  handleSubmit?: () => void; // Optional prop for manual form submission
  disabled?: boolean; // Optional prop to disable the button
}

const NextSubmitButton: React.FC<NextSubmitButtonProps> = ({
  activeStep,
  steps,
  handleNext,
  handleSubmit,
  disabled = false,
}) => {
  const buttonStyles = {
    backgroundColor: "var(--color-primary-blue)",
    borderRadius: "9999px",
    width: "50%",
    fontSize: "16px",
    fontWeight: 500,
    textTransform: "capitalize",
    fontFamily: " var(--font-roboto), sans-serif",
  };

  // Fixed calculation: steps.length is 3, so the final step is at index 3 (confirmation step)
  return activeStep < steps.length ? (
    <Button
      variant="contained"
      sx={buttonStyles}
      onClick={handleNext}
      type="button"
      disabled={disabled}
    >
      next
    </Button>
  ) : (
    <Button
      variant="contained"
      sx={buttonStyles}
      onClick={handleSubmit}
      type="button"
      disabled={disabled}
    >
      submit
    </Button>
  );
};

export default NextSubmitButton;
