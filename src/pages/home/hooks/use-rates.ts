import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getStatusCount } from "state/api-calls/statistic-calls";
import {
  updateStatisticLast30Rates,
  updateStatisticRates,
} from "state/statistics-redux-";
import { EnumConfirmedOrderStatus, EnumOrderStatus } from "statics/enums";
import { defaultDateFilter, queryToFilter } from "utils/functions";

const useRates = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { statusCount } = useSelector((state) => state.statistic.statistics);

  const calculateRates = (data) => {
    const statusCount = { ...data };
    delete statusCount[EnumOrderStatus.new];

    const upsell = statusCount.upsell;
    delete statusCount.upsell;

    const total = Object.values(statusCount).reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    );
    const confirmed = Object.keys(statusCount)
      .filter((key) =>
        Object.values(EnumConfirmedOrderStatus).includes(Number(key))
      )
      .reduce((sum, key) => sum + statusCount[key], 0);

    const wrongRate =
      (total ? (100 * statusCount[EnumOrderStatus.wrong]) / total : 0) || 0;

    const confirmationRate =
      (total
        ? (100 * confirmed) /
          (total - (statusCount[EnumOrderStatus.wrong] || 0))
        : 0) || 0;

    const deliveryRate =
      (statusCount[EnumOrderStatus.delivered]
        ? (100 * statusCount[EnumOrderStatus.delivered]) / confirmed
        : 0) || 0;
    const upsellRate = (confirmed ? (100 * upsell) / confirmed : 0) || 0;
    return {
      wrong: wrongRate,
      confirmed: confirmationRate,
      delivered: deliveryRate,
      upsell: upsellRate,
    };
  };

  useEffect(() => {
    const ratesValues = calculateRates(statusCount);
    dispatch(updateStatisticRates(ratesValues));
  }, [statusCount]);

  const abortControllerRef = useRef(null);
  
  const calculateLast30Rates = useCallback(async (searchParams) => {
    try {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const controller = new AbortController();
      abortControllerRef.current = controller;

      const signal = controller.signal;
      const query = {
        ...Object.fromEntries(
          Array.from(searchParams.entries()).filter(
            ([key]) => key !== "startDate" && key !== "endDate"
          )
        ),
        ...defaultDateFilter(),
      };
      const response = await getStatusCount(
        queryToFilter(query),
        signal,
        dispatch
      );
      dispatch(updateStatisticLast30Rates(calculateRates(response)));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (searchParams.get("type")) {
      calculateLast30Rates(searchParams);
    }
  }, [searchParams]);
};

export default useRates;
