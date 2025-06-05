import { useState, useEffect } from "react";
import moment from "moment";
import { shiftDateNow } from "utils/functions";
const useDatePicker = (
  startDate: string,
  endDate: string,
  query: object,
  startDateLabel: string,
  endDateLabel: string
) => {
  const [dates, setDates] = useState([
    {
      startDate: startDate ? moment(startDate).toDate() : moment().toDate(),
      endDate: endDate ? moment(endDate).toDate() : moment().add(1, "day"),
      key: "selection",
    },
  ]);
  useEffect(() => {
    if (!query?.[startDateLabel]) {
      setDates([
        {
          startDate: moment(shiftDateNow(-30)).toDate(),
          endDate: moment(shiftDateNow(+1)).toDate(),
          key: "selection",
        },
      ]);
    }
    if (query?.[startDateLabel]) {
      setDates([
        {
          fromFilter: true,
          startDate: moment(startDate).toDate(),
          endDate: endDate
            ? moment(query[endDateLabel]).toDate()
            : moment().add(1, "day"),
          key: "selection",
        },
      ]);
    }
  }, [query?.[startDateLabel], query?.[endDateLabel], query]);

  return { dates, setDates };
};

export default useDatePicker;
