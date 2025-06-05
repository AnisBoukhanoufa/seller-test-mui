import { errorHandler, successHandler } from "state/api-calls.js";
import {
  productNormalSellerStart,
  productNormalSellerSuccess,
  productNormalSellerFailed,
  setProductNormalSellerStart,
  setProductNormalSellerSuccess,
  setProductNormalSellerFailed,
  updateProductNormalSellerStart,
  updateProductNormalSellerSuccess,
  updateProductNormalSellerFailed,
  deleteProductNormalSellerStart,
  deleteProductNormalSellerSuccess,
  deleteProductNormalSellerFailed,
  updateStatusProductNormalSellerStart,
  updateStatusProductNormalSellerSuccess,
  updateStatusProductNormalSellerFailed,
} from "../product-normal-seller-redux.js";
import { baseRequest } from "utils/request-methods.js";

export const getProductNormalSeller = async (query: any, dispatch: any) => {
  dispatch(productNormalSellerStart());
  try {
    const res = await baseRequest.get(`/product-seller/pagination?${query}`);
    dispatch(productNormalSellerSuccess(res.data));
  } catch (err) {
    dispatch(productNormalSellerFailed());
    errorHandler(err, dispatch);
  }
};

export const setProductNormalSeller = async (data: any, dispatch: any) => {
  dispatch(setProductNormalSellerStart());
  try {
    const res = await baseRequest.post("/product-seller", data);
    dispatch(setProductNormalSellerSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setProductNormalSellerFailed());
    errorHandler(err, dispatch);
    throw new Error(err);
  }
};

export const deleteProductNormalSeller = async (id: any, dispatch: any) => {
  dispatch(deleteProductNormalSellerStart());
  try {
    const res = await baseRequest.delete(`/products-seller/${id}`);
    dispatch(deleteProductNormalSellerSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(deleteProductNormalSellerFailed());
    errorHandler(err, dispatch);
    throw new Error(err);
  }
};

export const updateProductNormalSeller = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateProductNormalSellerStart());
  try {
    const res = await baseRequest.put(`/product-seller/single/${id}`, data);
    dispatch(updateProductNormalSellerSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
    return res;
  } catch (err) {
    dispatch(updateProductNormalSellerFailed());
    errorHandler(err, dispatch);
    throw new Error(err);
  }
};
//

export const updateStatusProductNormalSeller = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateStatusProductNormalSellerStart());
  try {
    const res = await baseRequest.put(`/product-seller/single/${id}`, data);
    dispatch(updateStatusProductNormalSellerSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateStatusProductNormalSellerFailed());
    errorHandler(err, dispatch);
    throw new Error(err);
  }
};

export const updateSubProductsProductNormalSeller = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateProductNormalSellerStart());
  try {
    const res = await baseRequest.put(
      `/product-seller/sub-products/${id}`,
      data
    );
    dispatch(updateProductNormalSellerSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateProductNormalSellerFailed());
    errorHandler(err, dispatch);
    throw new Error(err);
  }
};
