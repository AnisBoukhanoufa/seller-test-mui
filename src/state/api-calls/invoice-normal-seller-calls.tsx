import { baseRequest } from "utils/request-methods.js";
import {
  invoiceStart,
  invoiceSuccess,
  invoiceFailed,
} from "../invoice-normal-seller-redux.js";
import { errorHandler } from "state/api-calls.js";

export const getInvoice = async (query: any, dispatch: any) => {
  dispatch(invoiceStart());
  try {
    const res = await baseRequest.get(
      `/order-seller/invoice-pagination?${query}`
    );
    dispatch(invoiceSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(invoiceFailed());
    errorHandler(err, dispatch);
  }
};
