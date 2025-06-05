import trash from "assets/trash.svg";
import "./cart-product.scss";
import { t } from "i18next";
interface Product {
  type: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    isUpsell: boolean;
  };
}
const CartProduct = ({ subProduct, handleRemoveProduct }: Product) => {
  return (
    <>
      <div key={subProduct._id} className="cartProduct">
        <span className="title-cart">
          {subProduct.name}{" "}
          {subProduct.variations && (
            <>
              {Object.entries(subProduct.variations)
                .filter(([key]) => key !== "color")
                .map(([key, value], index) => (
                  <span key={index}>{value} </span>
                ))}

              {subProduct.variations.color &&
                /^#([0-9A-F]{3}){1,2}$/i.test(subProduct.variations.color) && (
                  <span
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: subProduct.variations.color,
                      marginLeft: "5px",
                    }}
                  ></span>
                )}
            </>
          )}
        </span>
        <div className="container-details">
          <div className="cartProduct-right">
            {subProduct.isConfirmed && (
              <span className="wordsWrapper">{t("confirmed")} </span>
            )}
            {subProduct.isUpsell && (
              <span className="wordsWrapper">{t("upsell")} </span>
            )}
            <span className="wordsWrapper">
              {t("quantity")} : {subProduct.quantity}
            </span>
          </div>

          <div className="cartProduct-left"></div>
          <div>
            <img
              className="trash"
              src={trash}
              onClick={() => {
                //  dispatch(removeProduct({ _id: subProduct._id }))
                handleRemoveProduct(subProduct);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
