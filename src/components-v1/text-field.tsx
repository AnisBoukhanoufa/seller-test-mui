import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  TextFieldPropsSizeOverrides,
  IconButton,
} from "@mui/material";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import InputLabel from "./atoms/input-label";
import { OverridableStringUnion } from "@mui/types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type Props = {
  name: string;
  label: string;
  icon?: React.ReactNode;
  placeholder?: string;
  rules?: RegisterOptions;
  direction?: "row" | "column";
  size?: OverridableStringUnion<
    "small" | "medium",
    TextFieldPropsSizeOverrides
  >;
  type?: string;
};

export default function TextFieldComponent({
  name,
  label,
  icon,
  placeholder,
  rules,
  direction = "column",
  size = "medium",
  type = "text",
}: Props) {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Determine the actual input type based on the type prop and showPassword state
  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div
      className={`flex ${direction === "row" ? "items-center" : "flex-col"}  width-full flex-1/2 gap-1`}
    >
      <InputLabel label={label} htmlFor={name} />
      <Controller
        name={name}
        defaultValue=""
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            placeholder={placeholder}
            autoComplete={"off"}
            variant="outlined"
            type={inputType}
            fullWidth
            error={!!error}
            className="flex-1/2"
            size={size}
            helperText={error ? error.message : ""}
            InputProps={{
              endAdornment: (
                <>
                  {type === "password" && (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  )}
                  {icon && <InputAdornment position="start">{icon}</InputAdornment>}
                </>
              ),
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
