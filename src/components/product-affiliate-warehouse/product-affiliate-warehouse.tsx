import { useDispatch } from "react-redux";
import "./product-affiliate-warehouse.scss";
import { useTranslation } from "react-i18next";
import trash from "assets/trash.svg";
import { removeWarehouse } from "state/affiliate-product-warehouse-redux";
interface Warehouse {
  type: {
    warehouse: string;
    quantity: number;
  };
}
const ProductAffiliateWarehouse = ({ type }: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  console.log(type);
  return (
    <div className="productAffiliateWarehouse">
      <div className="cartProduct-right">
        <span>
          {t("name")} : {type?.name}
        </span>
        <span>
          {t("product quantity")} : {type?.quantity}
        </span>
      </div>
      <div className="cartProduct-left">
        {/* <span>
          {t("product quantity")} : {type?.quantity}
        </span> */}
        <div>
          <img
            className="trash"
            src={trash}
            onClick={() => dispatch(removeWarehouse(type.warehouse))}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductAffiliateWarehouse;
