import  { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  TextField,
} from "@mui/material";
import { marketOptions } from "constants/constants";
import InputLabel from "components-v1/atoms/input-label";

interface MarketSelectorWithOtherProps {
  name: string;
  label: string;
  options?: { value: string; label: string }[];
}

export default function MarketSelectorWithOther({
  name,
  label,
  options = marketOptions,
}: MarketSelectorWithOtherProps) {
  const {
    control,
    setValue,
    register,
    formState: { errors },
  } = useFormContext();
  const [otherMarket, setOtherMarket] = useState("");

  const selectedMarkets = useWatch({
    control,
    name,
    defaultValue: [],
  });

  
  const hasOther = selectedMarkets.includes("Other");
  // Register the field with the rules
  const rules = {
    required: {
      value: true,
      message: "Please select at least one market",
    },
    validate: (value: string[]) => {
      // Check if "Other" is selected but no custom market is provided
      if (value.includes("Other") && (!otherMarket || otherMarket.trim() === "")) {
        return "Please specify the other market";
      }
      return true;
    },
  };
  register(name, rules);
 
 
  useEffect(() => {
    // Check if there are custom markets that are not in the predefined options
    const customMarkets = selectedMarkets.filter(
      (market: string) => !options.some((option) => option.value === market)
    );

    // If we have a custom market and returning to this screen (back navigation case)
    if (customMarkets.length > 0) {
      // Make sure "other" is selected
      if (!hasOther) {
        setValue(name, [
          ...selectedMarkets.filter(
            (market: string) => market !== customMarkets[0]
          ),
          "Other",
          customMarkets[0],
        ]);
      }

      // Set the text field value to the custom market
      setOtherMarket(customMarkets[0]);
    }
    // When "other" is deselected, remove any custom markets
    else if (!hasOther) {
      const filteredMarkets = selectedMarkets.filter((market: string) =>
        options.some((option) => option.value === market)
      );
      setValue(name, filteredMarkets);
      setOtherMarket("");
    }

    //  // Cleanup function that runs when component unmounts
    //  return () => {
    //   unregister(name); // Unregister the field
    // };
  }, [hasOther, name, setValue, options]);

  const handleMarketChange = (market: string, checked: boolean) => {
    let newMarkets = [...selectedMarkets];

    if (checked) {
      // Add the market if it's not already included
      if (!newMarkets.includes(market)) {
        newMarkets.push(market);
      }
    } else {
      // Remove the market
      newMarkets = newMarkets.filter((m) => m !== market);

      // If removing "other", also remove any custom market
      if (market === "Other") {
        newMarkets = newMarkets.filter((m) =>
          options.some((option) => option.value === m)
        );
        // Reset the other market field
        setOtherMarket("");
      } 
    }

    // Set value without triggering validation
    setValue(name, newMarkets);
  };

  const handleOtherMarketChange = (value: string) => {
    setOtherMarket(value);

    // Remove any previous custom market
    const marketsWithoutCustom = selectedMarkets.filter((market: string) =>
      options.some((option) => option.value === market)
    );

    // Add the new custom market if it has a value
    if (value.trim()) {
      setValue(name, [...marketsWithoutCustom, value.trim()]);
    } else {
      setValue(name, marketsWithoutCustom);
    }
  };

  return (
    <FormControl component="fieldset" error={!!errors[name]}>
      <InputLabel label={label} htmlFor={name} />
      <FormGroup className="flex gap-2 flex-row">
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            sx={{ width: "fit-content", color: "var(--color-gray)" }}
            control={
              <Checkbox
                checked={selectedMarkets.includes(option.value)}
                size="small"
                sx={{
                  "&.Mui-checked": {
                    color: "var(--color-primary-blue)",
                  },
                }}
                onChange={(e) =>
                  handleMarketChange(option.value, e.target.checked)
                }
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>

      {hasOther && (
        <Box mt={1}>
          <TextField
            autoComplete={"off"}
            variant="outlined"
            size="small"
            placeholder="Please specify other market"
            value={otherMarket}
            onChange={(e) => handleOtherMarketChange(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        </Box>
      )}

      {errors[name] && (
        <FormHelperText>{errors[name]?.message?.toString()}</FormHelperText>
      )}
    </FormControl>
  );
}
