import { createSlice } from "@reduxjs/toolkit";

const paymentSlice: any = createSlice({
  name: "category",
  initialState: {
    payments: { list: [] },
    succeed: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    paymentStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    paymentSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.payments = action.payload;
    },

    paymentFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },

    setPaymentStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    setPaymentSuccess: (state: any, action: any) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.payments.list.unshift(action.payload._doc);
    },

    setPaymentFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },

    updatePaymentStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updatePaymentSuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = false;
      state.payments.list[
        state.payments.list.findIndex(
          (item: any) => item._id === action.payload._doc._id,
        )
      ] = action.payload._doc;
    },

    updatePaymentFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deletePaymentStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    deletePaymentSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.payments.list.splice(
        state.payments.list.findIndex(
          (item: any) => item._id === action.payload.id,
        ),
        1,
      );
    },

    deletePaymentFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  paymentStart,
  paymentSuccess,
  paymentFailed,
  setPaymentStart,
  setPaymentSuccess,
  setPaymentFailed,
  updatePaymentStart,
  updatePaymentSuccess,
  updatePaymentFailed,
  deletePaymentStart,
  deletePaymentSuccess,
  deletePaymentFailed,
} = paymentSlice.actions;
export default paymentSlice.reducer;
