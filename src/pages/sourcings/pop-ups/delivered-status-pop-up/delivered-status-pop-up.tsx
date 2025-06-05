import { useContext, useEffect, useMemo, useState } from "react";
import "./delivered-status-pop-up.scss";

import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import StockCardSelect from "components/stock-card-select/stock-card-select";
import { setNewStock } from "state/api-calls/stock-calls";
import NewStock from "components/create-new-stock/create-new-stock";
import { SourcingContext } from "pages/sourcings/single-sourcing/single-sourcing";
import { baseRequest } from "utils/request-methods";

const DeliveredStatusPopUp = ({
  openDeliveredDialog,
  product,
  setOpenDeliveredDialog,
}: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [stocks, setStocks] = useState([]);
  // const [warehousNewStock, setWarehouseNewStock] = useState(null);
  // const [selectedStockId, setSelectedStockId] = useState(null);
  const [createNewStock, setCreateNewStock] = useState(false);
  const [creationStockNote, setCreationStockNote] = useState("");
  const [addedStocks, setAddedStocks] = useState([]);
  const { sourcingInfo, setSourcingInfo } = useContext(SourcingContext);
  const [remainingQuantity, setRemainingQuantity] = useState();

  useEffect(() => {
    setRemainingQuantity(product.quantity);
  }, [product]);
  useEffect(() => {
    if (addedStocks.length >= 0) {
      const substractQuantity = addedStocks.reduce(
        (sum, item) => sum + item.quantity,
        0,
      );
      setRemainingQuantity(product.quantity - substractQuantity);
    }
  }, [addedStocks]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await baseRequest.get(
        `/stock-seller/pagination?productId=${product.productId._id}&country=${sourcingInfo.destinationCountry}`,
      );
      setStocks(res.data.list);
    };
    fetchData();
  }, [product]);

  const handleConfirm = async () => {
    try {
      const dataToSend = {
        sourcingProductId: product._id,
        sourcingId: sourcingInfo._id,
        warehouses: [],
        note: creationStockNote,
      };
      if (addedStocks.length > 0) {
        dataToSend.warehouses = [...addedStocks];
        await setNewStock(dataToSend, dispatch);
        const fetchData = async () => {
          const res = await baseRequest.get(
            `/sourcing/single/${sourcingInfo._id}`,
          );
          console.log("result od ", res.data._doc);
          setSourcingInfo(res.data._doc);
        };
        fetchData();
      }
      setOpenDeliveredDialog(false);
      setAddedStocks([]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setOpenDeliveredDialog(false);
    setCreationStockNote("");
    setAddedStocks([]);
  };
  return (
    <Dialog
      open={openDeliveredDialog}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: `${!createNewStock ? "90vw" : "fit-content"}`, // 70% of viewport width
          height: `${!createNewStock ? "70vh" : "fit-content"}`, // 70% of viewport height
        },
      }}
    >
      {!createNewStock && (
        <DialogTitle
          sx={{
            color: "var(--color-secondary)",
            fontSize: "24px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Select Stock
        </DialogTitle>
      )}
      {createNewStock && (
        <DialogTitle
          sx={{
            color: "var(--color-secondary)",
            fontSize: "24px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {t("create new stock")}
        </DialogTitle>
      )}

      <DialogContent
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
          },
        }}
        className="dialog-content"
      >
        {createNewStock && (
          <NewStock
            setCreationStockNote={setCreationStockNote}
            setRemainingQuantity={setRemainingQuantity}
            remainingQuantity={remainingQuantity}
            addedStocks={addedStocks}
            setAddedStocks={setAddedStocks}
          />
        )}
        {!createNewStock && (
          <div className="stocks-container">
            <StockCardSelect
              stocks={stocks}
              remainingQuantity={remainingQuantity}
              // setSelectedStockId={setSelectedStockId}
              // selectedStockId={selectedStockId}
              addedStocks={addedStocks}
              setAddedStocks={setAddedStocks}
            />
          </div>
        )}
        <div className="bottom">
          <p>
            remaining quantity: <span>{remainingQuantity}</span>
          </p>
          <div className="buttons">
            <Button
              variant="outlined"
              onClick={() => {
                setCreateNewStock(!createNewStock);
              }}
              sx={{
                "&:hover": {
                  borderColor: "var(--color-secondary)",
                },
              }}
            >
              {createNewStock ? `Stocks List` : `New Stock`}
            </Button>
            <Button
              variant="outlined"
              onClick={handleConfirm}
              sx={{
                "&:hover": {
                  borderColor: "var(--color-secondary)",
                },
              }}
              disabled={remainingQuantity !== 0}
            >
              {t("confirm")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveredStatusPopUp;
