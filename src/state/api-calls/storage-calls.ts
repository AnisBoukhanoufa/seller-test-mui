import { errorHandler, successHandler } from "state/api-calls.js";
import {
  setStorageFailed,
  setStorageStart,
  setStorageSuccess,
  storageFailed,
  storageStart,
  storageSuccess,
} from "state/storage-redux";

import { baseRequest } from "utils/request-methods.js";

export const getStorageGallery = async (dispatch: any) => {
  dispatch(storageStart());
  try {
    const res = await baseRequest.get(`/storage/get-gallery`);
    dispatch(storageSuccess(res.data.content));
  } catch (err) {
    dispatch(storageFailed());
    errorHandler(err, dispatch);
  }
};

export const uploadStorageImage = async (images: any, dispatch: any) => {
  dispatch(setStorageStart());
  try {
    const res = await baseRequest.post("/storage/upload-images", images, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(setStorageSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setStorageFailed());
    errorHandler(err, dispatch);
  }
};
export const deleteStorageImages = async (data: any, dispatch: any) => {
  dispatch(setStorageStart());
  try {
    const res = await baseRequest.put("/storage//move-images-to-trash", data);
    dispatch(setStorageSuccess(res.data));
    successHandler(res.data.responseMessage, dispatch);
  } catch (err) {
    dispatch(setStorageFailed());
    errorHandler(err, dispatch);
  }
};
