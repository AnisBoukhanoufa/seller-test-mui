import {
  Autocomplete,
  TextField,
  TextFieldPropsSizeOverrides,
} from "@mui/material";
import { Controller, useFormContext, RegisterOptions } from "react-hook-form";
import InputLabel from "../atoms/input-label";
import { OverridableStringUnion } from "@mui/types";

type Props = {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  direction?: "row" | "column";
  size?: OverridableStringUnion<
    "small" | "medium",
    TextFieldPropsSizeOverrides
  >;
  placeholder?: string;
  rules?: RegisterOptions;
  onChange?: (
    value: { value: string; label: string } | null | undefined
  ) => void;
};

export default function AutocompleteInputComponent({
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
      className={`flex ${
        direction === "row" ? "items-center" : "flex-col"
      }  width-full flex-1/2 gap-1`}
    >
      <InputLabel label={label} htmlFor={name} />
      <Controller
        name={name}
        defaultValue={null}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <Autocomplete
            {...field}
            options={options}
            value={
              options.find((option) => option.value === field.value) || null
            }
            className="flex-1/2"
            size={size}
            getOptionLabel={(option) => option.label}
            onChange={(_, newValue) => {
              field.onChange(newValue?.value || null);
              if (onChange) {
                onChange(newValue);
              }
            }}
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
