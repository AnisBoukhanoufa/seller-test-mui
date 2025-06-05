// import { Button, Link } from "@mui/material";
import "./offers-card.scss"; // For CSS styling
import qatar from "../../../assets/qatar.png";
import emirates from "../../../assets/emirates.png";
import kuwait from "../../../assets/kuwait.png";
import ksa from "../../../assets/ksa.png";
import oman from "../../../assets/oman.png";
import bahrain from "../../../assets/bahrain.png";
import { t } from "i18next";

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
const Offers = ({ offers }) => {
  return (
    <div className="offers-list">
      {offers?.length > 0 &&
        offers.slice(0, 3).map((offer, index) => (
          <div className="offer-card" key={index}>
            <div className="offer-details">
              <span>
                {offer.quantity} {t("piece")}
              </span>
              <span>
                {offer.targetPrice} {currencies[offer.country]} -{" "}
                <span className="commission">{offer.commission}$</span>
              </span>
            </div>
            <img src={images[offer.country]} className="offer-country" alt="" />
          </div>
        ))}
    </div>
  );
};
export default Offers;
