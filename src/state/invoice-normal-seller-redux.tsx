import { createSlice } from "@reduxjs/toolkit";
const invoiceSlice: any = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
    succeed: false,
    isFetching: false,
    error: false,
  },

  reducers: {
    invoiceStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    invoiceSuccess: (state, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.invoices = action.payload;
    },

    invoiceFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
  },
});

export const { invoiceStart, invoiceSuccess, invoiceFailed } =
  invoiceSlice.actions;
export default invoiceSlice.reducer;
