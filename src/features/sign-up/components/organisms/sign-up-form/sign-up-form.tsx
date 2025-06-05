import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import {
  Box,
  Dialog,
  DialogContentText,
  DialogActions,
  Button,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import PersonalInfoStep from "../sign-up-steps/personal-info";
import AddressInfoStep from "../sign-up-steps/address-info";
import AdditionalInfoStep from "../sign-up-steps/additional-info";
import ConfirmInfoStep from "../sign-up-steps/confirm-info";
import RegisterStepperComponent from "../../molecules/register-steps-stepper/register-steps-stepper";
import NextSubmitButton from "../../atoms/next-submit-button";
import GoBackButton from "components-v1/atoms/go-back-button";
import { splitPhoneNumbers } from "utils/functions";
import { useDispatch } from "react-redux";

import { t } from "i18next";
import { registration } from "state/api-calls/seller-calls";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const steps = ["Personal Info", "Address Info", "Additional Info"];

// Define types for error dialog state
interface ErrorDialogState {
  isOpen: boolean;
  title: string;
  message: string;
  isSuccess?: boolean;
}

// Define API error messages
const ApiErrorMessages: Record<string, string> = {
  EMAIL_ALREADY_EXISTS: "This email is already registered in our system.",
  INVALID_DATA:
    "The provided information is invalid. Please check your details and try again.",
  SERVER_ERROR:
    "Our server encountered an error. Please try again later or contact support.",
  VALIDATION_ERROR:
    "Some of the information you provided did not pass our validation checks.",
};

export default function SignUpForm() {
  const methods = useForm({ mode: "onBlur" });
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  // Update error dialog state
  const [dialogState, setDialogState] = useState<ErrorDialogState>({
    isOpen: false,
    title: "",
    message: "",
    isSuccess: false,
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const dispatch = useDispatch();

  // Store affiliate record from URL parameter to cookies
  useEffect(() => {
    const recordToken = searchParams.get("record");
    if (recordToken) {
      Cookies.set("affiliate_record", recordToken, { expires: 30 }); // Store for 30 days
    }
  }, [searchParams]);

  // Close dialog handler
  const handleCloseDialog = () => {
    // If it was a success dialog, navigate to home after closing
    if (dialogState.isSuccess) {
      navigate("/");
    }

    // Reset dialog state
    setDialogState({
      ...dialogState,
      isOpen: false,
    });
  };

  // API error handler
  const handleApiError = (error: unknown): boolean => {
    if (error && typeof error === "object") {
      // Handle Axios errors
      if (error instanceof AxiosError && error.response?.data) {
        const errorMessage = error.response.data.message;
        const friendlyMessage =
          ApiErrorMessages[errorMessage] ||
          "An error occurred during registration. Please try again.";

        setDialogState({
          isOpen: true,
          title: "Registration Error",
          message: friendlyMessage,
          isSuccess: false,
        });

        // Log the error for debugging
        console.error("API error:", error.response.data);
        return true; // Error was handled
      }
    }
    return false; // Error was not handled
  };

  // General error handler
  const handleGenericError = (error: unknown) => {
    console.error("Unhandled error during registration:", error);

    setDialogState({
      isOpen: true,
      title: "Unexpected Error",
      message:
        "An unexpected error occurred. Please try again or contact support if the problem persists.",
      isSuccess: false,
    });
  };

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      // Get affiliate record from cookies, if it exists
      const affiliateRecord = Cookies.get("affiliate_record");
      
      // If Firebase was successful, register with your backend
      await registration(dispatch, {
        ...data,
        phone1: splitPhoneNumbers(data.phone1),
        phone2: splitPhoneNumbers(data?.phone2),
        email: data?.email.trim().toLowerCase(),
        market: data?.market?.filter((item: string) => item !== "Other"),
        isPracticingCOD: data?.isPracticingCOD === "true",
        hasBM: data?.hasBM === "true",
        hasAnOnlineStore: data?.hasAnOnlineStore === "true",
        ...(affiliateRecord ? { record: affiliateRecord } : {}), // Include the affiliate record if it exists
      });

      // If everything was successful, show success dialog
      setDialogState({
        isOpen: true,
        title: "Successful Registration",
        message:
          "You have registered successfully. Please check your email to verify your account.",
        isSuccess: true,
      });
    } catch (error) {
      // First try to handle as API error
      if (!handleApiError(error)) {
        // If not an API error, handle as generic error
        handleGenericError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNext = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PersonalInfoStep />;
      case 1:
        return <AddressInfoStep />;
      case 2:
        return <AdditionalInfoStep />;
      case 3:
        return <ConfirmInfoStep />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <Dialog
        open={dialogState.isOpen}
        onClose={handleCloseDialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle
          id="dialog-title"
          style={{
            color: dialogState.isSuccess ? "green" : "#d32f2f",
          }}
        >
          {t(dialogState.title)}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            {dialogState.message.split("\n").map((line, i) => (
              <div key={i}>{t(line)}</div>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            color={dialogState.isSuccess ? "primary" : "error"}
            variant="contained"
          >
            {t("close")}
          </Button>
        </DialogActions>
      </Dialog>
      <form
        className="flex flex-col gap-8 "
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission on Enter key
          }
        }}
      >
        <RegisterStepperComponent steps={steps} activeStep={activeStep} />
        {renderStepContent(activeStep)}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {activeStep > 0 ? <GoBackButton onClick={handleBack} /> : <Box />}
          <NextSubmitButton
            activeStep={activeStep}
            steps={steps}
            handleNext={handleNext}
            handleSubmit={() => methods.handleSubmit(onSubmit)()}
            disabled={loading}
          />
        </Box>
      </form>
    </FormProvider>
  );
}
