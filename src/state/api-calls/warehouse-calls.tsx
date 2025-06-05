import { errorHandler, successHandler } from "state/api-calls.js";
import {
  warehouseStart,
  warehouseSuccess,
  warehouseFailed,
  setWarehouseStart,
  setWarehouseSuccess,
  setWarehouseFailed,
  updateWarehouseStart,
  updateWarehouseSuccess,
  updateWarehouseFailed,
  deleteWarehouseStart,
  deleteWarehouseSuccess,
  deleteWarehouseFailed,
} from "../warehouses-redux.js";
import { baseRequest } from "utils/request-methods.js";

export const getWarehouses = async (filter: any, data: any, dispatch: any) => {
  dispatch(warehouseStart());
  try {
    const res = await baseRequest.get(
      `/warehouse/pagination?${filter}&page=${data.page + 1}&pageSize=${
        data.pageSize
      }`,
    );
    dispatch(warehouseSuccess(res.data));
  } catch (err) {
    dispatch(warehouseFailed());
    errorHandler(err, dispatch);
  }
};

export const getWarehouse = async (id: any, dispatch: any) => {
  dispatch(deleteWarehouseStart());
  try {
    const res = await baseRequest.get(`/warehouses/find/${id}`);
    dispatch(deleteWarehouseSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(deleteWarehouseFailed());
    errorHandler(err, dispatch);
  }
};

export const setWarehouse = async (data: any, dispatch: any) => {
  dispatch(setWarehouseStart());
  try {
    const res = await baseRequest.post("/warehouse", data);
    dispatch(setWarehouseSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setWarehouseFailed());
    errorHandler(err, dispatch);
  }
};

export const deleteWarehouse = async (id: any, dispatch: any) => {
  dispatch(deleteWarehouseStart());
  try {
    const res = await baseRequest.delete(`/warehouses/${id}`);
    dispatch(deleteWarehouseSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(deleteWarehouseFailed());
    errorHandler(err, dispatch);
  }
};

export const updateWarehouse = async (id: any, data: any, dispatch: any) => {
  dispatch(updateWarehouseStart());
  try {
    const res = await baseRequest.put(`/warehouse/${id}`, data);
    dispatch(updateWarehouseSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
    return res;
  } catch (err) {
    dispatch(updateWarehouseFailed());
    errorHandler(err, dispatch);
  }
};
