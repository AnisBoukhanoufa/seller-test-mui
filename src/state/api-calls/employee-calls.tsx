import { errorHandler, successHandler } from "state/api-calls.js";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  employeeStart,
  employeeSuccess,
  employeeFailed,
  setEmployeeStart,
  setEmployeeSuccess,
  setEmployeeFailed,
  updateEmployeeStart,
  updateEmployeeSuccess,
  updateEmployeeFailed,
  deleteEmployeeStart,
  deleteEmployeeSuccess,
  deleteEmployeeFailed,
  employeesOnlineStatus,
  employeePresence,
} from "../employee-redux.js";
import { baseRequest } from "utils/request-methods.js";
import { queryToFilter } from "utils/functions.js";
import { toast } from "react-toastify";

export const login = async (dispatch: any, data: any) => {
  dispatch(loginStart());
  try {
    const res = await baseRequest.post("/auth/login", data);

    if (Array.isArray(res.data._doc.role)) {
      dispatch(loginSuccess({ ...res.data._doc, role: res.data._doc.role[0] }));
    } else {
      dispatch(loginSuccess(res.data._doc));
    }
    toast.dismiss();
  } catch (err) {
    dispatch(loginFailed());
    errorHandler(err, dispatch);
  }
};
//ispresent
export const changeEmployeePresenceState = async (data, dispatch) => {
  const res = await baseRequest.post(`/employee/presence`, {
    isPresent: data,
  });

  dispatch(employeePresence(res.data._doc.isPresent));
};

// check user status online or offline
export const userStatus = async () => {
  try {
    await baseRequest.post("/user/connected");
  } catch (err) {
    console.log("user logged out ", err);
  }
};
export const employeessOnlineStatus = async (dispatch, ids: any, type: any) => {
  try {
    let query = "";
    if (type === "employees") {
      query = `/employee/connected-employee?ids=`;
      for (let i = 0; i < ids.length; i++) {
        if (i === ids.length - 1) {
          query += `${ids[i]}`; // No comma for the last element
        } else {
          query += `${ids[i]},`;
        }
      }
    }

    const res = await baseRequest.get(`${query}`);
    if (type === "employees") {
      dispatch(employeesOnlineStatus(res.data));
    }
  } catch (err) {
    console.log("cant fetch online status", err);
  }
};

export const logout = async (dispatch: any) => {
  dispatch(loginStart());
  try {
    await baseRequest.post("/auth/logout");
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(loginFailed());
    errorHandler(err, dispatch);
  }
};

export const getEmployees = async (
  query: any,
  pagination: any,
  dispatch: any
) => {
  dispatch(employeeStart());
  try {
    const res = await baseRequest.get(
      `/employee/pagination?page=${pagination.page + 1}&pageSize=${
        pagination.pageSize
      }&${queryToFilter(query)}`
    );
    dispatch(employeeSuccess(res.data));
  } catch (err) {
    dispatch(employeeFailed());
    errorHandler(err, dispatch);
  }
};

export const setEmployee = async (data: any, dispatch: any) => {
  dispatch(setEmployeeStart());
  try {
    const res = await baseRequest.post("/auth/register", data);
    dispatch(setEmployeeSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setEmployeeFailed());
    errorHandler(err, dispatch);
  }
};

export const deleteEmployee = async (id: any, dispatch: any) => {
  dispatch(deleteEmployeeStart());
  try {
    const res = await baseRequest.delete(`/users/${id}`);
    dispatch(deleteEmployeeSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(deleteEmployeeFailed());
    errorHandler(err, dispatch);
  }
};

export const updateEmployee = async (id: string, data: any, dispatch: any) => {
  dispatch(updateEmployeeStart());

  try {
    const res = await baseRequest.put(`/employee/single/${id}`, data);
    dispatch(updateEmployeeSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateEmployeeFailed());
    errorHandler(err, dispatch);
  }
};
export const updateEmployeeStatus = async (
  id: string,
  data: any,
  dispatch: any
) => {
  dispatch(updateEmployeeStart());

  try {
    const res = await baseRequest.put(`/employee/status/${id}`, data);
    dispatch(updateEmployeeSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateEmployeeFailed());
    errorHandler(err, dispatch);
  }
};
export const updateEmployeeRole = async (
  id: string,
  data: any,
  dispatch: any,
  setCountRole?: any,
  fetchData?: any
) => {
  dispatch(updateEmployeeStart());

  try {
    const res = await baseRequest.put(`/employee/role/${id}`, data);
    dispatch(updateEmployeeSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
    if (setCountRole) {
      fetchData("employee/count-by-role", setCountRole);
    }
  } catch (err) {
    dispatch(updateEmployeeFailed());
    errorHandler(err, dispatch);
  }
};
export const updateEmployeeSupervisor = async (
  id: any,
  data: any,
  dispatch: any
) => {
  dispatch(updateEmployeeStart());
  try {
    const res = await baseRequest.put(`/employee/set-supervisor/${id}`, data);
    dispatch(updateEmployeeSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateEmployeeFailed());
    errorHandler(err, dispatch);
  }
};
export const clearEmployeeSupervisor = async (id: any, dispatch: any) => {
  dispatch(updateEmployeeStart());
  try {
    const res = await baseRequest.put(`/employee/clear-supervisor/${id}`);
    dispatch(updateEmployeeSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(updateEmployeeFailed());
    errorHandler(err, dispatch);
  }
};
