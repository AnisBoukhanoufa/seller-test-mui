import { Autocomplete, TextField } from "@mui/material";
import CountriesGulfFilter from "components/autocomplete/filter/gulf-countries";
import ProductsAutocomplete from "components/autocomplete/products-autocomplete";
import SubProductAutocomplete from "components/autocomplete/sub-products-autocomplete";
import DateFilterDropdown from "components/drop-downs/dates-drop-down/dates-drop-down";
import useProductSubProductFilter from "hooks/filter-hooks/products-filter-hooks/use-product-sub-product-filter";
import useDatePicker from "hooks/use-date-picker";
import { t } from "i18next";
import { EnumSellerRole } from "statics/enums";
import { operators } from "statics/statics";

const FilterInfoSection = ({
  query,
  setQuery,
  handleMultipleAutocompleteChange,
  handleInput,
  handleAutocompleteChange,
  productType,
}) => {
  //  //date calendar range state
  const dateHandeler = useDatePicker(
    query?.startDate,
    query?.endDate,
    query,
    "startDate",
    "endDate"
  );

  //handle product sub product
  const {
    products,
    setProducts,
    choosenProduct,
    setChoosenProduct,
    subProducts,
    choosenSubProduct,
    setChoosenSubProduct,
  } = useProductSubProductFilter(productType, query, setQuery);
  return (
    <div className="filter-section">
      <div className="section-title">infos filter:</div>
      <div className="order-info-filter">
        <div className="filter-elements">
          <div className="filter-element">
            <CountriesGulfFilter
              query={query}
              handleMultipleAutocompleteChange={
                handleMultipleAutocompleteChange
              }
            />
          </div>
          <div className="filter-operation">
            <TextField
              sx={{ flex: 1 }}
              id="price"
              label={t("price")}
              value={query?.price || ""}
              type="number"
              variant="outlined"
              inputProps={{ step: "10", min: "0" }}
              onChange={handleInput}
            />
            <Autocomplete
              sx={{ flex: 1 }}
              id="priceOperation"
              options={operators}
              value={
                operators.find(
                  (value) => value.value === query.priceOperation
                ) || null
              }
              onChange={(event, value) =>
                handleAutocompleteChange("priceOperation", value)
              }
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
          <div className="filter-operation">
            <TextField
              sx={{ flex: 1 }}
              id="upsell"
              label={t("upsell")}
              value={query?.upsell || ""}
              type="number"
              variant="outlined"
              inputProps={{ step: "10", min: "0" }}
              onChange={handleInput}
            />
            <Autocomplete
              sx={{ flex: 1 }}
              id="upsellOperation"
              options={operators}
              value={
                operators.find(
                  (value) => value.value === query.upsellOperation
                ) || null
              }
              onChange={(event, value) =>
                handleAutocompleteChange("upsellOperation", value)
              }
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
        </div>
        <div className="filter-elements">
          <div className="filter-element">
            <DateFilterDropdown
              dates={dateHandeler.dates}
              setDates={dateHandeler.setDates}
              query={query}
              setQuery={setQuery}
              startDateQuery={"startDate"}
              endDateQuery={"endDate"}
              autocompleteLabel={"date"}
              width={"100%"}
            />
          </div>
          <div className="filter-element">
            <ProductsAutocomplete
              products={products}
              setProducts={setProducts}
              choosenProduct={choosenProduct}
              setChoosenProduct={setChoosenProduct}
              productType={productType}
              width="100%"
            />
          </div>
          {choosenProduct._id && (
            <div className="filter-element">
              <SubProductAutocomplete
                width="100%"
                choosenProduct={choosenProduct}
                subProducts={subProducts}
                choosenSubProduct={choosenSubProduct}
                setChoosenSubProduct={setChoosenSubProduct}
              />
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default FilterInfoSection;
