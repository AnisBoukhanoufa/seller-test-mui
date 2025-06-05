import { FC } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { t } from "i18next";

interface CountryProps {
  query: any; // Define a more specific type if possible
  options: number[]; // Pass the country options as a prop
  width: any;
  handleAutocompleteChange: any;
}

const CountryAutocomplete: FC<CountryProps> = ({
  query,
  options,
  handleAutocompleteChange,
  width = 350,
}) => {
  return (
    <Autocomplete
      options={options}
      sx={{ width: width }}
      value={options.find((value) => {
        if (value?.label) {
          return value?.label === query?.country;
        } else if (value) {
          return value === query?.country;
        } else return null;
      })}
      id="country"
      onChange={(event, value) => {
        handleAutocompleteChange("country", value);
      }}
      getOptionLabel={(option) => t(option)}
      renderInput={(params) => <TextField {...params} label={t("country")} />}
    />
  );
};

export default CountryAutocomplete;
