import "./prices-card.scss";
import qatar from "../../../../assets/qatar.png";
import emirates from "../../../../assets/emirates.png";
import kuwait from "../../../../assets/kuwait.png";
import ksa from "../../../../assets/ksa.png";
import oman from "../../../../assets/oman.png";
import bahrain from "../../../../assets/bahrain.png";

var images = {
  70: ksa,
  71: emirates,
  72: qatar,
  73: kuwait,
  74: bahrain,
  75: oman,
};

const Prices = ({ toopDropPrice }) => {
  return (
    <div className="prices-list">
      {toopDropPrice?.length > 0 &&
        toopDropPrice.map((price, index) => (
          <div className="price-card" key={index}>
            <img src={images[price.country]} className="price-country" alt="" />
            <div className="price-details">
              <span className="dollar ">{(price?.price || 0).toFixed(2)}</span>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Prices;
