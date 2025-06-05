import { FC, useState } from "react";
import { DateRange } from "react-date-range";
import moment from "moment";
import "react-date-range/dist/styles.css"; // Import the date range styles
import "react-date-range/dist/theme/default.css"; // Import default theme

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  setQuery: (query: any) => void;
  startDateLabel: string;
  endDateLabel: string;
}

const DateRangePicker: FC<DateRangePickerProps> = ({
  dates,
  setDates,
  setQuery,
  query,
  startDateLabel,
  endDateLabel,
}) => {
  const handleDateChange = (item: any) => {
    setDates([item.selection]);
    const endDateWithBuffer = new Date(item.selection.endDate);
    endDateWithBuffer.setDate(item.selection.endDate.getDate() + 1);

    setQuery({
      ...query,
      [startDateLabel]: moment(item.selection.startDate).format("YYYY-MM-DD"),
      [endDateLabel]: moment(endDateWithBuffer).format("YYYY-MM-DD"),
    });
  };

  return (
    <DateRange
      className="date"
      editableDateInputs={true}
      onChange={handleDateChange}
      moveRangeOnFirstSelection={false}
      ranges={dates}
      maxDate={new Date()}
    />
  );
};

export default DateRangePicker;
