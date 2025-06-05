import { useState, useEffect, useCallback } from "react";
import { TextField, TextFieldPropsSizeOverrides } from "@mui/material";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import InputLabel from "./atoms/input-label";
import { OverridableStringUnion } from "@mui/types";
import { baseRequest } from "utils/request-methods";

type EmailFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  rules?: RegisterOptions;
  direction?: "row" | "column";
  size?: OverridableStringUnion<
    "small" | "medium",
    TextFieldPropsSizeOverrides
  >;
};

export default function EmailField({
  name,
  label,
  placeholder = "",
  rules,
  direction = "column",
  size = "medium",
}: EmailFieldProps) {
  const { control, setError, clearErrors } = useFormContext();
  const [emailExists, setEmailExists] = useState(false);

  // Function to check if email exists - using useCallback to avoid dependency issues in useEffect
  const checkEmailExists = useCallback(
    async (email: string) => {
      // First validate email format using regex before making API call
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!email || !emailRegex.test(email)) return;

      const response = await baseRequest.get(
        `/validator/email-seller-exist?email=${email}`
      );
      const emailAlreadyExists = !response.data.validate;
      setEmailExists(emailAlreadyExists);

      // Set or clear form error based on validation result
      if (emailAlreadyExists) {
        setError(name, {
          type: "manual",
          message: "This email already exists",
        });
      } else {
        // Only clear this specific error - don't clear other validations
        if (emailExists) {
          clearErrors(name);
        }
      }
    },
    [name, setError, clearErrors, emailExists]
  );

  // Add effect to validate email when field value changes
  useEffect(() => {
    const fields = control._fields || {};
    const fieldValue = fields[name]?._f?.value;

    if (fieldValue) {
      // Validate email format first
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      // Only check with API if email format is valid
      if (emailRegex.test(fieldValue)) {
        const timer = setTimeout(() => {
          checkEmailExists(fieldValue);
        }, 800);
        return () => clearTimeout(timer);
      } else {
        // Clear the "email exists" error if the format is invalid
        setEmailExists(false);
      }
    }
  }, [name, control, checkEmailExists]);

  // Combine the provided rules with email validation
  const validationRules = {
    ...rules,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address format",
    },
    validate: {
      notTaken: () => !emailExists || "This email already exists",
      ...(rules?.validate || {}),
    },
  };

  return (
    <div
      className={`flex ${
        direction === "row" ? "items-center" : "flex-col"
      } width-full flex-1/2 gap-1`}
    >
      <InputLabel label={label} htmlFor={name} />
      <Controller
        name={name}
        defaultValue=""
        control={control}
        rules={validationRules}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            placeholder={placeholder}
            autoComplete={"off"}
            variant="outlined"
            type="email"
            fullWidth
            error={!!error || emailExists}
            className="flex-1/2"
            size={size}
            helperText={
              error
                ? error.message
                : emailExists
                ? "This email already exists"
                : ""
            }
            onChange={(e) => {
              field.onChange(e);
              const email = e.target.value;

              // Only check email existence if format is valid
              if (email) {
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

                if (emailRegex.test(email)) {
                  const timer = setTimeout(() => {
                    checkEmailExists(email);
                  }, 800);
                  return () => clearTimeout(timer);
                } else {
                  setEmailExists(false);
                }
              }
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        )}
      />
    </div>
  );
}
