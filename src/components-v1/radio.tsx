import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Box,
  FormControl,
} from "@mui/material";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import InputLabel from "./atoms/input-label";

type Props = {
  name: string;
  label: string;
  options: { value: string | boolean; label: string }[];
  rules?: RegisterOptions;
};

export default function RadioComponent({ name, label, options, rules }: Props) {
  const { control } = useFormContext();

  return (
    <div className="flex justify-between  width-full  gap-1  items-center">
      <InputLabel label={label} htmlFor={name} />
      <FormControl component="fieldset" error={!!rules?.required}>
        <Controller
          name={name}
          defaultValue=""
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <Box className="flex flex-col ">
              <RadioGroup className="flex gap-5" row {...field}>
                {options.map((option) => (
                  <FormControlLabel
                    key={String(option.value)}
                    value={option.value}
                    sx={{
                      margin: 0,
                      ".MuiFormControlLabel-label": {
                        color: "#474D66", // Gray for unselected
                      },
                    }}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "var(--color-primary-green)", // Green color for checked state
                          },
                          color: "var(--color-border)", // Gray color for unchecked state
                        }}
                        size="small"
                      />
                    }
                    label={option.label}
                  />
                ))}
              </RadioGroup>
              {error && <FormHelperText>{error.message}</FormHelperText>}
            </Box>
          )}
        />
      </FormControl>
    </div>
  );
}
