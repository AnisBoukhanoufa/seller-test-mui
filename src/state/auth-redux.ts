import { createSlice } from "@reduxjs/toolkit";
const sellerSlice: any = createSlice({
  name: "auth",
  initialState: {
    currentSeller: null,
    succeed: false,
    isFetching: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    loginInit: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = false;
    },
    registerInit: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = false;
    },
    registerStart: (state) => {
      state.succeed = false;
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = false;
    },
    registerFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },
    loginStart: (state) => {
      state.succeed = false;
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.succeed = true;
      state.currentSeller = action.payload;
    },
    loginFailed: (state, action) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentSeller = null;
    },
    sellerStart: (state) => {
      state.isFetching = true;
    },

    sellerAcceptTermsStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    sellerAcceptTermsSuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.currentUser.details = action.payload;
    },

    sellerAcceptTermsFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginInit,
  registerInit,
  registerStart,
  registerSuccess,
  registerFailed,
  loginStart,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  sellerStart,
  sellerSuccess,
  sellerFailed,
  setSellerStart,
  setSellerSuccess,
  setSellerFailed,
  sellerAcceptTermsStart,
  sellerAcceptTermsSuccess,
  sellerAcceptTermsFailed,
} = sellerSlice.actions;
export default sellerSlice.reducer;
