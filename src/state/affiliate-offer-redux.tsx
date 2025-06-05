import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
  name: "affiliateOffer",
  initialState: {
    offers: [],
    number: 0,
  },
  reducers: {
    addOffer: (state: any, action) => {
      const item = state.offers.find(
        (item: any) => item._id === action.payload._id,
      );
      console.log(item);
      if (item) {
        item.number += action.payload.number;
      } else {
        state.offers.push(action.payload);
        console.log(action.payload);
        state.number++;
      }
    },

    addOneOffer: (state: any, action) => {
      const item = state.offers.find(
        (item: any) => item.id === action.payload.id,
      );
      if (item) {
        item.number += action.payload.number;
      }
    },

    removeOffer: (state: any, action) => {
      state.offers = state.offers.filter(
        (item: any) => item.id !== action.payload,
      );
      state.number -= 1;
    },

    removeOffers: (state: any) => {
      state.offers = [];
      state.number = 0;
    },
  },
});

export const { addOffer, addOneOffer, removeOffer, removeOffers } =
  offerSlice.actions;
export default offerSlice.reducer;
