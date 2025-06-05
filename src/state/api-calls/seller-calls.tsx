import { errorHandler } from "state/api-calls.js";
import Cookies from "js-cookie";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  registerStart,
  registerSuccess,
  registerFailed,
  sellerAcceptTermsStart,
  sellerAcceptTermsFailed,
  sellerAcceptTermsSuccess,
} from "../seller-redux.js";
import { baseRequest } from "utils/request-methods.js";
import { toast } from "react-toastify";

export const registration = async (dispatch: any, data: any) => {
  dispatch(registerStart());
  try {
    const res = await baseRequest.post("/auth/register-seller", data);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailed());
    throw new Error("registration failed retry");
  }
};

export const login = async (dispatch: any, data: any) => {
  dispatch({ type: "RESET_STORE" });
  dispatch(loginStart());
  try {
    const res = await baseRequest.post("/auth/login-seller", data);
    if (Array.isArray(res.data._doc.role)) {
      dispatch(loginSuccess({ ...res.data._doc, role: res.data._doc.role[0] }));
    } else {
      dispatch(loginSuccess(res.data._doc));
    }
    Cookies.set("isLogin", "true", { expires: 7 });
    toast.dismiss();
  } catch (err) {
    dispatch(loginFailed());
    // errorHandler(err, dispatch);
    throw err;
  }
};
export const logout = async (dispatch: any) => {
  // dispatch(loginStart());
  try {
    await baseRequest.post("/auth/logout");
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    dispatch(logoutSuccess());
    Cookies.remove("isLogin");
  } catch (err) {
    dispatch(loginFailed());
    errorHandler(err, dispatch);
  }
};
export const setSellerAcceptTerms = async (id: any, dispatch: any) => {
  dispatch(sellerAcceptTermsStart());
  try {
    const res = await baseRequest.put(`/sellers/accept-terms/${id}`, {});
    dispatch(sellerAcceptTermsSuccess(res.data));
  } catch (err) {
    errorHandler(err, dispatch);
    dispatch(sellerAcceptTermsFailed());
    errorHandler(err, dispatch);
  }
};

export const userStatus = async () => {
  try {
    await baseRequest.post("/user/connected");
  } catch (err) {
    console.log("user logged out ", err);
  }
};
