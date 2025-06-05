import moment from "moment";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { EnumPaymentType } from "statics/enums";

const useQueryFilter = (initValue = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize queryFilter by removing unwanted parameters
  const [queryFilter, setQueryFilter] = useState(() => ({
    ...initValue,
    ...Object.fromEntries(Array.from(searchParams.entries())),
  }));

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setQueryFilter({
        ...queryFilter,
        ...(!searchParams.get("paymentType")
          ? { paymentType: EnumPaymentType.withdraw }
          : {}),
        ...(!searchParams.get("startDate")
          ? { startDate: moment().subtract(1, "month").format("YYYY-MM-DD") }
          : {}),
      });
    }
  }, []);

  // Sync queryFilter with URL searchParams
  useEffect(() => {
    setSearchParams(queryFilter,{ replace: true });
  }, [JSON.stringify(queryFilter)]);

  return {
    queryFilter,
    setQueryFilter,
  };
};

export default useQueryFilter;
