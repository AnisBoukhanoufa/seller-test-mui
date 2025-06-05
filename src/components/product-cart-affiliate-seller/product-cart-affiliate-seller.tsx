import { useTranslation } from "react-i18next";
import "./product-cart-affiliate-seller.scss";
import trash from "assets/trash.svg";
import { removeProduct } from "state/cart-redux";
import { useDispatch } from "react-redux";
interface Product {
  type: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    offers: {
      title: string;
      commission: string;
      quantity: number;
      targetPrice: number;
    };
  };
}
const ProductCartAffiliateSeller = ({ type }: Product) => {
  const { t } = useTranslation();
  return (
    <div className="productCartAffiliate">
      <div className="cartProduct-right">
        <span>{type.id}</span>
        <span>
          {t("name")} : {type.name}
        </span>
      </div>
      <div className="cartProduct-left">
        <span>
          <h4>{type?.offers?.title}</h4>
        </span>
        <span>
          {t("quantity")} : {type?.offers?.quantity}
        </span>
        <span>
          {t("price")} : {type.offers?.targetPrice}
        </span>
      </div>
    </div>
  );
};

export default ProductCartAffiliateSeller;
