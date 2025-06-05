import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { removeOffer } from "state/affiliate-offer-redux";
import "./affiliate-offer.scss";
interface Offer {
  type: {
    offerNumber: string;
    commission: string;
    quantity: number;
    targetPrice: number;
    warehouse: String;
  };
}
const AffiliateOffer = ({ type }: Offer) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="offerAffiliate">
      <div className="product-info">
        <div className="card-product-top">
          <div className="cartProduct-right">
            {/* <span>
              {t("offer number")} : {type.offerNumber}
            </span> */}
            <span>
              {t("commission")} : {type.commission}
            </span>
          </div>
          <div className="cartProduct-left">
            <span>
              {t("quantity")} : {type.quantity}
            </span>
            <span>
              {t("target price")} : {type.targetPrice}
            </span>
          </div>
        </div>
        <div className="card-product-bottom">
          <span>
            {t("warehouse")} : {type.warehouse}
          </span>
        </div>
      </div>
      <div
        className="trash"
        onClick={() => dispatch(removeOffer(type.offerNumber))}
      >
        x
      </div>
    </div>
  );
};

export default AffiliateOffer;
