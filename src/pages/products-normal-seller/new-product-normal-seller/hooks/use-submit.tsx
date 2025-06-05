// useProductSubmission.js
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProductNormalSeller } from "state/api-calls/product-normal-seller-calls";

const useProductSubmission = (data, setData) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isFetching, succeed } = useSelector(
    (state: any) => state.productNormalSeller
  );
  const [showError, setShowError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmitNewProduct = async () => {
    if (data?.subProducts?.length) {
      const allSubProductsValid = data.subProducts.some(
        (e) => e.isValid === false
      );
      if (allSubProductsValid) {
        setShowError(true);
        return;
      }
    }
    try {
      await setProductNormalSeller(data, dispatch);
      setData({
        name: "",
        description: "",
        category: [],
        url: "",
      });
      setHasSubmitted(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (
      hasSubmitted &&
      isFetching === false &&
      error === false &&
      succeed === true
    ) {
      navigate(-1);
    }
  }, [hasSubmitted, isFetching, error, succeed, navigate]);

  //handle disable submit button
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  useEffect(() => {
    if (isFetching === true) {
      setDisableSubmitButton(true);
    } else setDisableSubmitButton(false);
  }, [isFetching, error]);

  const handleCloseError = () => {
    setShowError(false);
  };

  return {
    showError,
    handleSubmitNewProduct,
    handleCloseError,
    disableSubmitButton,
  };
};

export default useProductSubmission;
