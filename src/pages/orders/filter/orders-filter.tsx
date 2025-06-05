import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./orders-filter.scss";
import { t } from "i18next";
import useQuery from "hooks/filter-hooks/use-query";
import FilterInfoSection from "./sections/info-filter";
import StatusFilterSection from "./sections/status-filter";

const OrdersFilter = ({
  filterOpen,
  setFilterOpen,
  queryFilter,
  setQueryFilter,
  productType,
}: any) => {
  const {
    query,
    handleAutocompleteChange,
    handleMultipleAutocompleteChange,
    handleInput,
    handleClear,
    handleFilter,
    setQuery,
  } = useQuery(queryFilter, setQueryFilter, setFilterOpen);

  return (
    <Dialog
      open={filterOpen}
      onClose={() => setFilterOpen(false)}
      sx={{ height: "100%" }}
      maxWidth="md"
      keepMounted
    >
      <DialogTitle className="dialog-title">
        <span className="capitalize">{t("orders filter")}</span>
      </DialogTitle>
      <DialogContent>
        <div className="filter">
          <FilterInfoSection
            query={query}
            setQuery={setQuery}
            handleMultipleAutocompleteChange={handleMultipleAutocompleteChange}
            handleInput={handleInput}
            handleAutocompleteChange={handleAutocompleteChange}
            productType={productType}
          />
          <StatusFilterSection
            query={query}
            setQuery={setQuery}
            handleAutocompleteChange={handleAutocompleteChange}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleClear({ type: queryFilter.type });
          }}
        >
          {t("clear")}
        </Button>
        <Button onClick={handleFilter}>{t("filter")}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrdersFilter;
