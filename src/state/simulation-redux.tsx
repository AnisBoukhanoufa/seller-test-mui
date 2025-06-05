import { createSlice } from "@reduxjs/toolkit";
const simulationSlice: any = createSlice({
  name: "simulation",
  initialState: {
    seller: { _id: "" },
    simulation: { _id: "" },
    creatorId: "",
    updatedAt: "",
    inputs: {
      price: 0,
      leads: 0,
      confirmationRate: 0,
      deliveryRate: 0,
      upsellRate: 0,
      productCost: 0,
      adsCost: 0,
      extraExpenses: 0,
      confirmationFee: 0,
      upsellFee: 0,
      upsellProductCost: 0,
      upsellPrice: 0,
      deliveryFee: 0,
      returnFee: 0,
      vatFee: 0,
      codFee: 0,
    },
    succeed: false,
    isFetching: false,
    error: false,
  },

  reducers: {
    updateSimulationInputs: (state: any, action) => {
      state.inputs = { ...state.inputs, ...action.payload };
    },
    updateSimulationName: (state: any, action) => {
      state.simulation = { ...action.payload };
    },
    updateSimulationCreatorId: (state: any, action) => {
      state.creatorId = action.payload;
    },
    updateSimulationUpdatedAt: (state: any, action) => {
      state.updatedAt = action.payload;
    },
    // simulationStart: (state) => {
    //   state.isFetching = true;
    // },

    // simulationSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.inputs = action.payload;
    // },

    // simulationFailed: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },

    // setsimulationStart: (state) => {
    //   state.isFetching = true;
    // },

    // setSimulationSuccess: (state: any, action: PayloadAction<string>) => {
    //   state.isFetching = false;
    //   state.simulation;
    // },

    // setSimulationFailed: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },

    // updateSimulationStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    //   state.succeed = false;
    // },

    // updateSimulationFailed: (state) => {
    //   state.succeed = false;
    //   state.isFetching = false;
    //   state.error = true;
    // },

    // deleteSimulationStart: (state) => {
    //   state.isFetching = true;
    // },

    // deleteSimulationSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.inputs.splice(
    //     state.inputs.findIndex((item: any) => item._id === action.payload.id),
    //     1
    //   );
    // },

    // deleteSimulationFailed: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
  },
});

export const {
  updateSimulationInputs,
  updateSimulationName,
  updateSimulationCreatorId,
  updateSimulationUpdatedAt,
  //   simulationSuccess,
  //   simulationFailed,
  //   setSimulationStart,
  //   setSimulationSuccess,
  //   setSimulationFailed,
  //   updateSimulationStart,
  //   updateSimulationSuccess,
  //   updateSimulationFailed,
  //   deleteSimulationStart,
  //   deleteSimulationSuccess,
  //   deleteSimulationFailed,
} = simulationSlice.actions;
export default simulationSlice.reducer;
