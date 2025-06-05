import { errorHandler, successHandler } from "state/api-calls.js";
import {
  productToopDropStart,
  productToopDropSuccess,
  productToopDropFailed,
  setProductToopDropStart,
  setProductToopDropSuccess,
  setProductToopDropFailed,
  updateProductToopDropStart,
  updateProductToopDropSuccess,
  updateProductToopDropFailed,
  deleteProductToopDropStart,
  deleteProductToopDropSuccess,
  deleteProductToopDropFailed,
} from "../product-toop-drop-redux";
import { baseRequest } from "utils/request-methods.js";
import { EnumProductAffiliateVisibilityScope } from "statics/enums";

export const getProductToopDrop = async (query: any, dispatch: any) => {
  dispatch(productToopDropStart());
  try {
    const res = await baseRequest.get(
      `/product-affiliate/pagination?${query}&visibilityScope=${EnumProductAffiliateVisibilityScope.toopDrop}`
    );
    dispatch(productToopDropSuccess(res.data));
  } catch (err) {
    dispatch(productToopDropFailed());
    errorHandler(err, dispatch);
  }
};
export const getProductToopDropFavorite = async (query: any, dispatch: any) => {
  dispatch(productToopDropStart());
  try {
    const res = await baseRequest.get(
      `/product-affiliate/favorite?${query}&visibilityScope=${EnumProductAffiliateVisibilityScope.toopDrop}`
    );
    dispatch(productToopDropSuccess(res.data));
  } catch (err) {
    dispatch(productToopDropFailed());
    errorHandler(err, dispatch);
  }
};
export const setProductToopDrop = async (data: any, dispatch: any) => {
  dispatch(setProductToopDropStart());
  try {
    const res = await baseRequest.post("/product-affiliate", data);
    dispatch(setProductToopDropSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setProductToopDropFailed());
    errorHandler(err, dispatch);
  }
};

export const deleteProductToopDrop = async (id: any, dispatch: any) => {
  dispatch(deleteProductToopDropStart());
  try {
    const res = await baseRequest.delete(`/products-affiliate/${id}`);
    dispatch(deleteProductToopDropSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(deleteProductToopDropFailed());
    errorHandler(err, dispatch);
  }
};

export const updateProductToopDrop = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateProductToopDropStart());
  try {
    const res = await baseRequest.put(`/product-affiliate/${id}`, data);
    dispatch(updateProductToopDropSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateProductToopDropFailed());
    errorHandler(err, dispatch);
  }
};

export const registerProductToopDropFavorite = async (
  data: any,
  dispatch: any
) => {
  try {
    const res = await baseRequest.post(`/product-affiliate/favorite`, data);
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    errorHandler(err, dispatch);
  }
};

export const deleteProductToopDropFavorite = async (
  data: any,
  dispatch: any
) => {
  try {
    const res = await baseRequest.delete(
      `/product-affiliate/favorite/${data.productId}`,
      data
    );
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    errorHandler(err, dispatch);
  }
};
