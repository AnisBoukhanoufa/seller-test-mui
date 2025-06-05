import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EnumDisplayMode } from "statics/enums";
const productToopDropSlice: any = createSlice({
  name: "productToopDrop",
  initialState: {
    productsToopDrop: { list: [] },
    succeed: false,
    isFetching: false,
    error: false,
    displayMode: EnumDisplayMode.cards,
  },

  reducers: {
    productToopDropStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
    },

    productToopDropSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.productsToopDrop = action.payload;
    },

    productToopDropFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },

    setProductToopDropStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    setProductToopDropSuccess: (
      state: any,
      action: PayloadAction<string>,
    ) => {
      state.error = false;
      state.succeed = true;
      state.isFetching = false;
      state.productsToopDrop.list.unshift(action.payload);
    },

    setProductToopDropFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },

    updateProductToopDropStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateProductToopDropSuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = false;
      state.productsToopDrop[
        state.productsToopDrop.findIndex(
          (item: any) => item._id === action.payload._doc._id,
        )
      ] = action.payload._doc;
    },

    updateProductToopDropFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    updateStatusProductToopDropStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateStatusProductToopDropSuccess: (state: any, action: any) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = false;
      state.productsToopDrop.list[
        state.productsToopDrop.list.findIndex(
          (item: any) => item._id === action.payload._id,
        )
      ] = action.payload;
    },

    updateStatusProductToopDropFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteProductToopDropStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    deleteProductToopDropSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.productsToopDrop.splice(
        state.productsToopDrop.findIndex(
          (item: any) => item._id === action.payload.id,
        ),
        1,
      );
    },

    deleteProductToopDropFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
  },
});

export const {
  productToopDropStart,
  productToopDropSuccess,
  productToopDropFailed,
  setProductToopDropStart,
  setProductToopDropSuccess,
  setProductToopDropFailed,
  updateProductToopDropStart,
  updateProductToopDropSuccess,
  updateProductToopDropFailed,
  updateStatusProductToopDropStart,
  updateStatusProductToopDropSuccess,
  updateStatusProductToopDropFailed,
  deleteProductToopDropStart,
  deleteProductToopDropSuccess,
  deleteProductToopDropFailed,
} = productToopDropSlice.actions;
export default productToopDropSlice.reducer;
