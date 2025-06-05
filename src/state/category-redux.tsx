import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const categorySlice: any = createSlice({
  name: "category",
  initialState: {
    categories: [],
    succeed: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    categoryStart: (state) => {
      state.isFetching = true;
    },

    categorySuccess: (state, action) => {
      state.isFetching = false;
      state.categories = action.payload;
    },

    categoryFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    setCategoryStart: (state) => {
      state.isFetching = true;
    },

    setCategorySuccess: (state: any, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.categories.push(action.payload);
    },

    setCategoryFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateCategorySuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.categories[
        state.categories.findIndex(
          (item: any) => item._id === action.payload.id,
        )
      ] = action.payload.categories;
    },

    updateCategoryFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteCategoryStart: (state) => {
      state.isFetching = true;
    },

    deleteCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categories.splice(
        state.categories.findIndex(
          (item: any) => item._id === action.payload.id,
        ),
        1,
      );
    },

    deleteCategoryFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  categoryStart,
  categorySuccess,
  categoryFailed,
  setCategoryStart,
  setCategorySuccess,
  setCategoryFailed,
  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailed,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailed,
} = categorySlice.actions;
export default categorySlice.reducer;
