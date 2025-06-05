import { errorHandler, successHandler } from "state/api-calls.js";
import {
  sourcingStart,
  sourcingSuccess,
  sourcingFailed,
  setSourcingStart,
  setSourcingSuccess,
  setSourcingFailed,
  updateSourcingStart,
  updateSourcingSuccess,
  updateSourcingFailed,
  deleteSourcingStart,
  deleteSourcingSuccess,
  deleteSourcingFailed,
} from "../sourcing-redux.js";
import { baseRequest } from "utils/request-methods.js";

export const getSourcing = async (query: any, dispatch: any) => {
  dispatch(sourcingStart());
  try {
    const res = await baseRequest.get(`/sourcing/pagination?${query}`);

    dispatch(sourcingSuccess(res.data));
  } catch (err) {
    dispatch(sourcingFailed());
    errorHandler(err, dispatch);
  }
};

export const setSourcing = async (data: any, dispatch: any) => {
  dispatch(setSourcingStart());
  try {
    const res = await baseRequest.post("/sourcing/", data);
    dispatch(setSourcingSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setSourcingFailed());
    errorHandler(err, dispatch);
  }
};

export const deleteSourcing = async (id: any, dispatch: any) => {
  dispatch(deleteSourcingStart());
  try {
    const res = await baseRequest.delete(`/sourcing/${id}`);
    dispatch(deleteSourcingSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(deleteSourcingFailed());
    errorHandler(err, dispatch);
  }
};

export const updateSourcing = async (id: string, data: any, dispatch: any) => {
  dispatch(updateSourcingStart());
  try {
    const res = await baseRequest.put(`/sourcing/single/${id}`, data);
    dispatch(updateSourcingSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateSourcingFailed());
    errorHandler(err, dispatch);
  }
};

export const updateSourcingProduct = async (
  sourcingId: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateSourcingStart());
  try {
    const res = await baseRequest.put(`/sourcing/product/${sourcingId}`, data);
    dispatch(updateSourcingSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateSourcingFailed());
    errorHandler(err, dispatch);
  }
};
export const updateSourcingStatus = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateSourcingStart());
  try {
    const res = await baseRequest.put(`/sourcing/status/${id}`, data);
    dispatch(updateSourcingSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateSourcingFailed());
    errorHandler(err, dispatch);
  }
};
export const updateSourcingProductStatus = async (
  sourcingId: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateSourcingStart());
  try {
    const res = await baseRequest.put(`/sourcing/status/${sourcingId}`, data);
    dispatch(updateSourcingSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateSourcingFailed());
    errorHandler(err, dispatch);
    return err;
  }
};
