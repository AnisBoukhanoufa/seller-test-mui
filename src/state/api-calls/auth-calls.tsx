import { baseRequest } from "utils/request-methods";

export const resetPasswordRequest = async (data: { email: string }) => {
  const res = await baseRequest.post(
    "/auth/reset-password-request-seller",
    data
  );
  return res.data;
};
export const resetPassword = async (data: {
  password: string;
  token: string;
}) => {
  const res = await baseRequest.post(
    "/auth/reset-password",
    data
  );
  return res.data;
};
