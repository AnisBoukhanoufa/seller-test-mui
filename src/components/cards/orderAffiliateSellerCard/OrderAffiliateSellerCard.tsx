import { useTranslation } from "react-i18next";
import "./orderAffiliateSellerCard.scss";

const OrderAffiliateSellerCard = ({ param }: any) => {
  const { t } = useTranslation();
  console.log(param);
  return (
    <div className="productCartAffiliate">
      <div className="cartProduct-right">
        <span>{param.id}</span>
      </div>
      <div className="cartProduct-left">
        <span>
          <h4>{param?.offers?.title}</h4>
        </span>
        <span>
          {t("quantity")} : {param?.quantity}
        </span>
        <span>
          {t("price")} : {param.price}
        </span>
      </div>
    </div>
  );
};

export default OrderAffiliateSellerCard;
