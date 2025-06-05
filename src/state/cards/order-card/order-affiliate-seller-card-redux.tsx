import { createSlice } from "@reduxjs/toolkit";

const orderAffiliateSellerCardSlice = createSlice({
  name: "orderAffiliateSellerCard",
  initialState: {
    products: [],
    number: 0,
  },
  reducers: {
    addProduct: (state: any, action) => {
      const item = state.products.find(
        (item: any) => item._id === action.payload._id,
      );
      console.log(item);
      if (item) {
        item.number += action.payload.number;
      } else {
        state.products.push(action.payload);
        console.log(action.payload);
        state.number++;
      }
    },

    editProduct: (state: any, action) => {
      let item = state.products.find(
        (item: any) => item.id === action.payload.id,
      );
      //item = action.payload;
      item.name = action.payload.name;
      item.quantity = action.payload.quantity;
      item.numberOfCartons = action.payload.numberOfCartons;
      item.length = action.payload.length;
      item.width = action.payload.width;
      item.height = action.payload.height;
      item.weight = action.payload.weight;
      console.log(action.payload);
    },

    addOneProduct: (state: any, action) => {
      const item = state.products.find(
        (item: any) => item.id === action.payload.id,
      );
      if (item) {
        item.number += action.payload.number;
      }
    },

    removeProduct: (state: any, action) => {
      state.products = state.products.filter(
        (item: any) => item.id !== action.payload,
      );
      state.number -= 1;
    },

    removeProducts: (state: any) => {
      state.products = [];
      state.number = 0;
    },
  },
});

export const {
  addProduct,
  addOneProduct,
  editProduct,
  removeProduct,
  removeProducts,
} = orderAffiliateSellerCardSlice.actions;
export default orderAffiliateSellerCardSlice.reducer;
