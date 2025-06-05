import { errorHandler, successHandler } from "state/api-calls.js";
import {
  productAffiliateSellerStart,
  productAffiliateSellerSuccess,
  productAffiliateSellerFailed,
  setProductAffiliateSellerStart,
  setProductAffiliateSellerSuccess,
  setProductAffiliateSellerFailed,
  updateProductAffiliateSellerStart,
  updateProductAffiliateSellerSuccess,
  updateProductAffiliateSellerFailed,
  deleteProductAffiliateSellerStart,
  deleteProductAffiliateSellerSuccess,
  deleteProductAffiliateSellerFailed,
} from "../product-affiliate-seller-redux.js";
import { baseRequest } from "utils/request-methods.js";
import { EnumProductAffiliateVisibilityScope } from "statics/enums.js";

export const getProductAffiliateSeller = async (query: any, dispatch: any) => {
  dispatch(productAffiliateSellerStart());
  try {
    const res = await baseRequest.get(
      `/product-affiliate/pagination?${query}&visibilityScope=${EnumProductAffiliateVisibilityScope.affiliate}`
    );
    dispatch(productAffiliateSellerSuccess(res.data));
  } catch (err) {
    dispatch(productAffiliateSellerFailed());
    errorHandler(err, dispatch);
  }
};
export const getProductAffiliateSellerFavorite = async (
  query: any,
  dispatch: any
) => {
  dispatch(productAffiliateSellerStart());
  try {
    const res = await baseRequest.get(
      `/product-affiliate/favorite?${query}&visibilityScope=${EnumProductAffiliateVisibilityScope.affiliate}`
    );
    dispatch(productAffiliateSellerSuccess(res.data));
  } catch (err) {
    dispatch(productAffiliateSellerFailed());
    errorHandler(err, dispatch);
  }
};

export const setProductAffiliateSeller = async (data: any, dispatch: any) => {
  dispatch(setProductAffiliateSellerStart());
  try {
    const res = await baseRequest.post("/product-affiliate", data);
    dispatch(setProductAffiliateSellerSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setProductAffiliateSellerFailed());
    errorHandler(err, dispatch);
  }
};

export const deleteProductAffiliateSeller = async (id: any, dispatch: any) => {
  dispatch(deleteProductAffiliateSellerStart());
  try {
    const res = await baseRequest.delete(`/products-affiliate/${id}`);
    dispatch(deleteProductAffiliateSellerSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(deleteProductAffiliateSellerFailed());
    errorHandler(err, dispatch);
  }
};

export const updateProductAffiliateSeller = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateProductAffiliateSellerStart());
  try {
    const res = await baseRequest.put(`/product-affiliate/${id}`, data);
    dispatch(updateProductAffiliateSellerSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateProductAffiliateSellerFailed());
    errorHandler(err, dispatch);
  }
};

export const registerProductAffiliateSellerFavorite = async (
  data: any,
  dispatch: any
) => {
  dispatch(updateProductAffiliateSellerStart());
  try {
    const res = await baseRequest.post(`/product-affiliate/favorite`, data);
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    errorHandler(err, dispatch);
  }
};

export const deleteProductAffiliateSellerFavorite = async (
  data: any,
  dispatch: any
) => {
  dispatch(updateProductAffiliateSellerStart());
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
