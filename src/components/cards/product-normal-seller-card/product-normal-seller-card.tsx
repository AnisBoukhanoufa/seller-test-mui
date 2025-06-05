import { useTranslation } from "react-i18next";
import "./product-normal-seller-card.scss";
import { useDispatch } from "react-redux";

const ProductNormalSellerCard = ({ param }: any) => {
  const { t } = useTranslation();

  return (
    <div className="productNormalSellerCard">
      <div className="detailItem">
        <span className="itemKey">{t("commission")} :</span>
        <span className="valueKey dollar">{param.commission}</span>
      </div>
    </div>
  );
};

export default ProductNormalSellerCard;
