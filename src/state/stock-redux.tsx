import { createSlice } from "@reduxjs/toolkit";

const stockSlice: any = createSlice({
  name: "stock",
  initialState: {
    stocks: { list: [] },
    succeed: false,
    isFetching: false,
    error: false,
    page: 0,
    pageSize: 10,
  },
  reducers: {
    stockStart: (state) => {
      state.error = false;
      state.isFetching = true;
    },

    stockSuccess: (state, action) => {
      state.isFetching = false;
      state.stocks = action.payload;
    },

    stockFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    setStockStart: (state) => {
      state.isFetching = true;
    },

    setStockSuccess: (state: any, action: any) => {
      state.isFetching = false;
      state.stocks.list.unshift(action.payload._doc);
    },

    setStockFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateStockStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateStockSuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.stocks.list[
        state.stocks.list.findIndex(
          (item: any) => item._id === action.payload._id,
        )
      ] = action.payload;
    },

    updateStockFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteStockStart: (state) => {
      state.isFetching = true;
    },

    deleteStockSuccess: (state, action) => {
      state.isFetching = false;
      state.stocks.splice(
        state.stocks.findIndex((item: any) => item._id === action.payload.id),
        1,
      );
    },

    deleteStockFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  stockStart,
  stockSuccess,
  stockFailed,
  setPagination,
  setStockStart,
  setStockSuccess,
  setStockFailed,
  updateStockStart,
  updateStockSuccess,
  updateStockFailed,
  deleteStockStart,
  deleteStockSuccess,
  deleteStockFailed,
} = stockSlice.actions;
export default stockSlice.reducer;
