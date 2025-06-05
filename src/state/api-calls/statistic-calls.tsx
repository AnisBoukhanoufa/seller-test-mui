import { errorHandler } from "state/api-calls.js";
import {
  updateStatisticBalance,
  statisticFailed,
  statisticStart,
} from "state/statistics-redux-.js";

import { baseRequest } from "utils/request-methods.js";

export const getStatisticBalance = async (query: any, dispatch: any) => {
  dispatch(statisticStart());
  try {
    const res = await baseRequest.get(`/statistic/balance?${query}`);
    dispatch(updateStatisticBalance(res?.data?.balance));
  } catch (err) {
    dispatch(statisticFailed());
    errorHandler(err, dispatch);
    throw err;
  }
};
export const getStatusCount = async (
  query: any,
  signal: any,
  dispatch: any
) => {
  try {
    const res = await baseRequest.get(`/statistic/count-by-status?${query}`, {
      signal,
    });
    return res.data;
  } catch (err) {
    errorHandler(err, dispatch);
    throw err;
  }
};
