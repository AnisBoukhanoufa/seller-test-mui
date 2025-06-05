import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    language: "en",
  },
  reducers: {
    updateSettingsLanguage: (state: any, action) => {
      state.language = action.payload;
    },
  },
});

export const { updateSettingsLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
