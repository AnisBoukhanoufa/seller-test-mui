import { errorHandler, successHandler } from "state/api-calls.js";
import {
  orderToopDropStart,
  orderToopDropSuccess,
  orderToopDropFailed,
  setOrderToopDropStart,
  setOrderToopDropSuccess,
  setOrderToopDropFailed,
  updateOrderToopDropStart,
  updateOrderToopDropSuccess,
  updateOrderToopDropFailed,
  singleOrderToopDropStart,
  singleOrderToopDropSuccess,
  singleOrderToopDropFailed,
} from "../order-toop-drop-redux";
import { baseRequest } from "utils/request-methods.js";

export const getSingleOrderToopDrop = async (id: string, dispatch: any) => {
  dispatch(singleOrderToopDropStart());
  try {
    const res = await baseRequest.get(`/order-toop-drop/single/${id}`);
    dispatch(singleOrderToopDropSuccess());
    return res.data;
  } catch (err) {
    dispatch(singleOrderToopDropFailed());
    errorHandler(err, dispatch);
    throw err;
  }
};

export const getOrdersToopDrop = async (query: string, dispatch: any) => {
  dispatch(orderToopDropStart());
  try {
    const res = await baseRequest.get(`/order-toop-drop/pagination?${query}`);
    dispatch(orderToopDropSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(orderToopDropFailed());
    errorHandler(err, dispatch);
    throw err
  }
};


export const getOrdersToopDropDataToDownload = async (
  query: string,
  dispatch: any
) => {
  try {
    const res = await baseRequest.get(
      `/order-toop-drop/pagination?${query}&download=1`
    );
    return res;
  } catch (err) {
    errorHandler(err, dispatch);
  }
};


export const setOrderToopDrop = async (data: any, dispatch: any) => {
  dispatch(setOrderToopDropStart());
  try {
    const res = await baseRequest.post("/order-toop-drop", data);
    dispatch(setOrderToopDropSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setOrderToopDropFailed());
    errorHandler(err, dispatch);
    throw err;
  }
};

export const setManyOrdersToopDrop = async (data: any, dispatch: any) => {
  dispatch(setOrderToopDropStart());
  try {
    const res = await baseRequest.post("/order-toop-drop/many", data);
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setOrderToopDropFailed());
    errorHandler(err, dispatch);
    throw err
  }
};


export const updateOrderToopDrop = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateOrderToopDropStart());
  try {
    const res = await baseRequest.put(`/order-toop-drop/single/${id}`, data);
    dispatch(updateOrderToopDropSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateOrderToopDropFailed());
    errorHandler(err, dispatch);
    throw err
  }
};

export const updateOrderToopDropProducts = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateOrderToopDropStart());
  try {
    const res = await baseRequest.put(`/order-toop-drop/product/${id}`, data);
    dispatch(updateOrderToopDropSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateOrderToopDropFailed());
    errorHandler(err, dispatch);
    throw err
  }
};
