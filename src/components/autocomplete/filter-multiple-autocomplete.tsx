import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { t } from "i18next";

interface MultipleAutocompleteProps {
  queryMultiple: string | string[];
  handleMultipleAutocompleteChange: (field: string, value: any[]) => void;
  id: string;
  label: string;
  options: any[];
  getOptionLabel: any;
}

const MultipleAutocomplete: React.FC<MultipleAutocompleteProps> = ({
  queryMultiple,
  handleMultipleAutocompleteChange,
  id,
  label,
  options,
  getOptionLabel = (option) => t(option) || "",
}) => {
  // Normalize queryMultiple to always be an array
  const multiplesValues = React.useMemo(
    () =>
      typeof queryMultiple === "string" ? [queryMultiple] : queryMultiple || [],
    [queryMultiple]
  );

  // Generate options including "false" and EnumProcessPhase values
  const optionsVals = React.useMemo(() => options, []);

  return (
    <Autocomplete
      id={id}
      multiple
      options={optionsVals}
      value={multiplesValues || []}
      isOptionEqualToValue={(option, value) =>
        option.toString() === value.toString()
      }
      getOptionLabel={getOptionLabel}
      onChange={(event, value) => {
        handleMultipleAutocompleteChange(id, value);
      }}
      renderInput={(params) => (
        <TextField {...params} label={t(label)} placeholder={label} />
      )}
    />
  );
};

export default MultipleAutocomplete;
