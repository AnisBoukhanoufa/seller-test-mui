import React from "react";
import {
  Autocomplete,
  TextField,
  Chip,
  TextFieldPropsSizeOverrides,
} from "@mui/material";
import { Controller, useFormContext, RegisterOptions } from "react-hook-form";
import InputLabel from "../atoms/input-label";
import { OverridableStringUnion } from "@mui/types";

type Props = {
  name: string;
  label: string;
  options: { value: string | number; label: string | number }[];
  placeholder?: string;
  direction?: "row" | "column";
  size?: OverridableStringUnion<
    "small" | "medium",
    TextFieldPropsSizeOverrides
  >;
  rules?: RegisterOptions;
  onChange?: (value: object[]) => void;
};

export default function MultiAutocompleteInputComponent({
  name,
  label,
  options,
  placeholder,
  rules,
  direction = "column",
  size = "medium",
  onChange,
}: Props) {
  const { control } = useFormContext();

  return (
    <div
      className={`flex  ${direction === "row" ? "items-center" : "flex-col"} width-full flex-1/2 gap-1`}
    >
      <InputLabel label={label} htmlFor={name} />
      <Controller
        name={name}
        defaultValue={[]}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <Autocomplete
            {...field}
            multiple
            options={options}
            value={options.filter((option) => {
              return field.value?.includes(option.value);
            })}
            getOptionLabel={(option) => option.label.toString()}
            onChange={(event, newValue) => {
              const selectedValues = newValue.map((item) => item.value);
              field.onChange(selectedValues);
              if (onChange) {
                onChange(newValue);
              }
            }}
            className="flex-1/2"
            size={size}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip
                  label={option.label}
                  {...getTagProps({ index })}
                  key={option.label}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={placeholder}
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error ? error.message : ""}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            )}
          />
        )}
      />
    </div>
  );
}
