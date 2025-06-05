import { createSlice } from "@reduxjs/toolkit";
const orderToopDropSlice: any = createSlice({
  name: "orderToopDrop",
  initialState: {
    ordersToopDrop: { list: [] },
    statusCount: {},
    succeed: false,
    isFetching: false,
    error: false,
  },

  reducers: {
    singleOrderToopDropStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = true;
    },
    singleOrderToopDropSuccess: (state) => {
      state.succeed = true;
      state.isFetching = false;
      // state.singleOrderToopDrop = action.payload;
      state.error = true;
    },
    singleOrderToopDropFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
    orderToopDropStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = true;
    },
    orderToopDropStartStream: (state) => {
      // state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    orderToopDropSuccess: (state, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.ordersToopDrop = action.payload;
      state.error = true;
    },

    orderToopDropFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },

    setOrderToopDropStart: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    setOrderToopDropSuccess: (state: any, action: any) => {
      state.isFetching = false;
      state.ordersToopDrop.list.unshift(action.payload._doc);
      state.error = false;
    },

    setOrderToopDropFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateOrderToopDropStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateOrderToopDropSuccess: (state: any, action: any) => {
      state.succeed = true;

      state.error = false;
      state.ordersToopDrop.list[
        state.ordersToopDrop.list.findIndex(
          (item: any) => item._id === action.payload._doc._id
        )
      ] = action.payload._doc;
      state.isFetching = false;
    },

    updateOrderToopDropFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },

    deleteOrderToopDropStart: (state) => {
      state.isFetching = true;
    },

    deleteOrderToopDropSuccess: (state, action) => {
      // console.log(action.payload);
      state.isFetching = false;
      state.ordersToopDrop.list.splice(
        state.ordersToopDrop.list.findIndex(
          (item: any) => item._id === action.payload._id
        ),
        1
      );
    },

    deleteOrderToopDropFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  singleOrderToopDropStart,
  singleOrderToopDropSuccess,
  singleOrderToopDropFailed,
  orderToopDropStart,
  orderToopDropStartStream,
  orderToopDropSuccess,
  orderToopDropFailed,
  setOrderToopDropStart,
  setOrderToopDropSuccess,
  setOrderToopDropFailed,
  updateOrderToopDropStart,
  updateOrderToopDropSuccess,
  updateOrderToopDropFailed,
  deleteOrderToopDropStart,
  deleteOrderToopDropSuccess,
  deleteOrderToopDropFailed,
} = orderToopDropSlice.actions;
export default orderToopDropSlice.reducer;
