import "../new-order/new-order.scss";

import { setOrderNormalSeller } from "state/api-calls/order-normal-seller-calls";
import { useForm } from "react-hook-form";
import { EnumSellerRole } from "statics/enums";
import { t } from "i18next";
import useOrderSubmission from "pages/orders/new-order/hooks/use-submit";
import GeneralInformation from "pages/orders/new-order/sections/general-infos";
import ClientForm from "pages/orders/components/client-form/client-form";
import ProductsCart from "pages/orders/new-order/sections/products-and-cart";

const NewOrderNormalSeller = () => {
  const {
    register: register,
    formState: { errors: errors },
    handleSubmit: handleSubmit,
    control,
    reset,
  } = useForm();


  //handle submit form
  const { cart, setCart, handleSubmitOrder, disableSubmitButton } =
    useOrderSubmission(setOrderNormalSeller, reset);

  return (
    <div className="newOrderSeller">
      <div className="newContainer overflowPreventerFlexbox">
        <div className="overflowPreventerContainer">
          <div className="overflowPreventer">
            <div className="title">
              <h1 className="page-title">{t("new order")}</h1>
            </div>
            <form onSubmit={handleSubmit(handleSubmitOrder)} className="top">
              <div className="left">
                <ClientForm
                  formRegister={register}
                  formErrors={errors}
                  formControl={control}
                />
              </div>
              <div className="center">
                <ProductsCart
                  sellerType={EnumSellerRole.seller}
                  productType={"seller"}
                  cart={cart}
                  setCart={setCart}
                />
              </div>
              <div className="right">
                <GeneralInformation
                  control={control}
                  register={register}
                  errors={errors}
                  disableSubmitButton={disableSubmitButton}
                  cart={cart}
              />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderNormalSeller;
