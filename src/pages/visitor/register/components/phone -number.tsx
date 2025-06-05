import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { baseRequest } from "utils/request-methods";
import "react-phone-input-2/lib/material.css";

interface GlobalPhoneInputProps {
  register: any; // react-hook-form's register function
  setValue: (name: string, value: any) => void; // react-hook-form's setValue function
  errors: any; // react-hook-form errors object
  data: any; // Global form data state
  setData: (data: any) => void; // Function to update form data
  label: string;
  required: boolean;
  isValid: boolean;
  setIsValid: (valid: boolean) => void;
}

const GlobalPhoneInput: React.FC<GlobalPhoneInputProps> = ({
  setValue,
  errors,
  data,
  setData,
  isValid,
  setIsValid,
  label,
  register,
  required,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  );

  // Set default phone number from data
  useEffect(() => {
    setPhoneNumber(data[label] || "");
  }, [data, label]);

  // Debounced phone number validation
  useEffect(() => {
    if (!phoneNumber) {
      setValidationMessage("");
      setIsValid(true);
      return; // Skip validation if the phone number is empty
    }

    // Clear the previous debounce timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Set new debounce timer for 0.5 seconds (500ms)
    const timer = setTimeout(async () => {
      try {
        const response = await baseRequest.get(
          `/validator/validate-phone-number?phone=${phoneNumber}`
        );

        if (response.data.validate === false) {
          setIsValid(false);
          setValidationMessage(response.data.message);
        } else {
          setIsValid(true);
          setValidationMessage("");
        }
      } catch (error) {
        console.error("Error validating phone number", error);
        setValidationMessage("Error validating phone number");
        setIsValid(false);
      }
    }, 500); // 0.5 seconds delay

    setDebounceTimer(timer); // Update debounce timer reference

    // Cleanup function to clear timeout on component unmount or re-render
    return () => clearTimeout(timer);
  }, [phoneNumber, setIsValid]); // Trigger the effect on phone number change

  // Handle phone number change
  const handleChangePhone = (value: any) => {
    setPhoneNumber(value);
    setValue(label, value); // Update form value
    setData({ ...data, [label]: value }); // Update form data
  };

  return (
    <div>
      <PhoneInput
        country="dz"
        {...register(`${label}`, { required })} // Register the input with required validation
        onChange={handleChangePhone}
        value={phoneNumber}
        inputProps={{
          name: `${label}`,
          placeholder: `${label}`,
        }}
      />
      {errors[label] && <p className="error">{label} is required</p>}
      {!isValid && <p className="error">{validationMessage}</p>}
    </div>
  );
};

export default GlobalPhoneInput;
