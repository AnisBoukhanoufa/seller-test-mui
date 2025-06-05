import { createSlice } from "@reduxjs/toolkit";

const productNormalSellerCardSlice = createSlice({
  name: "productNormalSellerCard",
  initialState: {
    subProducts: [],
    number: 0,
  },
  reducers: {
    addSubProduct: (state: any, action) => {
      console.log(action.payload);
      const item = state.subProducts.find(
        (item: any) => item._id === action.payload._id,
      );
      console.log(item);
      if (item) {
        item.number += action.payload.number;
      } else {
        state.subProducts.push(action.payload);
        console.log(action.payload.product);
        state.number++;
      }
    },

    editSubProduct: (state: any, action) => {
      console.log(action.payload);
      let item = state.subProducts.find(
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
    },

    addOneSubProduct: (state: any, action) => {
      const item = state.subProducts.find(
        (item: any) => item.id === action.payload.id,
      );
      if (item) {
        item.number += action.payload.number;
      }
    },

    removeSubProduct: (state: any, action) => {
      state.subProducts = state.subProducts.filter(
        (item: any) => item.id !== action.payload,
      );
      state.number -= 1;
    },

    removeSubProducts: (state: any) => {
      state.subProducts = [];
      state.number = 0;
    },
  },
});

export const {
  addSubProduct,
  addOneSubProduct,
  editSubProduct,
  removeSubProduct,
  removeSubProducts,
} = productNormalSellerCardSlice.actions;
export default productNormalSellerCardSlice.reducer;
