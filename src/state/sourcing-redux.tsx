import { createSlice } from "@reduxjs/toolkit";

const sourcingSlice: any = createSlice({
  name: "sourcing",
  initialState: {
    sourcings: { list: [] },
    succeed: false,
    isFetching: false,
    error: false,
    page: 0,
    pageSize: 10,
  },
  reducers: {
    sourcingStart: (state) => {
      state.error = false;
      state.isFetching = true;
      state.succeed = false;
    },

    sourcingSuccess: (state, action) => {
      state.isFetching = false;
      state.sourcings = action.payload;
      state.succeed = true;
    },

    sourcingFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
    setPagination: (state: any, action: any) => {
      state.pageSize = action.payload.pageSize;
      state.page = action.payload.page;
    },
    setSourcingStart: (state) => {
      state.error = false;
      state.isFetching = true;
      state.succeed = false;
    },

    setSourcingSuccess: (state: any, action: any) => {
      state.error = false;
      state.isFetching = false;
      state.succeed = true;
      state.sourcings.list.unshift(action.payload._doc);
    },

    setSourcingFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },

    updateSourcingStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateSourcingSuccess: (state: any, action) => {
      state.succeed = true;
      state.error = false;
      state.isFetching = false;
      state.sourcings.list[
        state.sourcings.list.findIndex(
          (item: any) => item._id === action.payload._id,
        )
      ] = action.payload;
    },

    updateSourcingFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteSourcingStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    deleteSourcingSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.sourcings.splice(
        state.sourcings.findIndex(
          (item: any) => item._id === action.payload.id,
        ),
        1,
      );
    },

    deleteSourcingFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },
  },
});

export const {
  sourcingStart,
  sourcingSuccess,
  sourcingFailed,
  setPagination,
  setSourcingStart,
  setSourcingSuccess,
  setSourcingFailed,
  updateSourcingStart,
  updateSourcingSuccess,
  updateSourcingFailed,
  deleteSourcingStart,
  deleteSourcingSuccess,
  deleteSourcingFailed,
} = sourcingSlice.actions;
export default sourcingSlice.reducer;
