import { baseRequest } from "utils/request-methods.js";
import {
  paymentStart,
  paymentSuccess,
  paymentFailed,
  setPaymentStart,
  setPaymentSuccess,
  setPaymentFailed,
  updatePaymentStart,
  updatePaymentSuccess,
  updatePaymentFailed,
  deletePaymentStart,
  deletePaymentSuccess,
  deletePaymentFailed,
} from "../payment-redux.js";
import { errorHandler, successHandler } from "state/api-calls.js";

export const getPayment = async (query: any, dispatch: any) => {
  dispatch(paymentStart());
  try {
    const res = await baseRequest.get(`/payment/pagination?${query}`);
    dispatch(paymentSuccess(res.data));
  } catch (err) {
    dispatch(paymentFailed());
    errorHandler(err, dispatch);
  }
};

export const setWithdraw = async (data: any, dispatch: any) => {
  dispatch(setPaymentStart());
  try {
    const res = await baseRequest.post("/payments", data);
    dispatch(setPaymentSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setPaymentFailed());
    errorHandler(err, dispatch);
  }
};
export const setDeposit = async (data: any, dispatch: any) => {
  dispatch(setPaymentStart());
  try {
    const res = await baseRequest.post("/payment/deposit", data);
    dispatch(setPaymentSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setPaymentFailed());
    errorHandler(err, dispatch);
  }
};
export const setSourcingPayment = async (data: any, dispatch: any) => {
  dispatch(setPaymentStart());
  try {
    const res = await baseRequest.post("/payment/sourcing", data);
    dispatch(setPaymentSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setPaymentFailed());
    errorHandler(err, dispatch);
  }
};

export const deletePayment = async (id: any, dispatch: any) => {
  dispatch(deletePaymentStart());
  try {
    const res = await baseRequest.delete(`/payments/${id}`);
    dispatch(deletePaymentSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(deletePaymentFailed());
    errorHandler(err, dispatch);
  }
};

export const updatePayment = async (id: string, data: any, dispatch: any) => {
  dispatch(updatePaymentStart());
  try {
    const res = await baseRequest.put(`/payments/${id}`, data);
    dispatch(updatePaymentSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updatePaymentFailed());
    errorHandler(err, dispatch);
  }
};

export const updatePaymentStatus = async (
  id: string,
  data: any,
  dispatch: any,
) => {
  dispatch(updatePaymentStart());
  try {
    const res = await baseRequest.put(`/payment/status/${id}`, data);
    dispatch(updatePaymentSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updatePaymentFailed());
    errorHandler(err, dispatch);
  }
};
