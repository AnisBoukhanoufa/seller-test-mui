import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { useDispatch } from "react-redux";
import { t } from "i18next";
import { splitPhoneNumbers } from "utils/functions";

import "./edit-client-info.scss";
import { useForm } from "react-hook-form";
import ClientForm from "pages/orders/components/client-form/client-form";
import { useEffect } from "react";
const ClientOrderEdit = ({
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
  } = useForm();

  // Reset the form with the new default values
  useEffect(() => {
    if (orderInfo) {
      reset({
        client: {
          name: orderInfo.client?.name,
          phone:
            orderInfo?.client?.phone?.code + orderInfo?.client?.phone?.number,
          address: orderInfo.client?.address,
          district: orderInfo.client?.district,
          city: orderInfo.client?.city,
          country: orderInfo.client?.country,
        },
      });
    }
  }, [orderInfo, reset]);

  const handleSubmitClient = async (data) => {
    const dataToSend = {
      client: { ...data.client, phone: splitPhoneNumbers(data.client.phone) },
    };
    try {
      await updateOrder(orderInfo._id, dataToSend, dispatch);
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
      <form onSubmit={handleSubmit(handleSubmitClient)}>
        <DialogContent className="edit-order-client" sx={{ width: 400 }}>
          <ClientForm
            formRegister={register}
            formErrors={errors}
            formControl={control}
          />
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

export default ClientOrderEdit;
