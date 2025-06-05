import { useState, useCallback, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { Box, FormHelperText, CircularProgress } from "@mui/material";
import "react-phone-input-2/lib/material.css";
import "components-v1/phone-input/phone-input.scss";
import InputLabel from "../atoms/input-label";
import { baseRequest } from "utils/request-methods";

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  rules?: RegisterOptions;
  defaultCountry?: string;
};

/**
 * Enhanced Phone Input Component with real-time validation
 * Validates the phone number format and prevents proceeding if invalid
 */
export default function PhoneInputValidation({
  name,
  label,
  placeholder,
  rules,
  defaultCountry = "dz",
}: Props) {
  const { control, setError, clearErrors } = useFormContext();
  const [isValidatingPhone, setIsValidatingPhone] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  
  // Using refs to store timer IDs instead of window object
  const validationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const effectTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup all timers when component unmounts
  useEffect(() => {
    // Empty dependency array ensures this only runs on mount/unmount
    return () => {
      // Use the current ref values directly in the cleanup function
      if (validationTimerRef.current) {
        clearTimeout(validationTimerRef.current);
        validationTimerRef.current = null;
      }
      if (effectTimerRef.current) {
        clearTimeout(effectTimerRef.current);
        effectTimerRef.current = null;
      }
    };
  }, []);

  // Function to check if phone number is valid
  const validatePhoneNumber = useCallback(
    async (phoneNumber: string) => {
      // Basic validation - must be at least 8 digits
      if (!phoneNumber || phoneNumber.length < 8) {
        setPhoneInvalid(true);
        setError(name, {
          type: "manual",
          message: "Phone number must be at least 8 digits",
        });
        setIsValidatingPhone(false);
        return;
      }
      
      // Check if the phone number contains only digits
      if (!/^\d+$/.test(phoneNumber)) {
        setPhoneInvalid(true);
        setError(name, {
          type: "manual",
          message: "Phone number must contain only digits",
        });
        setIsValidatingPhone(false);
        return;
      }

      try {
        setIsValidatingPhone(true);
        const response = await baseRequest.get(`/validator/validate-phone-number?phone=${phoneNumber}`);
        const isValidPhone = response.data.validate;
        
        setPhoneInvalid(!isValidPhone);
        
        if (!isValidPhone) {
          setError(name, {
            type: "manual",
            message: "Invalid phone number format",
          });
        } else if (phoneInvalid) {
          // Only clear our specific error
          clearErrors(name);
        }
      } catch (error) {
        console.error("Error validating phone number:", error);
      } finally {
        setIsValidatingPhone(false);
      }
    },
    [name, setError, clearErrors, phoneInvalid]
  );

  // Add effect to validate phone when field value changes
  useEffect(() => {
    const fields = control._fields || {};
    const fieldValue = fields[name]?._f?.value;
    
    // Clear any existing timer
    if (effectTimerRef.current) {
      clearTimeout(effectTimerRef.current);
      effectTimerRef.current = null;
    }
    
    if (fieldValue && fieldValue.length >= 8) {
      effectTimerRef.current = setTimeout(() => {
        validatePhoneNumber(fieldValue);
      }, 800);
    }
    
    // Cleanup function
    return () => {
      if (effectTimerRef.current) {
        clearTimeout(effectTimerRef.current);
        effectTimerRef.current = null;
      }
    };
  }, [name, control, validatePhoneNumber]);

  return (
    <div className="flex flex-col width-full gap-1">
      <InputLabel label={label} htmlFor={name} />
      <Controller
        name={name}
        defaultValue=""
        control={control}
        rules={{
          ...rules,
          validate: {
            validPhone: () => !phoneInvalid || "Invalid phone number format",
            ...(rules?.validate || {})
          }
        }}
        render={({ field, fieldState: { error } }) => (
          <Box>
            <div className="relative">
              <PhoneInput
                {...field}
                country={defaultCountry}
                specialLabel={""}
                placeholder={placeholder}
                defaultErrorMessage="Invalid phone number"
                inputClass={`w-full phone-input ${error || phoneInvalid ? "phone-input-error" : ""}`}
                containerClass="react-tel-input"
                buttonStyle={{
                  borderRadius: "12px 0 0 12px",
                  backgroundColor: "#EBF9FF",
                  border: `1px solid ${error || phoneInvalid ? "#f44336" : "#d3d3d3"}`, // Red border on error
                }}
                inputStyle={{
                  borderRadius: "12px", // Rounded corners for the input field
                  height: "56px",
                  border: `1px solid ${error || phoneInvalid ? "#f44336" : "#d3d3d3"}`, // Red border on error
                  width: "100%",
                }}
                onChange={(value) => {
                  field.onChange(value);
                  
                  // Clear any previous validation timer when input changes
                  if (validationTimerRef.current) {
                    clearTimeout(validationTimerRef.current);
                    validationTimerRef.current = null;
                  }
                  
                  // Validate phone when it changes with debounce
                  if (value && value.length >= 8) {
                    validationTimerRef.current = setTimeout(() => {
                      validatePhoneNumber(value);
                    }, 800);
                  }
                }}
              />
              {isValidatingPhone && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <CircularProgress size={20} />
                </div>
              )}
            </div>
            {(error || phoneInvalid) && (
              <FormHelperText error className="text-red-500 text-sm">
                {error?.message || "Invalid phone number format"}
              </FormHelperText>
            )}
          </Box>
        )}
      />
    </div>
  );
}
