import React from "react";
import { Stepper, Step, StepLabel, StepIconProps } from "@mui/material";
interface RegisterStepperComponentProps {
  steps: string[];
  activeStep: number;
}

const RegisterStepperComponent: React.FC<RegisterStepperComponentProps> = ({
  steps,
  activeStep,
}) => {
  const customStepIconProps = (): Partial<StepIconProps> => ({
    sx: {
      fontSize: 35,
      fontWeight: 600,
      border: "2px solid var(--color-primary-blue)",
      borderRadius: "50%",
      color: "white",
      "& .MuiSvgIcon-root": { border: "2px solid var(--color-primary-blue)" },
      "& .MuiStepIcon-text": {
        fill: "var(--color-primary-blue)",
      },
      "&.Mui-active": {
        border: "none",
        color: "var(--color-primary-blue)",
        "& .MuiStepIcon-text": {
          fill: "white",
        },
      },
      "&.Mui-completed": {
        border: "none",
        backgroundColor: "white",
        color: "var(--color-primary-blue)",
        "& .MuiStepIcon-text": {
          fill: "white",
        },
      },
    },
  });
  const allStepsCompleted = activeStep >= steps.length;

  const customStepLabelProps = {
    sx: {
      display: allStepsCompleted ? "none" : "block",
      fontSize: 14,
      color: "var(--color-primary-blue)",
      fontWeight: 400,
      "&.Mui-active": {
        fontWeight: 600,
        color: "var(--color-primary-blue)",
      },
      "&.Mui-completed": {
        fontWeight: 400,
        color: "var(--color-primary-blue)",
      },
    },
  };

  return (
    <Stepper
      sx={{
        width: "70%",
        "& .MuiStepConnector-line": {
          borderColor: "var(--color-primary-blue)",
          marginTop: "4px",
          borderWidth: 1,
        },
      }}
      className="self-center"
      activeStep={activeStep}
      alternativeLabel
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel
            slotProps={{
              stepIcon: customStepIconProps(),
              label: customStepLabelProps,
            }}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default RegisterStepperComponent;
