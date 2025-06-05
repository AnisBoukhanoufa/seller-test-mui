import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { t } from "i18next";
import "./edit-order-info.scss";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
const InfoOrderEdit = ({
  open,
  setOpen,
  orderInfo,
  updateOrder,
  fetchSingleData,
}: any) => {
  const dispatch = useDispatch();
  const {
    register: register,
    formState: { errors: errors },
    handleSubmit: handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues: {
      note: orderInfo?.note,
      isConfirmed: orderInfo?.isConfirmed,
      totalPrice: orderInfo?.totalPrice,
    },
  });
  // Reset the form with the new default values
  useEffect(() => {
    if (orderInfo) {
      reset({
        note: orderInfo?.note,
        isConfirmed: orderInfo?.isConfirmed,
        totalPrice: orderInfo?.totalPrice,
      });
    }
  }, [orderInfo, reset]);
  const handleSubmitInfo = async (data) => {
    try {
      await updateOrder(orderInfo._id, data, dispatch);
      fetchSingleData();
    } catch (err) {
      console.log(err);
    }
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(handleSubmitInfo)}>
        <DialogContent className="edit-order-client" sx={{ width: 400 }}>
          <div className="formInput">
            <TextField
              fullWidth
              id="note"
              label={t("note")}
              variant="outlined"
              {...register("note")}
            />
          </div>
          <div className="formInput">
            <TextField
              fullWidth
              {...register("totalPrice", {
                required: "please enter a valid value",
                min: 1,
              })}
              id="totalPrice"
              label={t("total price")}
              type="number"
              variant="outlined"
            />
            {errors.totalPrice && (
              <p className="errorValidation">Please enter a valid value</p>
            )}
          </div>
          <div className="formInput checkboxs">
            <Controller
              name="isConfirmed"
              control={control}
              defaultValue={orderInfo?.isConfirmed} // Default value for the checkbox
              render={({ field }) => (
                <Checkbox {...field} checked={field.value} />
              )}
            />
            <span>{t("is confirmed")}</span>
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="button" onClick={handleClose}>
            {t("cancel")}
          </Button>
          <Button type="submit">{t("save")}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default InfoOrderEdit;
