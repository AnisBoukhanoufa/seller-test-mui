import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextEditor from "components/text-editor/text-editor";
import "./product-normal-seller-edit.scss";
import { updateProductNormalSeller } from "state/api-calls/product-normal-seller-calls";
import { t } from "i18next";
import { baseRequest } from "utils/request-methods";
const ProductNormalSellerEdit = ({
  open,
  productInfo,
  handleClose,
  setProductInfo,
}: any) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const { isFetching, error, succeed } = useSelector(
    (state: any) => state.productNormalSeller
  );

  useEffect(() => {
    setData({
      description: productInfo?.description,
      name: productInfo?.name,
    });
  }, [productInfo]);

  const handleInput = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  //handle edit
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const handleUpdate = async () => {
    try {
      await updateProductNormalSeller(productInfo._id, data, dispatch);
      setHasSubmitted(true);
      const fetchData = async () => {
        const res = await baseRequest.get(
          `/product-seller/single/${productInfo._id}`
        );
        setProductInfo(res.data._doc);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      hasSubmitted &&
      isFetching === false &&
      error === false &&
      succeed === true
    ) {
      handleClose(); // Navigate once sourcing is successful
    }
  }, [hasSubmitted, isFetching, error, succeed]); // Dependencies: Redux state variables

  //handle disable submit button
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);

  useEffect(() => {
    if (isFetching === true && error === false) {
      setDisableSubmitButton(true);
    } else setDisableSubmitButton(false);
  }, [isFetching, error]);

  return (
    <div className="productNormalSellerEdit">
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent>
          <div className="edit-order-affiliate">
            <div className="products">
              <div className="product-details">
                <h3>{t("Edit Product information")}</h3>
                <div className="formInput">
                  <TextField
                    fullWidth
                    id="name"
                    label={t("name")}
                    variant="outlined"
                    onChange={handleInput}
                    defaultValue={productInfo.name}
                  />
                </div>
                <div className="descrition-edit">
                  <span className="description-title">
                    {t("description")} :
                  </span>
                  <TextEditor data={data} setData={setData} />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("cancel")}</Button>
          <Button onClick={handleUpdate} disabled={disableSubmitButton}>
            {t("update")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductNormalSellerEdit;
