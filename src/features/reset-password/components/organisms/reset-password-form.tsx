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
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { resetPassword } from "state/api-calls/auth-calls";

// Define types for form data
type ForgotPasswordFormData = {
  password: string;
  confirmPassword: string;
};

// Define types for dialog state
interface DialogState {
  isOpen: boolean;
  title: string;
  message: string;
  isSuccess: boolean;
}

export default function ResetPasswordForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const methods = useForm<ForgotPasswordFormData>({ mode: "onBlur" });
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen: false,
    title: "",
    message: "",
    isSuccess: false,
  });
  const password = methods.watch("password"); // Get the current value of the password field

  // Extract token from URL query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      // If no token is provided, show an error or redirect
      setDialogState({
        isOpen: true,
        title: "Invalid Reset Link",
        message:
          "The password reset link is invalid or has expired. Please request a new password reset link.",
        isSuccess: false,
      });
    }
  }, [location.search]);

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
      // Check if token is available
      if (!token) {
        setDialogState({
          isOpen: true,
          title: "Missing Token",
          message: "No reset token found. Please use the link from your email.",
          isSuccess: false,
        });
        return;
      }

      setLoading(true);
      const password = data.password;

      // Include the token in the request
      const dataToSend = {
        token: token,
        password: password,
      };

      await resetPassword(dataToSend);

      // Show success dialog
      setDialogState({
        isOpen: true,
        title: "Password Reset Successful",
        message:
          "Your password has been successfully reset. You can now sign in with your new password.",
        isSuccess: true,
      });

      // Reset form
      methods.reset();
    } catch (error: unknown) {
      // Get error message from response data if available
      const errorMessage =
        // error?.response?.data?.message ||
        "There was an issue resetting your password. Please try again. If the problem persists, please contact our support team.";

      setDialogState({
        isOpen: true,
        title: "Password Reset Failed",
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
      >
        <Box className="pb-4">
          <AuthHeader
            title="reset password"
            subtitle="please enter your new password."
          />
          <Box className="flex flex-col gap-4 justify-between">
            <TextFieldComponent
              name="password"
              label="Password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must contain at least one letter, one number, and be at least 8 characters long",
                },
              }}
              type="password"
            />
            <TextFieldComponent
              name="confirmPassword"
              label="Confirm Password"
              rules={{
                required: "Confirm Password is required",
                validate: (value: string) =>
                  value === password || "Passwords do not match",
              }}
              type="password"
            />
          </Box>
        </Box>
        <AuthButton
          disabled={loading}
          text={loading ? "Resetting..." : "Reset Password"}
        />
      </form>
    </FormProvider>
  );
}
