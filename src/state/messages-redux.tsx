import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const messageSlice: any = createSlice({
  name: "message",
  initialState: {
    messages: [],
    succeed: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    messageStart: (state) => {
      state.isFetching = true;
    },

    messageSuccess: (state, action) => {
      state.isFetching = false;
      state.messages = action.payload;
    },

    messageFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    setMessageStart: (state) => {
      state.isFetching = true;
    },

    setMessageSuccess: (state: any, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.messages.push(action.payload);
    },

    setMessageFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateMessageStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateMessageSuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.messages[
        state.categories.findIndex(
          (item: any) => item._id === action.payload.id,
        )
      ] = action.payload.categories;
    },

    updateMessageFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteMessageStart: (state) => {
      state.isFetching = true;
    },

    deleteMessageSuccess: (state, action) => {
      state.isFetching = false;
      state.messages.splice(
        state.messages.findIndex((item: any) => item._id === action.payload.id),
        1,
      );
    },

    deleteMessageFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  messagesStart,
  messagesSuccess,
  messagesFailed,
  setCategoryStart,
  setCategorySuccess,
  setCategoryFailed,
  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailed,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailed,
} = messageSlice.actions;
export default messageSlice.reducer;
