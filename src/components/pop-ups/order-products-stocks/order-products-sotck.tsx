import { useState } from "react";
import "./order-products-sotck.scss";

import { useTranslation } from "react-i18next";

import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import StockCardSelect from "components/stock-card-select/stock-card-select";

const StocksPopUp = ({ openStocks, setOpenStocks, stocks }: any) => {
  // const dispatch = useDispatch();
  const { t } = useTranslation();

  //   const [sourcingInfo, setSourcingInfo] = useState(selectParams.response);
  //   const [stocks, setStocks] = useState([]);
  // const [warehousNewStock, setWarehouseNewStock] = useState(null);
  const [selectedStockId, setSelectedStockId] = useState(null);
  const [createNewStock, setCreateNewStock] = useState(false);
  // const [creationStockNote, setCreationStockNote] = useState("");

  //   useEffect(() => {
  //     if (selectParams.response) {
  //       setSourcingInfo(selectParams.response);
  //     }
  //   }, [selectParams.response]);

  //   const handleConfirm = () => {
  //     if (createNewStock) {
  //       setNewStock(
  //         {
  //           volume: sourcingInfo.volume,
  //           weight: sourcingInfo.weight,
  //           quantity: sourcingInfo.quantity,
  //           sourcingId: sourcingInfo._id,
  //           warehouseId: warehousNewStock._id,
  //           productId: sourcingInfo.productId._id,
  //           note: creationStockNote,
  //         },
  //         dispatch
  //       );
  //       setWarehouseNewStock(null);
  //       setOpenStocks(false);
  //       setCreationStockNote("");
  //       selectParams.resolve(selectParams.response);
  //     } else {
  //       if (selectedStockId) {
  //         setOpenStocks(false);
  //         setSelectedStockId(null);
  //         addToExistingStock(
  //           selectedStockId,
  //           { sourcingId: sourcingInfo._id },
  //           dispatch
  //         );
  //         selectParams.resolve(selectParams.response);
  //       }
  //     }
  //   };

  //   const handleClose = () => {
  //     setOpenStocks(false);
  //     setSelectedStockId(null);
  //     setWarehouseNewStock(null);
  //     setCreationStockNote("");
  //     selectParams.resolve(selectParams.oldRow);
  //     // selectParams.resolve(new Error("Required"));
  //     console.log("close");
  //   };
  return (
    <Dialog
      open={openStocks}
      onClose={() => {
        setOpenStocks(false);
      }}
      sx={{
        "& .MuiDialog-paper": {
          width: "90vw", // 70% of viewport width
          height: "70vh", // 70% of viewport height
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

      <DialogContent
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
          },
        }}
        className="dialog-content"
      >
        <div className="stocks-container">
          <StockCardSelect
            stocks={stocks}
            setSelectedStockId={setSelectedStockId}
            selectedStockId={selectedStockId}
          />
        </div>

        <div className="buttons">
          <Button
            variant="outlined"
            // onClick={handleConfirm}
            sx={{
              "&:hover": {
                borderColor: "var(--color-secondary)",
              },
            }}
            disabled={!selectedStockId === null}
          >
            {t("confirm")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StocksPopUp;
