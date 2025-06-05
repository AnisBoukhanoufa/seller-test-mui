import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./product-toop-drop-filter.scss";

import { t } from "i18next";
import useQuery from "hooks/filter-hooks/use-query";
import { operators } from "statics/statics";
import useCategoriesFilter from "hooks/use-categories-filter";
import CategoriesAutocomplete from "components/autocomplete/category-product-autocomplete";

const ProductToopDropFilter = ({
  filterOpen=false,
  setFilterOpen,
  queryFilter,
  setQueryFilter,
}: any) => {
  const {
    query,
    handleAutocompleteChange,
    handleInput,
    handleClear,
    handleFilter,
    setQuery,
  } = useQuery(queryFilter, setQueryFilter, setFilterOpen);

  //handle categories
  const { choosenCategories, categoriesList, handleCategoriesChange } =
    useCategoriesFilter(query, setQuery);
  return (
    <Dialog
      open={filterOpen}
      onClose={() => setFilterOpen(false)}
      sx={{ height: "100%" }}
      maxWidth="md"
    >
      <DialogTitle className="dialog-title">
        <span className=" capitalize">{t("products filter")}</span>
      </DialogTitle>
      <DialogContent className="products-filter-container">
        <div className="filter-section">
          <div className="filter-product infos-filter ">
            <div className="left-filter">
              <div className="filter-operation">
                <TextField
                  sx={{ flex: 1 }}
                  id="price"
                  label={t("price")}
                  value={query?.price || ""}
                  type="number"
                  variant="outlined"
                  onChange={handleInput}
                />
                <Autocomplete
                  sx={{ flex: 1 }}
                  id="priceOperation"
                  options={operators}
                  value={
                    operators.find(
                      (value) => value.value === query?.priceOperation
                    ) || null
                  }
                  onChange={(event, value) => {
                    handleAutocompleteChange("priceOperation", value);
                  }}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={t("operation")}
                      variant="outlined"
                    />
                  )}
                />
              </div>
              <CategoriesAutocomplete
                choosenCategories={choosenCategories}
                categoriesList={categoriesList}
                handleCategoriesChange={handleCategoriesChange}
                label={"category"}
              />
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClear}>{t("clear")}</Button>
        <Button onClick={handleFilter}>{t("filter")}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductToopDropFilter;
