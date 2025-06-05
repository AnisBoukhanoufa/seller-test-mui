import { useTranslation } from "react-i18next";
import "./productCartNormalSeller.scss";

interface Product {
  type: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    isUpsell: boolean;
  };
}
const ProductCartNormalSeller = ({ type }: Product) => {
  const { t } = useTranslation();
  return (
    <div className="productCartNormal">
      <div className="cartProduct-right">
        <span>
          {"product id"} : {type.id}
        </span>
        {t("is upsell")} : {type.isUpsell ? t("yes") : t("no")}
      </div>
      <div className="cartProduct-left">
        <span>
          {t("quantity")} : {type.quantity}
        </span>
        <span>
          {t("price")} : {type.price * type.quantity}
        </span>
      </div>
    </div>
  );
};

export default ProductCartNormalSeller;
