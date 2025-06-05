import { baseRequest } from "utils/request-methods.js";
import {
  invoiceStart,
  invoiceSuccess,
  invoiceFailed,
} from "../invoice-toop-drop-redux";
import { errorHandler } from "state/api-calls.js";

export const getInvoice = async (query: any, dispatch: any) => {
  dispatch(invoiceStart());
  try {
    const res = await baseRequest.get(
      `/order-toop-drop/invoice-pagination?${query}`
    );
    dispatch(invoiceSuccess(res.data));
    return res.data;
    return res.data;
  } catch (err) {
    dispatch(invoiceFailed());
    errorHandler(err, dispatch);
  }
};
