import { createSlice } from "@reduxjs/toolkit";

const affiliateProductWarehouseSlice = createSlice({
  name: "affiliateProductWarehouse",
  initialState: {
    warehouses: [],
    quantity: 0,
    infoWarehouses: {},
  },
  reducers: {
    addWarehouse: (state: any, action) => {
      const item = state.warehouses.find(
        (item: any) => item.id === action.payload.id,
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.warehouses.push(action.payload);
        state.quantity += action.payload.quantity;
        state.name = action.payload.name;
        console.log(state);
      }
    },

    addOneWarehouse: (state: any, action) => {
      const item = state.warehouses.find(
        (item: any) => item.id === action.payload.id,
      );
      if (item) {
        item.quantity += Number(action.payload.quantity);
      }
    },

    removeWarehouse: (state: any, action) => {
      state.warehouses = state.warehouses.filter(
        (item: any) => item.id !== action.payload,
      );
      state.quantity -= 1;
    },

    removeWarehouses: (state: any) => {
      state.warehouse = [];
    },
  },
});

export const {
  addWarehouse,
  addOneWarehouse,
  removeWarehouse,
  removeWarehouses,
} = affiliateProductWarehouseSlice.actions;
export default affiliateProductWarehouseSlice.reducer;
