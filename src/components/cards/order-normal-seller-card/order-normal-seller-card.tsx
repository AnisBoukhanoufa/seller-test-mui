import { useTranslation } from "react-i18next";
import "./order-normal-seller-card.scss";

const OrderNormalSellerCard = ({ param }: any) => {
  const { t } = useTranslation();
  console.log(param);
  return (
    <div className="product-details">
      <div className="product-detail">
        <div className="detailItem">
          <span className="itemKey">{t("product")} :</span>
          <span className="valueKey">{param.product.productName}</span>
        </div>
        <div className="detailItem">
          <span className="itemKey">{t("quantity")} :</span>
          <span className="valueKey">{param.product.quantity}</span>
        </div>
        <div className="detailItem">
          <span className="itemKey">{t("price")} :</span>
          <span className="valueKey">{param.product.price}</span>
        </div>
        <div className="detailItem">
          <span className="itemKey">{t("isUpsell")} :</span>
          <span className="valueKey">
            {param.isUpsell ? t("yes") : t("no")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderNormalSellerCard;
