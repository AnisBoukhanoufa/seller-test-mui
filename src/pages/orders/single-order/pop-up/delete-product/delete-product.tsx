import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { t } from "i18next";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
const DeleteProductDialog = ({
  open,
  onClose,
  orderInfo,
  productsToShow,
  productToDelete,
  updateOrderProducts,
  fetchSingleData,
}) => {
  const dispatch = useDispatch();
  const handleDeleteProduct = useCallback(async () => {
    const dataToSend = {
      products: productsToShow
        .filter((element) => element._id !== productToDelete._id)
        .map((element) => ({
          productId: element.productId._id,
          quantity: element.quantity || element.offer.quantity,
          isUpsell: element.isUpsell,
        })),
    };
    try {
      await updateOrderProducts(orderInfo._id, dataToSend, dispatch);
      await fetchSingleData();
      onClose();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  }, [
    productsToShow,
    productToDelete._id,
    updateOrderProducts,
    orderInfo._id,
    dispatch,
    fetchSingleData,
    onClose,
  ]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{t("delete")}</DialogTitle>

      <DialogContent>
        {t("Are you sure you want to delete this product?")}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}> {t("close")}</Button>
        <Button onClick={handleDeleteProduct} color="primary">
          {t("delete")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteProductDialog;
