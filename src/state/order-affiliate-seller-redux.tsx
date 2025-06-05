import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
const orderAffiliateSellerSlice: any = createSlice({
  name: "orderAffiliateSeller",
  initialState: {
    orderAffiliateSellers: { list: [] },
    succeed: false,
    isFetching: false,
    error: false,
  },

  reducers: {
    singleOrderAffiliateSellerStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = true;
    },
    singleOrderAffiliateSellerSuccess: (state) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = true;
    },
    singleOrderAffiliateSellerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
    orderAffiliateSellerStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = true;
    },
    orderAffiliateSellerSuccess: (state, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.orderAffiliateSellers = action.payload;
      state.error = true;
    },
    orderAffiliateSellerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
    setOrderAffiliateSellerStart: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    setOrderAffiliateSellerSuccess: (state: any, action: any) => {
      state.isFetching = false;
      state.orderAffiliateSellers.list.unshift(action.payload._doc);
      state.error = false;
    },
    setOrderAffiliateSellerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateOrderAffiliateSellerStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },
    updateOrderAffiliateSellerSuccess: (state: any, action: any) => {
      state.succeed = true;
      state.error = false;
      state.orderAffiliateSellers.list[
        state.orderAffiliateSellers.list.findIndex(
          (item: any) => item._id === action.payload._doc._id,
        )
      ] = action.payload._doc;
      state.isFetching = false;
    },
    updateOrderAffiliateSellerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
  },
});

export const {
  singleOrderAffiliateSellerStart,
  singleOrderAffiliateSellerSuccess,
  singleOrderAffiliateSellerFailed,
  orderAffiliateSellerStart,
  orderAffiliateSellerStartStream,
  orderAffiliateSellerSuccess,
  orderAffiliateSellerFailed,
  setOrderAffiliateSellerStart,
  setOrderAffiliateSellerSuccess,
  setOrderAffiliateSellerFailed,
  updateOrderAffiliateSellerStart,
  updateOrderAffiliateSellerSuccess,
  updateOrderAffiliateSellerFailed,
} = orderAffiliateSellerSlice.actions;
export default orderAffiliateSellerSlice.reducer;
