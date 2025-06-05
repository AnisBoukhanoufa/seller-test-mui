import { errorHandler, successHandler } from "state/api-calls.js";
import {
  currencyStart,
  currencySuccess,
  currencyFailed,
  setCurrencyStart,
  setCurrencySuccess,
  setCurrencyFailed,
  updateCurrencyStart,
  updateCurrencySuccess,
  updateCurrencyFailed,
  deleteCurrencyStart,
  deleteCurrencySuccess,
  deleteCurrencyFailed,
} from "../currency-redux.js";
import { baseRequest } from "utils/request-methods.js";

export const getCurrency = async (dispatch: any) => {
  dispatch(currencyStart());
  try {
    const res = await baseRequest.get("/currency");
    dispatch(currencySuccess(res.data));
  } catch (err) {
    dispatch(currencyFailed());
    errorHandler(err, dispatch);
  }
};

export const setCurrency = async (data: any, dispatch: any) => {
  dispatch(setCurrencyStart());
  try {
    const res = await baseRequest.post("/currency", data);
    dispatch(setCurrencySuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setCurrencyFailed());
    errorHandler(err, dispatch);
  }
};

export const deleteCurrency = async (id: any, dispatch: any) => {
  dispatch(deleteCurrencyStart());
  try {
    const res = await baseRequest.delete(`/currency/${id}`);
    dispatch(deleteCurrencySuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(deleteCurrencyFailed());
    errorHandler(err, dispatch);
  }
};

export const updateCurrency = async (id: any, data: any, dispatch: any) => {
  dispatch(updateCurrencyStart());
  try {
    const res = await baseRequest.put(`/currency/${id}`, data);
    if (res.status === 200) {
      dispatch(updateCurrencySuccess(res.data));
    }
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateCurrencyFailed());
    errorHandler(err, dispatch);
  }
};
