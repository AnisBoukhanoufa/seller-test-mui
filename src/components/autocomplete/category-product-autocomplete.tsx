import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { t } from "i18next";
import { Chip } from "@mui/material";

const CategoriesAutocomplete = ({
  choosenCategories,
  categoriesList,
  handleCategoriesChange,
  label="tags"
}) => {
  return (
    <Autocomplete
      multiple
      id="categories"
      options={categoriesList}
      value={choosenCategories}
      disableCloseOnSelect
      filterSelectedOptions
      getOptionLabel={(option: any) => t(option.label)}
      loading={false}
      onChange={handleCategoriesChange}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          const tagProps = getTagProps({ index });
          // Allow deletion only for the last selected option
          return (
            <Chip
              key={option.label}
              label={option.label}
              // Only show delete icon for the last chip
              onDelete={
                index === value.length - 1 ? tagProps.onDelete : undefined
              }
            />
          );
        })
      }
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={label} />
      )}
    />
  );
};

export default CategoriesAutocomplete;
