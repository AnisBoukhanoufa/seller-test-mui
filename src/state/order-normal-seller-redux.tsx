import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
const orderNormalSellerSlice: any = createSlice({
  name: "orderNormalSeller",
  initialState: {
    orderNormalSellers: { list: [] },
    statusCount:{},
    succeed: false,
    isFetching: false,
    error: false,
  },

  reducers: {
    singleOrderNormalSellerStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = true;
    },
    singleOrderNormalSellerSuccess: (state) => {
      state.succeed = true;
      state.isFetching = false;
       state.error = true;
    },
    singleOrderNormalSellerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
    orderNormalSellerStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = true;
    },
    orderNormalSellerStartStream: (state) => {
      // state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    orderNormalSellerSuccess: (state, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.orderNormalSellers = action.payload;
      state.error = true;
    },

    orderNormalSellerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },

    setOrderNormalSellerStart: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    setOrderNormalSellerSuccess: (state: any, action: any) => {
      state.isFetching = false;
      state.orderNormalSellers.list.unshift(action.payload._doc);
      state.error = false;
    },

    setOrderNormalSellerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateOrderNormalSellerStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateOrderNormalSellerSuccess: (state: any, action: any) => {
      state.succeed = true;

      state.error = false;
      state.orderNormalSellers.list[
        state.orderNormalSellers.list.findIndex(
          (item: any) => item._id === action.payload._doc._id,
        )
      ] = action.payload._doc;
      state.isFetching = false;
    },

    updateOrderNormalSellerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
  },
});

export const {
  singleOrderNormalSellerStart,
  singleOrderNormalSellerSuccess,
  singleOrderNormalSellerFailed,
  orderNormalSellerStart,
  orderNormalSellerSuccess,
  orderNormalSellerFailed,
  setOrderNormalSellerStart,
  setOrderNormalSellerSuccess,
  setOrderNormalSellerFailed,
  updateOrderNormalSellerStart,
  updateOrderNormalSellerSuccess,
  updateOrderNormalSellerFailed,
} = orderNormalSellerSlice.actions;
export default orderNormalSellerSlice.reducer;
