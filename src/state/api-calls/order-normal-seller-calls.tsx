import { errorHandler, successHandler } from "state/api-calls.js";
import {
  orderNormalSellerStart,
  orderNormalSellerSuccess,
  orderNormalSellerFailed,
  setOrderNormalSellerStart,
  setOrderNormalSellerSuccess,
  setOrderNormalSellerFailed,
  updateOrderNormalSellerStart,
  updateOrderNormalSellerSuccess,
  updateOrderNormalSellerFailed,
  singleOrderNormalSellerStart,
  singleOrderNormalSellerSuccess,
  singleOrderNormalSellerFailed,
} from "../order-normal-seller-redux.js";
import { baseRequest } from "utils/request-methods.js";

export const getSingleOrderNormalSeller = async (id: string, dispatch: any) => {
  dispatch(singleOrderNormalSellerStart());
  try {
    const res = await baseRequest.get(`/order-seller/single/${id}`);
    dispatch(singleOrderNormalSellerSuccess());
    return res.data;
  } catch (err) {
    dispatch(singleOrderNormalSellerFailed());
    errorHandler(err, dispatch);
    throw err;
  }
};
export const getOrdersNormalSeller = async (query: string, dispatch: any) => {
  dispatch(orderNormalSellerStart());
  try {
    const res = await baseRequest.get(`/order-seller/pagination?${query}`);
    dispatch(orderNormalSellerSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(orderNormalSellerFailed());
    errorHandler(err, dispatch);
    throw new Error(err);
  }
};

export const setOrderNormalSeller = async (data: any, dispatch: any) => {
  dispatch(setOrderNormalSellerStart());
  try {
    const res = await baseRequest.post("/order-seller", data);
    dispatch(setOrderNormalSellerSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setOrderNormalSellerFailed());
    errorHandler(err, dispatch);
    throw err;
  }
};

export const setManyOrdersNormalSeller = async (data: any, dispatch: any) => {
  dispatch(setOrderNormalSellerStart());
  try {
    const res = await baseRequest.post("/order-seller/many", data);
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setOrderNormalSellerFailed());
    errorHandler(err, dispatch);
    throw err;
  }
};

export const updateOrderNormalSeller = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateOrderNormalSellerStart());
  try {
    const res = await baseRequest.put(`/order-seller/single/${id}`, data);
    dispatch(updateOrderNormalSellerSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateOrderNormalSellerFailed());
    errorHandler(err, dispatch);
  }
};

export const updateOrderNormalSellerProducts = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateOrderNormalSellerStart());
  try {
    const res = await baseRequest.put(`/order-seller/product/${id}`, data);
    dispatch(updateOrderNormalSellerSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateOrderNormalSellerFailed());
    errorHandler(err, dispatch);
    throw new Error(err);
  }
};

export const getOrdersNormalSellerDataToDownload = async (
  query: string,
  dispatch: any
) => {
  try {
    const res = await baseRequest.get(
      `/order-seller/pagination?${query}&download=1`
    );
    return res;
  } catch (err) {
    errorHandler(err, dispatch);
  }
};
