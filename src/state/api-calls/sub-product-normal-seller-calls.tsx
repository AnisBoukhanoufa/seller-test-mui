import { errorHandler, successHandler } from "state/api-calls";
import { updateStatusProductNormalSellerSuccess } from "state/product-normal-seller-redux";
import { baseRequest } from "utils/request-methods";

export const updateStatusSubProductNormalSeller = async (
  id: string,
  data: any,
  dispatch: any,
) => {
  try {
    const res = await baseRequest.put(`/sub-product-seller/status/${id}`, data);

    dispatch(updateStatusProductNormalSellerSuccess(res.data._doc));
    successHandler(res.data.responseMessage, dispatch);
    return res.data._doc;
  } catch (err) {
    errorHandler(err, dispatch);
  }
};
