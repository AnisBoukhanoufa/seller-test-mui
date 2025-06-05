import { createSlice } from "@reduxjs/toolkit";

const productAffiliateSellerCardSlice = createSlice({
  name: "productAffiliateSellerCard",
  initialState: {
    offers: [],
    number: 0,
  },
  reducers: {
    addOffer: (state: any, action: any) => {
      console.log(action.payload);
      const item = state.offers.find(
        (item: any) => item.id === action.payload.id,
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

    editOffer: (state: any, action) => {
      console.log(action.payload);
      let item = state.offers.find(
        (item: any) => item.id === action.payload.id,
      );
      //item = action.payload;
      item.commission = action.payload.commission;
      item.quantity = action.payload.quantity;
      item.targetPrice = action.payload.targetPrice;
      item.warehouse = action.payload.warehouse;

      console.log(action.payload);
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

export const { addOffer, addOneOffer, editOffer, removeOffer, removeOffers } =
  productAffiliateSellerCardSlice.actions;
export default productAffiliateSellerCardSlice.reducer;
