import { useState } from "react";
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
import ProductsAutocomplete from "components/autocomplete/products-autocomplete";
import SubProductAutocomplete from "components/autocomplete/sub-products-autocomplete";
import { EnumSellerRole } from "statics/enums";
import { useDispatch } from "react-redux";
import "./add-product.scss";
import useSubProducts from "hooks/autocompletes-hooks/use-sub-products";
import useProducts from "hooks/autocompletes-hooks/use-products";

const AddProductDialog = ({
  orderInfo,
  open,
  fetchSingleData,
  updateOrderProducts,
  handleCloseAddProductDialog,
  productsToShow,
  productType
}: any) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [isUpsell, setIsUpsell] = useState(false);

  const handleCloseDialog = () => {
    setChoosenProduct({
      _id: "",
      name: "",
      products: [],
    });
    setChoosenSubProduct({ _id: "" });
    setQuantity("");
    setIsUpsell(false);
    handleCloseAddProductDialog();
  };

  // Handle checkbox change
  const handleChangeUpsell = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsUpsell(event.target.checked);
  };

  const { products, choosenProduct, setChoosenProduct, setProducts } =
    useProducts(productType);

  const { subProducts, choosenSubProduct, setChoosenSubProduct } =
    useSubProducts(choosenProduct);

  // Form submission handler
  const handleSub = async (data: any) => {
    const dataToAdd = {
      productId: choosenSubProduct._id,
      quantity,
      isUpsell,
    };
    const dataToSend = productsToShow.map((element) => ({
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
          <span className="capitalize">{t("add product")}</span>
        </DialogTitle>
        <DialogContent sx={{ width: 400 }}>
          <div className="cart">
            <div className="formInput">
              <ProductsAutocomplete
                products={products}
                setProducts={setProducts}
                choosenProduct={choosenProduct}
                setChoosenProduct={setChoosenProduct}
                sellerType={EnumSellerRole.seller}
                sellerId={orderInfo?.sellerId?._id}
                productType={productType}
            />
            </div>
            {choosenProduct._id && (
              <div className="formInput">
                <SubProductAutocomplete
                  choosenProduct={choosenProduct}
                  subProducts={subProducts}
                  choosenSubProduct={choosenSubProduct}
                  setChoosenSubProduct={setChoosenSubProduct}
                />
              </div>
            )}

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
          <Button
            disabled={!choosenSubProduct._id || !quantity}
            onClick={handleSub}
            className="capitalize"
          >
            <span className="capitalize">{t("add")}</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddProductDialog;
