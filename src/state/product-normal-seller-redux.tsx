import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EnumDisplayMode } from "statics/enums";
const productNormalSellerSlice: any = createSlice({
  name: "orderNormalSeller",
  initialState: {
    productNormalSellers: { list: [] },
    succeed: false,
    isFetching: false,
    error: false,
    displayMode: EnumDisplayMode.table,
  },

  reducers: {
    changeDisplayMode: (state, action) => {
      state.displayMode = action.payload;
    },
    productNormalSellerStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
    },

    productNormalSellerSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.productNormalSellers = action.payload;
    },

    productNormalSellerFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },

    setProductNormalSellerStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    setProductNormalSellerSuccess: (
      state: any,
      action: PayloadAction<string>,
    ) => {
      state.error = false;
      state.succeed = true;
      state.isFetching = false;
      state.productNormalSellers.list.unshift(action.payload);
    },

    setProductNormalSellerFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },

    updateProductNormalSellerStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateProductNormalSellerSuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = false;
     
    },

    updateProductNormalSellerFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    updateStatusProductNormalSellerStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateStatusProductNormalSellerSuccess: (state: any, action: any) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = false;
      state.productNormalSellers.list[
        state.productNormalSellers.list.findIndex(
          (item: any) => item._id === action.payload._id,
        )
      ] = action.payload;
    },

    updateStatusProductNormalSellerFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteProductNormalSellerStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    deleteProductNormalSellerSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.productNormalSellers.list.splice(
        state.productNormalSellers.list.findIndex(
          (item: any) => item._id === action.payload.id,
        ),
        1,
      );
    },

    deleteProductNormalSellerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
  },
});

export const {
  changeDisplayMode,
  productNormalSellerStart,
  productNormalSellerSuccess,
  productNormalSellerFailed,
  setProductNormalSellerStart,
  setProductNormalSellerSuccess,
  setProductNormalSellerFailed,
  updateProductNormalSellerStart,
  updateProductNormalSellerSuccess,
  updateProductNormalSellerFailed,
  updateStatusProductNormalSellerStart,
  updateStatusProductNormalSellerSuccess,
  updateStatusProductNormalSellerFailed,
  deleteProductNormalSellerStart,
  deleteProductNormalSellerSuccess,
  deleteProductNormalSellerFailed,
} = productNormalSellerSlice.actions;
export default productNormalSellerSlice.reducer;
