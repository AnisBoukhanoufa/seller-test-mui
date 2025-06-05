import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./stock-card-select.scss";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

const StockCardSelect = ({
  stocks = [],
  addedStocks,
  setAddedStocks,
  remainingQuantity,
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [inputQuantity, setInputQuantity] = useState("");
  const [selectedStock, setSelectedStock] = useState({});
  // const [currentStock, setCurrentStock] = useState(null);

  const handleStockClick = (stock, index) => {
    console.log("stocck", stock);
    // setCurrentStock({
    //   stockId: stock._id,
    //   stockName: `stock ${index + 1}`,
    //   quantity: 0,
    // });
    setSelectedStock({ stockId: stock._id, stockName: `stock ${index + 1}` });
    setInputQuantity("");
    setOpen(true); // Open the modal
  };

  const handleConfirm = () => {
    // Handle the confirm action, e.g., add the input quantity to the stock
    console.log(`Adding ${inputQuantity} to ${selectedStock.stockName}`);
    const currentStock = {
      ...selectedStock,
      quantity: Number(inputQuantity),
    };

    setAddedStocks([currentStock, ...addedStocks]);
    setOpen(false);
  };

  const handleAddAllQuantity = () => {
    setInputQuantity(remainingQuantity);
  };

  return (
    <>
      {stocks.map((e, index) => (
        <div key={e._id} className="stock-card-click">
          <div
            className={`stock-card`}
            id={e._id}
            onClick={() => handleStockClick(e, index)}
          >
            <div className="stock-title">
              {t("stock")} {index + 1}
            </div>
            <div className="details">
              <div className="info">
                <div className="stock-value">
                  <span className="itemKey status">
                    {t("status")} :
                    <div className={`cellWithStatus ${t(e.currentStatus, { lng: 'en' })}`}>
                      {t(`${e.currentStatus}`)}
                    </div>
                  </span>
                </div>
                <div className="stock-value">
                  <span className="itemKey">{t("Volume")} :</span>
                  <span className="itemValue">{e.volume} CBM</span>
                </div>
                <div className="stock-value">
                  <span className="itemKey">{t("weight")} :</span>
                  <span className="itemValue">{e.weight} Kg</span>
                </div>
                <div className="stock-value">
                  <span className="itemKey">{t("warehouse")} :</span>
                  <span className="itemValue">
                    {e.warehouseId.name} {t(e.warehouseId.country)}
                  </span>
                </div>
              </div>
              <div className="quantity">
                <div className="stock-value">
                  <span className="itemKey">{t("Quantity")} :</span>
                  <span className="itemValue">{e.quantity}</span>
                </div>
                <div className="stock-value-quantity availble">
                  <div className="circle availble"></div>
                  <span className="item-key-list">{t("Availble")} :</span>
                  <span className="itemValue">
                    {e.quantity - e.quantityInReturn - e.damage}
                  </span>
                </div>
                <div className="stock-value-quantity in-return">
                  <div className="circle in-return"></div>
                  <span className="item-key-list ">{t("In return")} :</span>
                  <span className="itemValue">{e.quantityInReturn}</span>
                </div>
                <div className="stock-value-quantity dammage">
                  <div className="circle dammage "></div>
                  <span className="item-key-list">{t("Dammage")} :</span>
                  <span className="itemValue">{e.damage}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>{t("Add Quantity to Stock")}</DialogTitle>
          <DialogContent>
            {remainingQuantity > 0 ? (
              <TextField
                style={{ marginTop: 10 }}
                label={t("Quantity")}
                type="number"
                fullWidth
                value={inputQuantity}
                onChange={(e) => setInputQuantity(e.target.value)}
              />
            ) : (
              <p className="alert">Remaining quantity is 0</p>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddAllQuantity}>
              {t("Add All Quantity")}
            </Button>
            <Button onClick={() => setOpen(false)}>{t("Cancel")}</Button>
            <Button
              onClick={handleConfirm}
              disabled={!inputQuantity || inputQuantity <= 0}
            >
              {t("Confirm")}
            </Button>
          </DialogActions>
        </Dialog>
      }
    </>
  );
};

export default StockCardSelect;
