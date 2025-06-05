import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./invoices-filter.scss";

import { EnumOrderStatus } from "statics/enums";
import { t } from "i18next";
import useQuery from "hooks/filter-hooks/use-query";

const InvoicesFilter = ({
  filterOpen,
  setFilterOpen,
  queryFilter,
  setQueryFilter,
}: any) => {
  const { query, handleAutocompleteChange, handleClear, handleFilter } =
    useQuery(queryFilter, setQueryFilter, setFilterOpen);

  return (
    <Dialog
      open={filterOpen}
      onClose={() => setFilterOpen(false)}
      sx={{ height: "100%" }}
      maxWidth="md"
    >
      <DialogTitle className="dialog-title">
        <span className=" capitalize">{t("invoices filter")}</span>
      </DialogTitle>
      <DialogContent  className="products-filter-container">
        <Box p={1} className="filter-section">
          <Box className="filter-product infos-filter ">
            <Box className="left-filter">
              <Box className="filter-status">
                <Autocomplete
                  sx={{ flex: 1 }}
                  id="currentStatus"
                  options={Object.values(EnumOrderStatus)}
                  value={query.currentStatus || null}
                  onChange={(event, value) => {
                    handleAutocompleteChange("currentStatus", value);
                  }}
                  getOptionLabel={(option) => t(option)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={t("status")}
                      variant="outlined"
                    />
                  )}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleClear({});
          }}
        >
          {t("clear")}
        </Button>
        <Button onClick={handleFilter}>{t("filter")}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InvoicesFilter;
