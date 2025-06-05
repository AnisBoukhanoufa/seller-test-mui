import { createSlice } from "@reduxjs/toolkit";

const warehouseCardSlice = createSlice({
  name: "warehouseCard",
  initialState: {
    warehouses: [
      {
        id: String,
        warehouse: String,
        quantity: Number,
        name: String,
        country: Number,
      },
    ],
    quantity: 0,
  },
  reducers: {
    addWarehouse: (state: any, action: any) => {
      console.log(action.payload);
      const item = state.warehouses.find(
        (item: any) => item._id === action.payload._id,
      );
      console.log(item);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.warehouses.push(action.payload);
        state.quantity += action.payload.quantity;
        console.log(state);
      }
    },

    editWarehouse: (state: any, action) => {
      let item = state.warehouses.find(
        (item: any) => item.id === action.payload.id,
      );
      //item = action.payload;
      item.name = action.payload.name;
      item.quantity += action.payload.quantity;

      console.log(action.payload);
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
        (item: any) => item._id !== action.payload,
      );
      state.quantity -= 1;
    },

    removeWarehouses: (state: any) => {
      state.warehouses = [];
    },
  },
});

export const {
  addWarehouse,
  addOneWarehouse,
  editWarehouse,
  removeWarehouse,
  removeWarehouses,
} = warehouseCardSlice.actions;
export default warehouseCardSlice.reducer;
