import "react-toastify/dist/ReactToastify.css";
import { logout } from "./api-calls/seller-calls";

export const errorHandler = async (err: any, dispatch: any) => {
  const { toast } = await import("react-toastify");

  if (err.response.status === 401 || err.response.status === 403) {
    logout(dispatch);
    toast.error(err.response.data.message, {});
  } else {
    let errorMessage = "";
    try {
      errorMessage = err.response.data.message;
    } catch (e) {
      errorMessage = "An error occurred";
    }
    if ([409].includes(err.response.status)) {
      toast.warning(errorMessage, {});
    } else {
      const errorMsg = errorMessage.split(":");
      toast.error(errorMsg[errorMsg.length - 1], {});
    }
  }
};

export const successHandler = async (message: any, dispatch: any) => {
  const { toast } = await import("react-toastify");
  toast.success(message, {});
};
