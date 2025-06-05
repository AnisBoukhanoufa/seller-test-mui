import { createSlice } from "@reduxjs/toolkit";

const taskSlice: any = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getTaskStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getTaskSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.tasks = action.payload;
    },
    getTaskFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateTaskStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateTaskSuccess: (state: any, action) => {
      state.isFetching = false;
      state.error = false;
      const index = state.tasks.findIndex(
        (item: any) => item._id === action.payload._doc._id,
      );
      if (index != -1) {
        state.tasks[index] = action.payload._doc;
      } else {
        state.tasks.splice(0, 0, action.payload._doc);
      }
    },
    updateTaskFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  updateTaskStart,
  updateTaskSuccess,
  updateTaskFailed,
  getTaskStart,
  getTaskSuccess,
  getTaskFailed,
} = taskSlice.actions;

export default taskSlice.reducer;
