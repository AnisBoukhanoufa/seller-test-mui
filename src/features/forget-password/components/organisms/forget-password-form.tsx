import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import AuthButton from "components-v1/atoms/auth-button";
import TextFieldComponent from "components-v1/text-field";
import AuthHeader from "components-v1/auth-header";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { resetPasswordRequest } from "state/api-calls/auth-calls";

// Define types for form data
type ForgotPasswordFormData = {
  email: string;
};

// Define types for dialog state
interface DialogState {
  isOpen: boolean;
  title: string;
  message: string;
  isSuccess: boolean;
}

export default function ForgotPasswordForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const methods = useForm<ForgotPasswordFormData>({ mode: "onBlur" });
  const [loading, setLoading] = useState(false);
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen: false,
    title: "",
    message: "",
    isSuccess: false,
  });

  const handleCloseDialog = () => {
    setDialogState({
      ...dialogState,
      isOpen: false,
    });

    // If the password reset was successful, redirect to the sign-in page
    if (dialogState.isSuccess) {
      navigate("/sign-in");
    }
  };

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = async (data) => {
    try {
      setLoading(true);
      const email = data.email.trim();
      const dataToSend = { email: email };
      await resetPasswordRequest(dataToSend);

      // Show success dialog
      setDialogState({
        isOpen: true,
        title: "Password Reset Email Sent",
        message:
          "Please check your email inbox for instructions to reset your password. If you don't see it, check your spam folder.",
        isSuccess: true,
      });

      // Reset form
      methods.reset();
    } catch (error: unknown) {
      // Get error message from response data if available
      const errorMessage =
        "There was an issue sending the password reset email. Please try again. If the problem persists, please contact our support team.";
      setDialogState({
        isOpen: true,
        title: "Password Reset Email Failed",
        message: errorMessage,
        isSuccess: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <Dialog
        open={dialogState.isOpen}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {t(dialogState.title)}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t(dialogState.message)
              .split("\n")
              .map((line: string, index: number) => (
                <div key={index}>{line}</div>
              ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            {dialogState.isSuccess ? t("Go to Sign In") : t("Close")}
          </Button>
        </DialogActions>
      </Dialog>

      <form
        className="flex flex-col min-h-[466px] justify-between gap-8"
        onSubmit={methods.handleSubmit(onSubmit)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // Don't prevent default here to allow form submission
          }
        }}
      >
        <Box className="pb-4">
          <AuthHeader
            title="recover password"
            subtitle="please enter your email."
          />
          <Box className="flex flex-col gap-4 justify-between">
            <TextFieldComponent
              name="email"
              label="Email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              }}
            />
          </Box>
        </Box>
        <AuthButton disabled={loading} text={loading ? "Sending..." : "send"} />
      </form>
    </FormProvider>
  );
}
