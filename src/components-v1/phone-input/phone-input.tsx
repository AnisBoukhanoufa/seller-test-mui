import PhoneInput from "react-phone-input-2";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { Box, FormHelperText } from "@mui/material";
import "react-phone-input-2/lib/material.css";
import "components-v1/phone-input/phone-input.scss";
import InputLabel from "../atoms/input-label";

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  rules?: RegisterOptions;
  defaultCountry?: string;
};

export default function PhoneInputComponent({
  name,
  label,
  placeholder,
  rules,
  defaultCountry = "dz",
}: Props) {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col width-full gap-1">
      <InputLabel label={label} htmlFor={name} />
      <Controller
        name={name}
        defaultValue=""
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <Box>
            <PhoneInput
              {...field}
              country={defaultCountry}
              specialLabel={""}
              placeholder={placeholder}
              defaultErrorMessage="Invalid phone number"
              inputClass={`w-full phone-input ${error ? "phone-input-error" : ""}`}
              containerClass="react-tel-input"
              buttonStyle={{
                borderRadius: "12px 0 0 12px",
                backgroundColor: "#EBF9FF",
                border: `1px solid ${error ? "#f44336" : "#d3d3d3"}`, // Red border on error
              }}
              inputStyle={{
                borderRadius: "12px", // Rounded corners for the input field
                height: "56px",
                border: `1px solid ${error ? "#f44336" : "#d3d3d3"}`, // Red border on error
                width: "100%",
              }}
            />
            {error && (
              <FormHelperText error className="text-red-500 text-sm">
                {error.message}
              </FormHelperText>
            )}
          </Box>
        )}
      />
    </div>
  );
}
