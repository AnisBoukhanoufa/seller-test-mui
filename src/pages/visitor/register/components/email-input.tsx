import { useState, useEffect, forwardRef } from "react";
import { TextField } from "@mui/material";
import { baseRequest } from "utils/request-methods";

interface GlobalEmailInputProps {
  register: any; // react-hook-form's register function
  setValue: (name: string, value: any) => void; // react-hook-form's setValue function
  errors: any; // react-hook-form errors object
  label: string;
  required: boolean;
  isValid: boolean; // Track email validity state
  setIsValid: (valid: boolean) => void; // Function to set email validity
  data: any; // Pre-existing data, such as from form pre-fill
}

const GlobalEmailInput = forwardRef<HTMLInputElement, GlobalEmailInputProps>(
  ({
    register,
    handleInput,
    errors,
    setValue,
    label,
    required,
    isValid,
    setIsValid,
    data,
  }) => {
    const [email, setEmail] = useState("");
    const [validationMessage, setValidationMessage] = useState("");
    const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
      null
    );

    // Set email default from data if available
    useEffect(() => {
      setEmail(data[label] || "");
    }, [data, label]);

    // Debounced effect for email validation
    useEffect(() => {
      if (!email) {
        setValidationMessage("");
        setIsValid(true);
        return; // Skip validation if the email is empty
      }

      // Clear the previous debounce timer
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      // Set new debounce timer for 0.5s (500ms)
      const timer = setTimeout(async () => {
        try {
          const response = await baseRequest.get(
            `/validator/email-seller-exist?email=${email}`
          );
          if (!response.data.validate) {
            setIsValid(false);
            setValidationMessage(response.data.message);
          } else {
            setIsValid(true);
            setValidationMessage("");
          }
        } catch (error) {
          console.error("Error validating email", error);
          setValidationMessage("Error validating email");
          setIsValid(false);
        }
      }, 500); // 0.5 seconds delay

      setDebounceTimer(timer); // Update debounce timer reference

      // Cleanup function to clear timeout on component unmount or re-render
      return () => clearTimeout(timer);
    }, [email, setIsValid]); // Trigger the effect on email change

    return (
      <>
        <TextField
          id={label}
          defaultValue={data.email}
          label={label}
          variant="outlined"
          {...register(label, {
            required: required && "Email is required",
            validate: {
              maxLength: (value: string) =>
                value.length <= 50 ||
                "The email should have at most 50 characters",
              matchPattern: (value: string) =>
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                  value
                ) || "Email address must be a valid address",
            },
          })}
          value={email}
          onChange={(e) => {
            const newValue = e.target.value;
            setEmail(newValue); // Update local email state
            setValue(label, newValue); // Update form value
            handleInput(e); // Handle the input change
          }}
        />
        {errors[label] && <p className="error">{errors[label]?.message}</p>}
        {!isValid && <p className="error">{validationMessage}</p>}
      </>
    );
  }
);

export default GlobalEmailInput;
