import { useState } from "react";
import { useDispatch } from "react-redux";
// import { setOrderNormalSeller, removeProducts } from "./path-to-your-redux-actions"; // Adjust the import path
import { useLocation } from "react-router-dom";
// import { removeProducts } from "state/cart-redux";
import { splitPhoneNumbers } from "utils/functions";

const useOrderSubmission = (setOrder, reset) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get("country");
  const dispatch = useDispatch();

  // const cart = useSelector((state: any) => state.cart.products);
  const [cart, setCart] = useState([]);

  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  // Handle form submission
  const handleSubmitOrder = async (data) => {
    const warehouseCountry =
      country === "local" ? data?.client?.country : country;

    // Create data object
    const dataToSend = {
      ...data,
      client: { ...data.client, phone: splitPhoneNumbers(data?.client?.phone) },
      warehouseCountry: Number(warehouseCountry),
      products: cart,
    };
    try {
      setDisableSubmitButton(true);
      await setOrder(dataToSend, dispatch);
      reset();
      setCart([]);
      // dispatch(removeProducts());
    } catch (err) {
      console.log(err);
    }
    setDisableSubmitButton(false);
  };
  return {
    cart,
    setCart,
    handleSubmitOrder,
    disableSubmitButton,
  };
};

export default useOrderSubmission;
