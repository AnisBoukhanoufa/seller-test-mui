import { createSlice } from "@reduxjs/toolkit";
const storageSlice: any = createSlice({
  name: "storage",
  initialState: {
    files: [],
    succeed: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    storageStart: (state) => {
      state.isFetching = true;
    },

    storageSuccess: (state, action) => {
      state.isFetching = false;
      state.files = action.payload;
    },

    storageFailed: (state) => {
      state.isFetching = false
      state.succeed = false;
      state.error = true;
    },

    setStorageStart: (state) => {
      state.isFetching = true;
    },

    setStorageSuccess: (state: any) => {
      state.isFetching = false;
    },

    setStorageFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  storageStart,
  storageSuccess,
  storageFailed,
  setStorageStart,
  setStorageSuccess,
  setStorageFailed,
} = storageSlice.actions;
export default storageSlice.reducer;
