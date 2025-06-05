import { errorHandler } from "state/api-calls.js";
import {
  feeStart,
  feeSuccess,
  feeFailed,
  setFeeStart,
  setFeeSuccess,
  setFeeFailed,
  updateFeeStart,
  updateFeeSuccess,
  updateFeeFailed,
  deleteFeeStart,
  deleteFeeSuccess,
  deleteFeeFailed,
} from "../fee-redux.js";
import { baseRequest } from "utils/request-methods.js";

export const getDefaultFee = async (dispatch: any) => {
  dispatch(feeStart());
  try {
    const res = await baseRequest.get("/fee");
    dispatch(feeSuccess(res.data));
  } catch (err) {
    dispatch(feeFailed());
    errorHandler(err, dispatch);
  }
};

export const getSellerFee = async (id: any, dispatch: any) => {
  dispatch(feeStart());
  try {
    const res = await baseRequest.get(`/fee?sellerId=${id}`);
    if (res.data.length === 0) {
      const response = await baseRequest.get("/fee");
      dispatch(feeSuccess(response.data));
      return;
    }
    dispatch(feeSuccess(res.data));
  } catch (err) {
    dispatch(feeFailed());
    errorHandler(err, dispatch);
  }
};

export const setFee = async (data: any, dispatch: any) => {
  dispatch(setFeeStart());
  try {
    const res = await baseRequest.post("/fee", data);
    dispatch(setFeeSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setFeeFailed());
    errorHandler(err, dispatch);
  }
};

export const deleteFee = async (id: any, dispatch: any) => {
  dispatch(deleteFeeStart());
  try {
    const res = await baseRequest.delete(`/fee/single/${id}`);
    dispatch(deleteFeeSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(deleteFeeFailed());
    errorHandler(err, dispatch);
  }
};

export const updateFee = async (id: string, data: any, dispatch: any) => {
  dispatch(updateFeeStart());
  try {
    const res = await baseRequest.put(`/fees/${id}`, data);
    dispatch(updateFeeSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateFeeFailed());
    errorHandler(err, dispatch);
  }
};
