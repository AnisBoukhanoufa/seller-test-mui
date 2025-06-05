import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const warehouseSlice: any = createSlice({
  name: "warehouse",
  initialState: {
    warehouses: { list: [] },
    succeed: false,
    isFetching: false,
    error: false,
  },

  reducers: {
    warehouseStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    warehouseSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.warehouses = action.payload;
    },

    warehouseFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },

    setWarehouseStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    setWarehouseSuccess: (state: any, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.warehouses.list.unshift(action.payload._doc);
    },

    setWarehouseFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },

    updateWarehouseStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateWarehouseSuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = false;
      state.warehouses.list[
        state.warehouses.list.findIndex(
          (item: any) => item._id === action.payload._doc._id,
        )
      ] = action.payload._doc;
    },

    updateWarehouseFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteWarehouseStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },

    deleteWarehouseSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.warehouses.list.splice(
        state.warehouses.list.findIndex(
          (item: any) => item._id === action.payload.id,
        ),
        1,
      );
    },

    deleteWarehouseFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },
  },
});

export const {
  warehouseStart,
  warehouseSuccess,
  warehouseFailed,
  setWarehouseStart,
  setWarehouseSuccess,
  setWarehouseFailed,
  updateWarehouseStart,
  updateWarehouseSuccess,
  updateWarehouseFailed,
  deleteWarehouseStart,
  deleteWarehouseSuccess,
  deleteWarehouseFailed,
} = warehouseSlice.actions;
export default warehouseSlice.reducer;
