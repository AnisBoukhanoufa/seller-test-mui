import { createSlice } from "@reduxjs/toolkit";

const currencySlice: any = createSlice({
  name: "currency",
  initialState: {
    currencies: { list: [] },
    succeed: false,
    isFetching: false,
    error: false,
  },

  reducers: {
    currencyStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    currencySuccess: (state, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = false;
      state.currencies = action.payload;
    },

    currencyFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    setCurrencyStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    setCurrencySuccess: (state: any, action: any) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.currencies.push(action.payload._doc);
    },

    setCurrencyFailed: (state) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = true;
    },

    updateCurrencyStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateCurrencySuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = false;
      state.currencies[
        state.currencies.findIndex(
          (item: any) => item._id === action.payload._doc._id,
        )
      ] = action.payload._doc;
    },

    updateCurrencyFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteCurrencyStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    deleteCurrencySuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.currencies.list.splice(
        state.currencies.list.findIndex(
          (item: any) => item._id === action.payload.id,
        ),
        1,
      );
    },

    deleteCurrencyFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
  },
});

export const {
  currencyStart,
  currencySuccess,
  currencyFailed,
  setCurrencyStart,
  setCurrencySuccess,
  setCurrencyFailed,
  updateCurrencyStart,
  updateCurrencySuccess,
  updateCurrencyFailed,
  deleteCurrencyStart,
  deleteCurrencySuccess,
  deleteCurrencyFailed,
} = currencySlice.actions;
export default currencySlice.reducer;
