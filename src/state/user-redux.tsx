import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const userSlice: any = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    users: [],
    succeed: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.succeed = false;
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.succeed = true;
      state.currentUser = action.payload;
    },
    loginFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
    },

    userStart: (state) => {
      state.succeed = false;
      state.error = false;
      state.isFetching = true;
    },

    userSuccess: (state, action) => {
      state.error = false;
      state.succeed = true;
      state.isFetching = false;
      state.users = action.payload;
    },

    userFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    setUserStart: (state) => {
      state.isFetching = true;
    },

    setUserSuccess: (state: any, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.users.push(action.payload);
    },

    setUserFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateUserSuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.users[
        state.users.findIndex((item: any) => item._id === action.payload._id)
      ] = action.payload.product;
    },

    updateUserFailed: (state: any) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteUserStart: (state) => {
      state.isFetching = true;
    },

    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((item: any) => item._id === action.payload.id),
        1,
      );
    },

    deleteUserFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  userStart,
  userSuccess,
  userFailed,
  setUserStart,
  setUserSuccess,
  setUserFailed,
  updateUserStart,
  updateUserSuccess,
  updateUserFailed,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailed,
} = userSlice.actions;
export default userSlice.reducer;
