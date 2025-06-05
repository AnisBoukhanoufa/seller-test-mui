import { useDispatch } from "react-redux";
import "./warehouse-card.scss";
import { useTranslation } from "react-i18next";
import { removeWarehouse } from "state/affiliate-product-warehouse-redux";
import qatar from "../../../assets/qatar.png";
import emirates from "../../../assets/emirates.png";
import kuwait from "../../../assets/kuwait.png";
import ksa from "../../../assets/ksa.png";
import oman from "../../../assets/oman.png";
import bahrain from "../../../assets/bahrain.png";
const WarehouseCard = ({ param }: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  var images = {
    70: ksa,
    71: emirates,
    72: qatar,
    73: kuwait,
    74: bahrain,
    75: oman,
  };
  console.log(param);
  return (
    <div className="warehouseCard">
      <div className="body">
        <div className="detailItem">
          <span className="itemKey">{t("name")} :</span>
          <span className="valueKey">{param?.name}</span>
          <img src={images[param.country]} alt="" className="county-image" />
        </div>

        <div className="detailItem">
          <span className="itemKey">{t("product quantity")} :</span>
          <span className="valueKey">{param?.quantity}</span>
        </div>
      </div>

      <img
        className="trash1"
        onClick={() => dispatch(removeWarehouse(param.warehouse))}
      />
    </div>
  );
};

export default WarehouseCard;
