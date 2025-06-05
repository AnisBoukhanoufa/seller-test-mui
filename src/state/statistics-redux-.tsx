import { createSlice } from "@reduxjs/toolkit";

const statisticSlice: any = createSlice({
  name: "statistic",
  initialState: {
    statistics: {
      statusCount: {},
      ratesCount: [
        { name: "wrong", value: 0, last30days: 0 },
        { name: "confirmed", value: 0, last30days: 0 },
        { name: "delivered", value: 0, last30days: 0 },
        { name: "upsell", value: 0, last30days: 0 },
      ],
    },
    succeed: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    statisticStart: (state) => {
      state.error = false;
      state.isFetching = true;
      state.succeed = false;
    },
    statisticSuccess: (state, action) => {
      state.isFetching = false;
      state.statistics = { ...state.statistics, ...action.payload };
      state.succeed = true;
    },
    statisticFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },
    updateStatisticType: (state, action) => {
      state.isFetching = false;
      state.statistics.type = action.payload.type;
      state.succeed = true;
    },
    updateStatisticStatusCount: (state, action) => {
      state.isFetching = false;
      state.statistics.statusCount = action.payload;
      state.succeed = true;
    },
    updateStatisticPayment: (state, action) => {
      state.isFetching = false;
      state.statistics.payment = action.payload.payment;
      state.succeed = true;
    },
    updateStatisticWillsReceived: (state, action) => {
      state.isFetching = false;
      state.statistics.wills = action.payload.wills;
      state.statistics.received = action.payload.received;
      state.succeed = true;
    },
    updateStatisticBalance: (state, action) => {
      state.isFetching = false;
      state.statistics.balance = action.payload;
      state.succeed = true;
    },
    updateStatisticRates: (state, action) => {
      state.isFetching = false;
      state.statistics.ratesCount = state.statistics.ratesCount.map((ele) => ({
        ...ele,
        value: action.payload[ele.name],
      }));
      state.succeed = true;
    },
    updateStatisticLast30Rates: (state, action) => {
      state.isFetching = false;
      state.statistics.ratesCount = state.statistics.ratesCount.map((ele) => ({
        ...ele,
        last30days: action.payload[ele.name],
      }));
      state.succeed = true;
    },
  },
});

export const {
  statisticStart,
  statisticSuccess,
  statisticFailed,
  updateStatisticBalance,
  updateStatisticType,
  updateStatisticStatusCount,
  updateStatisticPayment,
  updateStatisticWillsReceived,
  updateStatisticRates,
  updateStatisticLast30Rates,
} = statisticSlice.actions;
export default statisticSlice.reducer;
