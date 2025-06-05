import { useTranslation } from "react-i18next";
import "./stock-card.scss";

import DropdownStockStatus from "components/drop-downs/stock-status/stock-status-drop-down";

const StockCard = ({
  choosenSubProduct,
  stocks,

  setStocks,
}: any) => {
  const { t } = useTranslation();

  const stocksList = stocks.map((item, index) => {
    return (
      <div className="stock-card">
        <div className="stock-title">{item.id}</div>
        <div className="details">
          <div className="info">
            <div className="stock-value">
              <span className="itemKey status">
                {t("status")} :
                <DropdownStockStatus
                  choosenSubProduct={choosenSubProduct}
                  setStocks={setStocks}
                  initStatus={item.currentStatus}
                  stockId={item._id}
                />
              </span>
            </div>
            <div className="stock-value">
              <span className="itemKey">{t("Volume")} :</span>
              <span className="itemValue">{item.volume} CBM</span>
            </div>
            <div className="stock-value">
              <span className="itemKey">{t("weight")} :</span>
              <span className="itemValue">{item.weight} Kg</span>
            </div>
            <div className="stock-value">
              <span className="itemKey">{t("warehouse")} :</span>
              <span className="itemValue">{t(item.warehouseId.country)}</span>
            </div>
          </div>
          <div className="quantity">
            <div className="stock-value">
              <span className="itemKey">{t("Quantity")} :</span>
              <span className="itemValue">
                {item.quantity + item.quantityInReturn + item.damage}
              </span>
            </div>
            <div className="stock-value-quantity availble">
              <div className="circle availble"></div>
              <span className="item-key-list">{t("Availble")} :</span>
              <span className="itemValue">{item.quantity}</span>
            </div>
            <div className="stock-value-quantity in-return">
              <div className="circle in-return"></div>
              <span className="item-key-list ">{t("In return")} :</span>
              <span className="itemValue">{item.quantityInReturn}</span>
            </div>
            <div className="stock-value-quantity dammage">
              <div className="circle dammage "></div>
              <span className="item-key-list">{t("Dammage")} :</span>
              <span className="itemValue">{item.damage}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return stocksList;
};

export default StockCard;
