import { baseRequest } from "utils/request-methods.js";
import {
  orderAffiliateSellerStart,
  orderAffiliateSellerSuccess,
  orderAffiliateSellerFailed,
  setOrderAffiliateSellerStart,
  setOrderAffiliateSellerSuccess,
  setOrderAffiliateSellerFailed,
  updateOrderAffiliateSellerStart,
  updateOrderAffiliateSellerSuccess,
  updateOrderAffiliateSellerFailed,
  singleOrderAffiliateSellerStart,
  singleOrderAffiliateSellerSuccess,
  singleOrderAffiliateSellerFailed,
} from "../order-affiliate-seller-redux.js";
import { errorHandler, successHandler } from "state/api-calls.js";

export const getSingleOrderAffiliateSeller = async (
  id: string,
  dispatch: any
) => {
  dispatch(singleOrderAffiliateSellerStart());
  try {
    const res = await baseRequest.get(`/order-affiliate/single/${id}`);
    dispatch(singleOrderAffiliateSellerSuccess());
    return res.data;
  } catch (err) {
    dispatch(singleOrderAffiliateSellerFailed());
    errorHandler(err, dispatch);
    throw err;
  }
};

export const getOrdersAffiliateSeller = async (
  query: string,
  dispatch: any
) => {
  dispatch(orderAffiliateSellerStart());
  try {
    const res = await baseRequest.get(`/order-affiliate/pagination?${query}`);
    dispatch(orderAffiliateSellerSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(orderAffiliateSellerFailed());
    errorHandler(err, dispatch);
    throw err;
  }
};

export const setOrderAffiliateSeller = async (data: any, dispatch: any) => {
  dispatch(setOrderAffiliateSellerStart());
  try {
    const res = await baseRequest.post("/order-affiliate", data);
    dispatch(setOrderAffiliateSellerSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setOrderAffiliateSellerFailed());
    errorHandler(err, dispatch);
    throw err
  }
};

export const setManyOrdersAffiliateSeller = async (
  data: any,
  dispatch: any
) => {
  dispatch(setOrderAffiliateSellerStart());
  try {
    const res = await baseRequest.post("/order-affiliate/many", data);
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setOrderAffiliateSellerFailed());
    errorHandler(err, dispatch);
    throw err
  }
};

export const updateOrderAffiliateSeller = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateOrderAffiliateSellerStart());
  try {
    const res = await baseRequest.put(`/order-affiliate/single/${id}`, data);
    dispatch(updateOrderAffiliateSellerSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateOrderAffiliateSellerFailed());
    errorHandler(err, dispatch);
    throw err
  }
};

export const updateOrderAffiliateSellerProducts = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateOrderAffiliateSellerStart());
  try {
    const res = await baseRequest.put(`/order-affiliate/product/${id}`, data);
    dispatch(updateOrderAffiliateSellerSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateOrderAffiliateSellerFailed());
    errorHandler(err, dispatch);
    throw err
  }
};

export const getOrdersAffiliateSellerDataToDownload = async (
  query: string,
  dispatch: any
) => {
  try {
    const res = await baseRequest.get(
      `/order-affiliate/pagination?${query}&download=1`
    );
    return res;
  } catch (err) {
    errorHandler(err, dispatch);
  }
};