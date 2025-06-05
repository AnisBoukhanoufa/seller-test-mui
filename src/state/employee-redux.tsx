import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const employeeSlice: any = createSlice({
  name: "employee",
  initialState: {
    currentEmployee: null,
    employees: {
      list: [],
      roleCount: {},
      statusCount: {},
      presentCount: 0,
      onlineCount: 0,
    },
    online: {},
    succeed: false,
    isFetching: false,
    error: false,
    page: 0,
    pageSize: 10,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.currentEmployee = { ...state.currentEmployee, ...action.payload };
    },
    employeePresence: (state, action) => {
      state.currentEmployee.isPresent = !state.currentEmployee.isPresent;
    },
    employeesOnlineStatus: (state, action) => {
      state.online = action.payload;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },

    logoutSuccess: (state: any) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
      state.currentEmployee = null;
    },

    employeeStart: (state) => {
      state.isFetching = true;
      state.succeed = false;
    },

    employeeSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.employees = action.payload;
    },

    employeeFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },
    setPagination: (state: any, action: any) => {
      state.pageSize = action.payload.pageSize;
      state.page = action.payload.page;
    },

    setEmployeeStart: (state) => {
      state.succeed = false;
      state.isFetching = true;
    },
    setEmployeeSuccess: (state: any, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.succeed = true;
      state.error = false;
      state.employees.list.unshift(action.payload._doc);
    },

    setEmployeeFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.succeed = false;
    },

    updateEmployeeStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    updateEmployeeSuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.employees.list[
        state.employees.list.findIndex(
          (item: any) => item._id === action.payload._id,
        )
      ] = action.payload;
    },

    updateEmployeeFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },

    deleteEmployeeStart: (state) => {
      state.isFetching = true;
    },

    deleteEmployeeSuccess: (state, action) => {
      state.isFetching = false;
      state.succeed = true;
      state.employees.list.splice(
        state.employees.list.findIndex(
          (item: any) => item._id === action.payload._id,
        ),
        1,
      );
    },

    deleteEmployeeFailed: (state) => {
      state.isFetching = false;
      state.succeed = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  employeePresence,
  loginFailed,
  employeesOnlineStatus,
  logoutSuccess,
  employeeStart,
  employeeSuccess,
  employeeFailed,
  setPagination,
  setEmployeeStart,
  setEmployeeSuccess,
  setEmployeeFailed,
  updateEmployeeStart,
  updateEmployeeSuccess,
  updateEmployeeFailed,
  deleteEmployeeStart,
  deleteEmployeeSuccess,
  deleteEmployeeFailed,
} = employeeSlice.actions;
export default employeeSlice.reducer;
