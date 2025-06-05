import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import TextFieldComponent from "components-v1/text-field";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import TextLink from "components-v1/text-link";
import AuthHeader from "components-v1/auth-header";
import AuthButton from "components-v1/atoms/auth-button";
import { useDispatch } from "react-redux";
import { login } from "state/api-calls/seller-calls";
import { useState } from "react";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";

type DataType = {
  email: string;
  password: string;
};

// Custom error interface for API responses
interface ApiErrorResponse {
  message: string;
  status?: number;
  details?: any;
}

export default function SignInForm() {
  const { t } = useTranslation();
  const [open, setOpen] = useState({
    isOpened: false,
    message: "",
    dialogTitle: "",
  });
  const dispatch = useDispatch();
  const methods = useForm<DataType>({ mode: "onBlur" });

  const handleClose = () => {
    setOpen({ ...open, isOpened: false });
  };

  const onSubmit: SubmitHandler<DataType> = async (data) => {
    const email = data.email.trim();
    try {
      await login(dispatch, { email, password: data.password });
    } catch (error) {
      // Use the error handling function to process API errors
      handleLoginError(error);
      console.error("Login failed:", error);
    }
    console.log("Form Data:", data);
  };

  // Helper function to handle login errors
  const handleLoginError = (error: unknown) => {
    // Type assertion for Axios errors
    const axiosError = error as AxiosError<ApiErrorResponse>;
    let dialogMessage = "";
    let dialogTitle = "";

    // Handle specific error messages from the API
    if (axiosError.response?.data?.message === "EMAIL_NOT_VERIFIED") {
      dialogMessage = "Please check your email inbox and verify your account to continue.";
      dialogTitle = "Email Verification Required";
    } else if (axiosError.response?.data?.message === "WRONG_CREDENTIAL") {
      dialogMessage = "The email or password you entered is incorrect. Please try again.";
      dialogTitle = "Invalid Credentials";
    } else if (axiosError.response?.data?.message === "your account is not active. Please contact the support team") {
      dialogMessage = "Your account is currently inactive. Please contact our support team for assistance.";
      dialogTitle = "Account Inactive";
    } else {
      // Generic error handling for other cases
      dialogTitle = "Unexpected Error";
      dialogMessage =
        "Please try again. If the problem persists, please contact our support team for assistance.";

      // Log detailed error information for debugging
      console.error("Login error details:", {
        status: axiosError.response?.status,
        statusText: axiosError.response?.statusText,
        data: axiosError.response?.data,
        message: axiosError.message,
      });
    }

    setOpen({
      isOpened: true,
      message: dialogMessage,
      dialogTitle: dialogTitle,
    });
  };

  return (
    <FormProvider {...methods}>
      <Dialog open={open.isOpened} onClose={handleClose}>
        <DialogTitle>
          {t(
            open.dialogTitle ||
              "An error occurred."
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t(open.message)
              .split("\n")
              .map((e: string, index: number) => (
                <div key={index}>{e}</div>
              ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("close")}</Button>
        </DialogActions>
      </Dialog>
      <form
        className="flex flex-col  min-h-[466px] justify-between "
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Box className="pb-4">
          <AuthHeader />
          <Box className="flex flex-col ">
            <Box className="flex flex-col gap-4">
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
              <TextFieldComponent
                name="password"
                label="Password"
                rules={{
                  required: "Password is required",
                }}
                type="password"
              />
              <Box className="flex items-center text-[12px] justify-between w-full">
                <Box></Box>
                <TextLink underline={false} url={"/forgot-password"}>
                  forgot password ?
                </TextLink>
              </Box>
            </Box>
          </Box>
        </Box>
        <AuthButton text={"sign in"} />
      </form>
    </FormProvider>
  );
}
