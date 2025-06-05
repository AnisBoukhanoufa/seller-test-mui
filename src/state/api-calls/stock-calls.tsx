import { errorHandler, successHandler } from "state/api-calls.js";
import {
  stockFailed,
  stockStart,
  stockSuccess,
  updateStockFailed,
  updateStockStart,
  updateStockSuccess,
} from "../stock-redux.js";
import { baseRequest } from "utils/request-methods.js";

export const getStock = async (productInfo: any, dispatch: any) => {
  dispatch(stockStart());
  try {
    const res = await baseRequest.get(
      `/stock-seller/pagination?productId=${productInfo._id}`,
    );

    dispatch(stockSuccess(res.data));
  } catch (err) {
    dispatch(stockFailed());
    errorHandler(err, dispatch);
  }
};

export const setNewStock = async (data: any, dispatch: any) => {
  try {
    const res = await baseRequest.post(`/stock-seller`, data);
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    errorHandler(err, dispatch);
  }
};

export const addToExistingStock = async (
  stockId: any,
  data: any,
  dispatch: any,
) => {
  try {
    const res = await baseRequest.put(
      `/stock-seller/merge-sourcing/${stockId}`,
      data,
    );
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    errorHandler(err, dispatch);
  }
};

export const updateStock = async (id: string, data: any, dispatch: any) => {
  dispatch(updateStockStart());
  try {
    const res = await baseRequest.put(`/stock-seller/single/${id}`, data);
    dispatch(updateStockSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateStockFailed());
    errorHandler(err, dispatch);
  }
};
export const updateStockStatus = async (
  id: string,
  data: any,
  dispatch: any,
) => {
  dispatch(updateStockStart());
  try {
    const res = await baseRequest.put(`/stock-seller/status/${id}`, data);
    dispatch(updateStockSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateStockFailed());
    errorHandler(err, dispatch);
  }
};

//====================================
export const getAffiliateStock = async (productInfo: any, dispatch: any) => {
  dispatch(stockStart());
  try {
    const res = await baseRequest.get(
      `/stock-affiliate/pagination?productId=${productInfo._id}`,
    );

    dispatch(stockSuccess(res.data));
  } catch (err) {
    dispatch(stockFailed());
    errorHandler(err, dispatch);
  }
};

export const setNewAffiliateStock = async (data: any, dispatch: any) => {
  try {
    const res = await baseRequest.post(`/stock-affiliate`, data);
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    errorHandler(err, dispatch);
  }
};

export const addToExistingAffiliateStock = async (
  stockId: any,
  data: any,
  dispatch: any,
) => {
  try {
    const res = await baseRequest.put(
      `/stock-affiliate/merge-sourcing/${stockId}`,
      data,
    );
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    errorHandler(err, dispatch);
  }
};

export const updateAffiliateStock = async (
  id: string,
  data: any,
  dispatch: any,
) => {
  dispatch(updateStockStart());
  try {
    const res = await baseRequest.put(`/stock-affiliate/single/${id}`, data);
    dispatch(updateStockSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateStockFailed());
    errorHandler(err, dispatch);
  }
};
export const updateAffiliateStockStatus = async (
  id: string,
  data: any,
  dispatch: any,
) => {
  dispatch(updateStockStart());
  try {
    const res = await baseRequest.put(`/stock-affiliate/status/${id}`, data);
    dispatch(updateStockSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateStockFailed());
    errorHandler(err, dispatch);
  }
};
