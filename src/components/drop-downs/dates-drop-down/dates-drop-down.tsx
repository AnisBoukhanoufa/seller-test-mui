import { useState, useEffect } from "react";
import {
  Autocomplete,
  TextField,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Divider,
} from "@mui/material";
import { DateRangePicker, defaultInputRanges } from "react-date-range";

import moment from "moment";
import { t } from "i18next";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateFilterDropdown = ({
  dates,
  setDates,
  query,
  setQuery,
  startDateQuery,
  endDateQuery,
  autocompleteLabel,
  width = 350,
}) => {
  const [openDateDialog, setOpenDateDialog] = useState(false);
  const [dateFilterOption, setDateFilterOption] = useState(null);
  const [tempDates, setTempDates] = useState(dates);

  useEffect(() => {
    setTempDates(dates);
  }, [dates]);

  const dateOptions = [
    {
      label: "last day",
      getDates: () => [moment().subtract(1, "day"), moment().add(1, "day")],
    },
    {
      label: "last month",
      getDates: () => [moment().subtract(1, "month"), moment().add(1, "day")],
    },
    {
      label: "last year",
      getDates: () => [moment().subtract(1, "year"), moment().add(1, "day")],
    },
    { label: "custom", getDates: () => null },
  ];

  useEffect(() => {
    const formattedStart = moment(tempDates[0]?.startDate).format("DD/MM/YYYY");
    const formattedEnd = moment(tempDates[0]?.endDate).format("DD/MM/YYYY");
    if (tempDates[0]?.fromFilter) {
      for (const option of dateOptions.filter(
        (option) => option.label !== "custom"
      )) {
        const [startDate, endDate] = option.getDates?.() || [];
        if (
          startDate &&
          endDate &&
          moment(tempDates[0]?.startDate).isSame(startDate, "day") &&
          moment(tempDates[0]?.endDate).isSame(endDate, "day")
        ) {
          setDateFilterOption(option);
          break;
        } else {
          if (formattedStart === formattedEnd) {
            setDateFilterOption({
              label: `${formattedStart}`,
            });
          } else {
            setDateFilterOption({
              label: `${formattedStart} ${t("to")} ${formattedEnd}`,
            });
          }
        }
      }
    } else
      setDateFilterOption({
        label: ``,
      });
  }, [tempDates]);

  const handleDateChange = (option) => {
    setDateFilterOption(option);
    if (option.label === "custom") {
      setOpenDateDialog(true);
    } else {
      const [startDate, endDate] = option.getDates();
      setQuery((prevQuery) => {
        const newQuery = {
          ...prevQuery,
          [startDateQuery]: startDate.format("YYYY-MM-DD"),
        };
        if (newQuery[endDateQuery]) delete newQuery[endDateQuery];
        return newQuery;
      });

      setDates([
        {
          startDate: startDate.toDate(),
          endDate: endDate.toDate(),
          fromFilter: true,
          key: "selection",
        },
      ]);
    }
  };

  const handleCustomDateChange = (item) => {
    setTempDates([item.selection]);
  };

  const applyCustomDate = () => {
    setDates([{ ...tempDates[0], fromFilter: true }]);
    const startDate = moment(tempDates[0].startDate).format("YYYY-MM-DD");
    const endDate = moment(tempDates[0].endDate).format("YYYY-MM-DD");
    setQuery({
      ...query,
      [startDateQuery]: startDate,
      [endDateQuery]: endDate,
    });

    const formattedStart = moment(tempDates[0].startDate).format("DD/MM/YYYY");
    const formattedEnd = moment(tempDates[0].endDate).format("DD/MM/YYYY");
    if (formattedStart === formattedEnd) {
      setDateFilterOption({
        label: `${formattedStart}`,
      });
    } else {
      setDateFilterOption({
        label: `${formattedStart} ${t("to")} ${formattedEnd}`,
      });
    }
    setOpenDateDialog(false);
  };

  const filteredInputRanges = defaultInputRanges.filter(
    (range) => range.label !== "days starting today"
  );

  return (
    <Box>
      <Autocomplete
        sx={{ width }}
        value={dateFilterOption}
        onChange={(event, newValue) => handleDateChange(newValue)}
        options={dateOptions}
        getOptionLabel={(option) => t(option.label)}
        renderInput={(params) => (
          <TextField {...params} label={autocompleteLabel} variant="outlined" />
        )}
      />

      <Dialog
        maxWidth="xl"
        open={openDateDialog}
        onClose={() => setOpenDateDialog(false)}
      >
        <DialogTitle className="dialog-title">
          {t("select date range")}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DateRangePicker
            className="date"
            editableDateInputs={true}
            onChange={handleCustomDateChange}
            moveRangeOnFirstSelection={false}
            ranges={tempDates}
            months={2}
            direction="horizontal"
            maxDate={new Date()}
            inputRanges={filteredInputRanges}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDateDialog(false)} color="primary">
            {t("close")}
          </Button>
          <Button onClick={applyCustomDate} color="primary">
            {t("apply")}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DateFilterDropdown;
