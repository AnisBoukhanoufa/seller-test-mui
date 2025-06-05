import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state: any, action) => {
      const item = state.products.find(
        (item: any) => item._id === action.payload._id,
      );
      if (item) {
        item.quantity += action.payload.quantity;
        item.price += action.payload.price;
      } else {
        state.products.unshift(action.payload);
        state.price = state.products.reduce((total, product) => {
          return total + Number(product.price * product.quantity);
        }, 0);
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

      state.price = state.products.reduce((total, product) => {
        return total + Number(product.price * product.quantity);
      }, 0);
    },

    addOneProduct: (state: any, action) => {
      const item = state.products.find(
        (item: any) => item.id === action.payload.id,
      );
      if (item) {
        item.quantity += action.payload.quantity;
      }
      state.price = state.products.reduce((total, product) => {
        return total + Number(product.price * product.quantity);
      }, 0);
    },

    removeProduct: (state: any, action) => {
      state.products = state.products.filter(
        (item: any) => item._id !== action.payload._id,
      );
      state.price = state.products.reduce((total, product) => {
        return total + Number(product.price * product.quantity);
      }, 0);
    },

    removeProducts: (state: any) => {
      state.quantity = 0;
      state.products = [];
      state.price = 0;
      state.total = 0;
    },
  },
});

export const {
  addProduct,
  addOneProduct,
  editProduct,
  removeProduct,
  removeProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
