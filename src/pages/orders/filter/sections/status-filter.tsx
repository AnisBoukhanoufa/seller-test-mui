import { Autocomplete, TextField } from "@mui/material";
import DateFilterDropdown from "components/drop-downs/dates-drop-down/dates-drop-down";
import useDatePicker from "hooks/use-date-picker";
import { t } from "i18next";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {  EnumOrderStatus } from "statics/enums";
import { OrderReasonStatus } from "statics/statics";

const StatusFilterSection = ({ query, setQuery, handleAutocompleteChange }) => {
 
  const statusDateHandeler = useDatePicker(
    query?.startDateStatus,
    query?.endDateStatus,
    query,
    "startDateStatus",
    "endDateStatus"
  );
  return (
    <div className="filter-section">
      <div className="section-title">status filter:</div>
      <div className="order-info-filter">
        <div className="filter-elements">
          <div className="filter-element horizontal">
            <Autocomplete
              sx={{ flex: 1 }}
              id="status"
              options={Object.values(EnumOrderStatus)}
              value={query.status || null}
              onChange={(event, value) => {
                handleAutocompleteChange("status", value);
              }}
              getOptionLabel={(option) => t(option)}
              renderInput={(params) => (
                <TextField {...params} label={t("status")} variant="outlined" />
              )}
            />
          </div>
          <div className="filter-element">
            <DateFilterDropdown
              width={"100%"}
              dates={statusDateHandeler.dates}
              setDates={statusDateHandeler.setDates}
              query={query}
              setQuery={setQuery}
              startDateQuery={"startDateStatus"}
              endDateQuery={"endDateStatus"}
              autocompleteLabel={"status date"}
            />
          </div>
        </div>
        <div className="filter-elements">
          <div className="filter-element">
            <Autocomplete
              sx={{ flex: 1 }}
              id="reason"
              options={OrderReasonStatus[query.status] || []}
              value={query.reason || null}
              onChange={(event, value) => {
                handleAutocompleteChange("reason", value);
              }}
              getOptionLabel={(option) => t(option)}
              renderInput={(params) => (
                <TextField {...params} label={t("reason")} variant="outlined" />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusFilterSection;
