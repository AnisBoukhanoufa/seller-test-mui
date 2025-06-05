import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const feeSlice: any = createSlice({
  name: "fee",
  initialState: {
    fees: {},
    succeed: false,
    isFetching: false,
    error: false,
  },

  reducers: {
    feeStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    feeSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.fees = action.payload;
    },

    feeFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },

    setFeeStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    setFeeSuccess: (state: any, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.fees;
    },

    setFeeFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },

    updateFeeStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateFeeSuccess: (state: any, action) => {
      state.succeed = true;
      state.error = false;
      state.isFetching = false;
      state.fees[
        state.fees.findIndex((item: any) => item._id === action.payload.id)
      ] = action.payload.fees;
    },

    updateFeeFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteFeeStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    deleteFeeSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      // state.fees.splice(
      //   state.fees.findIndex((item: any) => item._id === action.payload.id),
      //   1
      // );
      state.fees = {};
    },

    deleteFeeFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
  },
});

export const {
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
} = feeSlice.actions;
export default feeSlice.reducer;
