import { FC, Dispatch, SetStateAction } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

interface CountriesMultipleAutocompleteProps {
  query: any; // Define a more specific type if possible
  countryFilter: number[]; // Assuming country IDs are numbers
  setCountryFilter: Dispatch<SetStateAction<number[]>>;
  options: number[]; // Pass the country options as a prop
}

const CountriesMultipleAutocomplete: FC<CountriesMultipleAutocompleteProps> = ({
  query,
  countryFilter,
  setCountryFilter,
  options,
  width = 350,
}) => {
  const { t } = useTranslation();

  const handleChange = (reason, option) => {
    if (reason === "removeOption") {
      const toDelete = [...countryFilter];
      toDelete.splice(toDelete.indexOf(option.option), 1);
      setCountryFilter(toDelete);
    } else if (reason === "clear") {
      setCountryFilter([]);
    } else {
      if (!countryFilter.includes(option.option)) {
        setCountryFilter([...countryFilter, option.option]);
      }
    }
  };
  return (
    <Autocomplete
      sx={{ width }}
      multiple
      loading
      id="countrys"
      options={options}
      value={query.country ? [...query.country] : []}
      disableCloseOnSelect
      filterSelectedOptions
      getOptionLabel={(option) => t(option)} // Adjust according to your translation logic
      onChange={(e, newValue, reason, option) => {
        handleChange(reason, option);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Country" placeholder="Country" />
      )}
    />
  );
};

export default CountriesMultipleAutocomplete;
