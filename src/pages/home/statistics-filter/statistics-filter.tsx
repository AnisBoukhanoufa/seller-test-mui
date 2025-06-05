import "./statistics-filter.scss";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import ProductsAutocomplete from "components/autocomplete/products-autocomplete";

import { EnumCountry } from "statics/enums";
import CountriesMultipleAutocomplete from "components/autocomplete/countries-multiple-autocomplete";
import useMultipleCountries from "hooks/autocompletes-hooks/use-countries-multiple";

import SubProductAutocomplete from "components/autocomplete/sub-products-autocomplete";
import useDatePicker from "hooks/use-date-picker";
import DateFilterDropdown from "components/drop-downs/dates-drop-down/dates-drop-down";
import { t } from "i18next";
import useQuery from "hooks/filter-hooks/use-query";
import useProductSubProductFilter from "hooks/filter-hooks/products-filter-hooks/use-product-sub-product-filter";

const StatisticsFilter = ({
  queryFilter,
  setQueryFilter,
  filterOpen,
  setFilterOpen,
}: any) => {
  const { query, handleClear, handleFilter, setQuery } = useQuery(
    queryFilter,
    setQueryFilter,
    setFilterOpen
  );

  const {
    products,
    setProducts,
    choosenProduct,
    setChoosenProduct,
    subProducts,
    choosenSubProduct,
    setChoosenSubProduct,
  } = useProductSubProductFilter(queryFilter?.order, query, setQuery);

  const { countryFilter, setCountryFilter } = useMultipleCountries(
    queryFilter,
    setQuery
  );

  //date calendar range state
  const { dates, setDates } = useDatePicker(
    query.startDate,
    query.endDate,
    query,
    "startDate",
    "endDate"
  );

  return (
    <Dialog
      open={filterOpen}
      onClose={() => setFilterOpen(false)}
      maxWidth="md"
    >
      <DialogContent>
        <div className="filter-statistics">
          <div className="left-filter">
            <DateFilterDropdown
              width={"100%"}
              dates={dates}
              setDates={setDates}
              query={query}
              setQuery={setQuery}
              startDateQuery={"startDate"}
              endDateQuery={"endDate"}
              autocompleteLabel={"date"}
            />
            <div className="seller-product">
              <ProductsAutocomplete
                products={products}
                setProducts={setProducts}
                choosenProduct={choosenProduct}
                setChoosenProduct={setChoosenProduct}
                productType={queryFilter?.order}
              />
            </div>
            {choosenProduct._id !== "" && (
              <div className="seller-product">
                <SubProductAutocomplete
                  choosenProduct={choosenProduct}
                  subProducts={subProducts}
                  choosenSubProduct={choosenSubProduct}
                  setChoosenSubProduct={setChoosenSubProduct}
                />
              </div>
            )}

            <div className="seller-country">
              <CountriesMultipleAutocomplete
                query={query}
                countryFilter={countryFilter}
                setCountryFilter={setCountryFilter}
                options={Object.values(EnumCountry)}
              />
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() =>
            handleClear({
              order: queryFilter.order,
              ...(queryFilter.type ? { type: Number(queryFilter.type) } : {}),
              ...(queryFilter.paymentType
                ? { paymentType: queryFilter.paymentType }
                : {}),
            })
          }
        >
          {t("clear")}
        </Button>
        <Button onClick={handleFilter}>{t("filter")}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default StatisticsFilter;
