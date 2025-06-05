import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { t } from "i18next";
import { useDispatch } from "react-redux";
import "./edit-product.scss";

const EditProductDialog = ({
  orderInfo,
  open,
  handleCloseAddProductDialog,
  productsToShow,
  productToEdit,
  updateOrderProducts,
  fetchSingleData,
}: any) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);
  const [isUpsell, setIsUpsell] = useState(false);

  useEffect(() => {
    setQuantity(productToEdit?.quantity);
    setIsUpsell(productToEdit?.isUpsell);
  }, [productToEdit]);

  const handleCloseDialog = () => {
    setQuantity("");
    setIsUpsell(false);
    handleCloseAddProductDialog();
  };

  // Handle checkbox change
  const handleChangeUpsell = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsUpsell(event.target.checked);
  };

  // Form submission handler
  const handleSub = async (data: any) => {
     const dataToAdd = {
      productId: productToEdit.productId._id,
      quantity,
      isUpsell,
    };
    const dataToSend = productsToShow
      .filter((element) => element._id !== productToEdit._id)
      .map((element) => ({
        productId: element.productId._id,
        quantity: element.quantity,
        isUpsell: element.isUpsell,
      }));

    const productAlreadyExistIndex = dataToSend.findIndex(
      (element) => element.productId === dataToAdd.productId
    );
    if (productAlreadyExistIndex !== -1) {
      if (
        dataToSend[productAlreadyExistIndex].isUpsell === dataToAdd.isUpsell
      ) {
        dataToSend[productAlreadyExistIndex].quantity =
          dataToSend[productAlreadyExistIndex].quantity + dataToAdd.quantity;
      } else {
        dataToSend.push(dataToAdd);
      }
    } else {
      dataToSend.push(dataToAdd);
    }
  
    try {
      await updateOrderProducts(
        orderInfo._id,
        { products: dataToSend },
        dispatch
      );
      await fetchSingleData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle className="dialog-title capitalize">
          <span className="capitalize">{t("edit product")}</span>
        </DialogTitle>
        <DialogContent sx={{ width: 400 }}>
          <div className="cart">
            <div className="formInput">
              <TextField
                fullWidth
                id="quantity"
                label={t("quantity")}
                value={quantity || ""}
                type="number"
                variant="outlined"
                placeholder="0"
                inputProps={{ min: "1" }}
                onChange={(e: any) => setQuantity(Number(e.target.value))}
              />
            </div>

            <div className="formInput checkboxs">
              <div>
                <Checkbox
                  name="isUpsell"
                  checked={isUpsell}
                  onChange={handleChangeUpsell}
                />
                <span className="capitalize">{t("is upsell")}</span>
              </div>
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>
            <span className="capitalize">{t("cancel")}</span>
          </Button>
          <Button onClick={handleSub} className="capitalize">
            <span className="capitalize">{t("change")}</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditProductDialog;
