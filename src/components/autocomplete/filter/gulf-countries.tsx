// Adjust the import path as needed

import { useMemo } from "react";
import { EnumCountry } from "statics/enums";
import MultipleAutocomplete from "../filter-multiple-autocomplete";

const CountriesGulfFilter = ({
  query,
  handleMultipleAutocompleteChange,
}) => {
  const countyValues = useMemo(() => Object.values(EnumCountry), []);
  return (
    <MultipleAutocomplete
      queryMultiple={query?.country}
      handleMultipleAutocompleteChange={handleMultipleAutocompleteChange}
      id="country"
      label="country"
      options={countyValues}
    />
  );
};

export default CountriesGulfFilter;
