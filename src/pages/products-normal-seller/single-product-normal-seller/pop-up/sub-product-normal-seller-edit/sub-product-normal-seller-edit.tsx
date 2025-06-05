import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import "./sub-product-normal-seller-edit.scss";

import { t } from "i18next";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { errorHandler } from "state/api-calls";
import {
  updateProductNormalSeller,
  updateSubProductsProductNormalSeller,
} from "state/api-calls/product-normal-seller-calls";
import { categories } from "statics/categories";
import SubProductDetail from "./components/details-sub-product/details-sub-product-v2";
import ProductCards from "./components/product-cards/product-cards-v2";
import CustomSnackbar from "components/snackbar/snackbar";
import useImageUploader from "hooks/use-images-upload";
import ImageUploader from "components/images-upload/images-upload";

const SubProductsNormalSellerEdit = ({ productInfo, handleClose, open }) => {
  const dispatch = useDispatch();
  const [subProducts, setSubProducts] = useState(productInfo?.products);

  useEffect(() => {
    // setSubProducts(productInfo?.products);
    const initSubroducts = productInfo?.products?.map((element) => {
      return {
        ...element,
        idTemp: "id" + Math.random().toString(16).slice(2),
        isValid: true,
      };
    });
    setSubProducts(initSubroducts);
  }, [productInfo?.products]);

  // //handle mainpulate sub products message error
  const [showError, setShowError] = useState(false);
  const handleCloseError = () => {
    setShowError(false);
  };

  // // handle update products
  const handleUpdate = async () => {
    const hasInvalidSubProducts = subProducts.some((e) => !e.isValid);
    if (hasInvalidSubProducts) {
      setShowError(true);
      return;
    }

    const updatedSubProducts = subProducts.filter(
      (element) => element.changed === true
    );
    try {
      if (updatedSubProducts.length > 0) {
        const dataToSend = {
          subProducts: updatedSubProducts,
        };
        await updateSubProductsProductNormalSeller(
          productInfo._id,
          dataToSend,
          dispatch
        );
      }
      //handle new custom variations
      if (
        Object.keys(customVariations).length !==
        Object.keys(productInfo?.customVariations).length
      ) {
        const dataToSend = {
          customVariations,
        };
        await updateProductNormalSeller(productInfo._id, dataToSend, dispatch);
      }

      handleClose();
    } catch (error) {
      errorHandler(error, dispatch);
      console.log(error);
    }
  };

  const handleCancel = () => {
    setSelectedSubProduct({ idTemp: "" });
    setCustomVariations([]);
    const initSubroducts = productInfo?.products?.map((element) => {
      return {
        ...element,
        idTemp: "id" + Math.random().toString(16).slice(2),
        isValid: true,
      };
    });
    setSubProducts(initSubroducts);
    handleClose();
  };

  //handle new product productInfo
  const [customVariations, setCustomVariations] = useState(
    productInfo?.customVariations
  ); // { detail: "detailKey", value: "" }
  const [selectedSubProduct, setSelectedSubProduct] = useState({ idTemp: "" });
  useEffect(() => {
    setCustomVariations(productInfo?.customVariations);
  }, [productInfo?.customVariations]);
  // handle tags
  const details =
    productInfo?.category?.reduce(
      (accumulator, currentValue) => accumulator[currentValue],
      categories
    ) || [];

  const { files, setFiles, handleFileUpload, handleDelete } =
    useImageUploader();

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogContent className="edit-sub-products">
        <div className="edit-section">
          <div className="variations">
            <SubProductDetail
              details={details}
              images={[]}
              subProducts={subProducts}
              setSubProducts={setSubProducts}
              selectedSubProduct={selectedSubProduct}
              setSelectedSubProduct={setSelectedSubProduct}
              customVariations={customVariations}
              setCustomVariations={setCustomVariations}
              offers={undefined}
            />
          </div>
          <div className="images" style={{ minWidth: "25em" }}>
            <ImageUploader
              handleDelete={handleDelete}
              files={files}
              handleFileUpload={handleFileUpload}
            />
          </div>
        </div>
        <div className="sub-products">
          {subProducts && (
            <ProductCards
              setSelectedSubProduct={setSelectedSubProduct}
              subProducts={subProducts}
              productInfo={productInfo}
            />
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>{t("cancel")}</Button>
        <Button onClick={handleUpdate}>{t("update")}</Button>
      </DialogActions>
      <CustomSnackbar
        open={showError}
        message={t("all sub-products must have the same variations")}
        severity={"warning"} // Default severity is 'info'
        autoHideDuration={6000}
        onClose={handleCloseError}
      />
    </Dialog>
  );
};

export default SubProductsNormalSellerEdit;
