import { useTranslation } from "react-i18next";
import "./productAffiliateSellerCard.scss";
import qatar from "../../../assets/qatar.png";
import emirates from "../../../assets/emirates.png";
import kuwait from "../../../assets/kuwait.png";
import ksa from "../../../assets/ksa.png";
import oman from "../../../assets/oman.png";
import bahrain from "../../../assets/bahrain.png";

import { removeOffer } from "state/cards/product-card/product-affiliate-seller-card-redux";
import { useDispatch } from "react-redux";

const ProductAffiliateSellerCard = ({ param }: any) => {
  console.log(param);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  var images = {
    70: ksa,
    71: emirates,
    72: qatar,
    73: kuwait,
    74: bahrain,
    75: oman,
  };
  var currencies = {
    70: "SAR",
    71: "AED",
    72: "QAR",
    73: "KWD",
    74: "BHD",
    75: "OMR",
  };
  return (
    <div className="productAffiliateSellerCard">
      {!param._id && (
        <div
          className="trash1"
          onClick={() => {
            dispatch(removeOffer(param.offerNumber));
          }}
        >
          x
        </div>
      )}
      <div className="body">
        <div className="detailItem">
          <span className="itemKey">{t("warehouse")} :</span>
          <span className="valueKey">{param.warehouseName}</span>
          <img src={images[param.country]} alt="" className="county-image" />
        </div>
        <div className="detailItem">
          <span className="itemKey">{t("commission")} :</span>
          <span className="valueKey dollar">{param.commission}</span>
        </div>
        <div className="detailItem">
          <span className="itemKey">{t("quantity")} :</span>
          <span className="valueKey">{param.quantity}</span>
        </div>
        <div className="detailItem">
          <span className="itemKey">{t("target price")} :</span>
          <span className={`valueKey`}>
            {`${param.targetPrice} ${currencies[param.country]}`}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductAffiliateSellerCard;
