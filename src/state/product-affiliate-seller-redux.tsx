import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EnumDisplayMode } from "statics/enums";
const productAffiliateSellerSlice: any = createSlice({
  name: "orderAffiliateSeller",
  initialState: {
    productsAffiliateSeller: { list: [] },
    succeed: false,
    isFetching: false,
    error: false,
    displayMode: EnumDisplayMode.cards,
    showFavorite: true,
  },

  reducers: {
    changeDisplayMode: (state, action) => {
      state.displayMode = action.payload;
    },
    productAffiliateSellerStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
    },

    productAffiliateSellerSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.productsAffiliateSeller = action.payload;
    },

    productAffiliateSellerFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },

    setProductAffiliateSellerStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    setProductAffiliateSellerSuccess: (
      state: any,
      action: PayloadAction<string>
    ) => {
      state.error = false;
      state.succeed = true;
      state.isFetching = false;
      state.productsAffiliateSeller.list.unshift(action.payload);
    },

    setProductAffiliateSellerFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },

    updateProductAffiliateSellerStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateProductAffiliateSellerSuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = false;
      state.productsAffiliateSeller[
        state.productsAffiliateSeller.findIndex(
          (item: any) => item._id === action.payload._doc._id
        )
      ] = action.payload._doc;
    },

    updateProductAffiliateSellerFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    updateStatusProductAffiliateSellerStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateStatusProductAffiliateSellerSuccess: (state: any, action: any) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = false;
      state.productsAffiliateSeller.list[
        state.productsAffiliateSeller.list.findIndex(
          (item: any) => item._id === action.payload._id
        )
      ] = action.payload;
    },

    updateStatusProductAffiliateSellerFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteProductAffiliateSellerStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    deleteProductAffiliateSellerSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.productsAffiliateSeller.splice(
        state.productsAffiliateSeller.findIndex(
          (item: any) => item._id === action.payload.id
        ),
        1
      );
    },

    deleteProductAffiliateSellerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },

    updateProductAffiliateSellerShowFavorite: (state, action) => {
      state.showFavorite = action.payload;
    },
  },
});

export const {
  changeDisplayMode,
  productAffiliateSellerStart,
  productAffiliateSellerSuccess,
  productAffiliateSellerFailed,
  setProductAffiliateSellerStart,
  setProductAffiliateSellerSuccess,
  setProductAffiliateSellerFailed,
  updateProductAffiliateSellerStart,
  updateProductAffiliateSellerSuccess,
  updateProductAffiliateSellerFailed,
  updateStatusProductAffiliateSellerStart,
  updateStatusProductAffiliateSellerSuccess,
  updateStatusProductAffiliateSellerFailed,
  deleteProductAffiliateSellerStart,
  deleteProductAffiliateSellerSuccess,
  deleteProductAffiliateSellerFailed,
  updateProductAffiliateSellerShowFavorite,
} = productAffiliateSellerSlice.actions;
export default productAffiliateSellerSlice.reducer;
