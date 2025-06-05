import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const requestedProductSlice = createSlice({
  name: "requestedProduct",
  initialState: {
    requestedProducts: [],
    succeed: false,
    isFetching: false,
    error: false,
  },

  reducers: {
    requestedProductStart: (state) => {
      state.isFetching = true;
    },

    requestedProductSuccess: (state, action) => {
      state.isFetching = false;
      state.requestedProducts = action.payload;
    },

    requestedProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    setRequestedProductStart: (state) => {
      state.isFetching = true;
    },

    setRequestedProductSuccess: (state: any, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.requestedProducts.push(action.payload);
    },

    setRequestedProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateRequestedProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateRequestedProductSuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.requestedProducts[
        state.requestedProducts.findIndex(
          (item: any) => item._id === action.payload.id,
        )
      ] = action.payload.requestedProducts;
    },

    updateRequestedProductFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteRequestedProductStart: (state) => {
      state.isFetching = true;
    },

    deleteRequestedProductSuccess: (state, action) => {
      state.isFetching = false;
      state.requestedProducts.splice(
        state.requestedProducts.findIndex(
          (item: any) => item._id === action.payload.id,
        ),
        1,
      );
    },

    deleteRequestedProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  requestedProductStart,
  requestedProductSuccess,
  requestedProductFailed,
  setRequestedProductStart,
  setRequestedProductSuccess,
  setRequestedProductFailed,
  updateRequestedProductStart,
  updateRequestedProductSuccess,
  updateRequestedProductFailed,
  deleteRequestedProductStart,
  deleteRequestedProductSuccess,
  deleteRequestedProductFailed,
} = requestedProductSlice.actions;
export default requestedProductSlice.reducer;
