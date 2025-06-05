import { useContext, useEffect, useState } from "react";
import "./create-new-stock.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  Autocomplete,
  // Button,
  // Dialog,
  // DialogContent,
  // DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { baseRequest } from "utils/request-methods";
import { SourcingContext } from "pages/sourcings/single-sourcing/single-sourcing";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { options } from "jodit/esm/core/helpers";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const NewStock = ({
  setCreationStockNote,
  remainingQuantity,
  addedStocks,
  setAddedStocks,
}) => {
  const { sourcingInfo } = useContext(SourcingContext);
  const [warehouses, setWarehouses] = useState([]);
  const [alertQuantity, setAlertQuantity] = useState(false);
  const [negativeQuantity, setNegativeQuantity] = useState(false);
  const [currentStock, setCurrentStock] = useState({
    warehouseId: "",
    quantity: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await baseRequest.get(
        `/warehouse/name-pagination?country=${sourcingInfo.destinationCountry}`,
      );
      setWarehouses(res.data.list);
    };
    fetchData();
  }, [sourcingInfo.destinationCountry]);

  const handleAddStock = () => {
    if (currentStock.warehouseId && currentStock.quantity) {
      if (currentStock.quantity <= remainingQuantity) {
        setAddedStocks([currentStock, ...addedStocks]);
        setCurrentStock({
          warehouseId: "",
          quantity: 0,
        });
        setAlertQuantity(false);
      } else setAlertQuantity(true);
    }
  };

  const handleDeleteStock = (index) => {
    const updatedStocks = addedStocks.filter((_, i) => i !== index);
    setAddedStocks(updatedStocks);
  };

  const availableWarehouses = warehouses.filter(
    (warehouse) =>
      !addedStocks.some((stock) => stock.warehouseId === warehouse._id),
  );

  return (
    <div className="create-stock-container">
      <p className="key">Select Warehouse Destination:</p>
      <div className="sourcing-warehouse">
        <div className="warehouses">
          <div className="add-warehouse">
            <Autocomplete
              sx={{ width: 250 }}
              id="warehouses"
              options={availableWarehouses}
              getOptionLabel={(option) => option.name}
              value={
                availableWarehouses.find(
                  (option) => option._id === currentStock.warehouseId,
                ) || null
              }
              onChange={(event: any, value: any) => {
                if (value) {
                  setCurrentStock({
                    ...currentStock,
                    warehouseId: value._id,
                    warehouseName: value.name,
                  });
                } else {
                  setCurrentStock({
                    ...currentStock,
                    warehouseId: "",
                    warehouseName: "",
                  }); // Handle clearing the selection
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="warehouses"
                  placeholder="warehouses"
                />
              )}
            />
            <TextField
              label="qtt"
              type="number"
              value={currentStock.quantity || ""}
              onChange={(e) => {
                setCurrentStock({
                  ...currentStock,
                  quantity: Number(e.target.value),
                });
                if (
                  e.target.value <= remainingQuantity &&
                  0 <= e.target.value
                ) {
                  setAlertQuantity(false);
                  setNegativeQuantity(false);
                } else {
                  if (0 >= e.target.value) {
                    setCurrentStock({
                      ...currentStock,
                      quantity: e.target.value,
                    });
                    setNegativeQuantity(true);
                  }
                  if (e.target.value >= remainingQuantity) {
                    setAlertQuantity(true);
                  }
                }
              }}
              sx={{ width: 70 }}
              error={
                currentStock.quantity < 0 ||
                currentStock.quantity > remainingQuantity
              }
            />
            <IconButton
              className="add-button"
              onClick={handleAddStock}
              disabled={alertQuantity || negativeQuantity}
            >
              <AddCircleOutlineIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </div>
          {alertQuantity && (
            <p className="alert">
              Quantity must be less than the remaining quantity
            </p>
          )}
          {negativeQuantity && (
            <p className="alert">Quantity must be greater than 0</p>
          )}
          <div className="stocks-list">
            {addedStocks.map((stock, index) => {
              if (stock.warehouseId)
                return (
                  <div
                    key={index}
                    style={{
                      marginTop: "8px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {`- warehouse ${stock.warehouseName}, quantity: ${stock.quantity}`}
                    <IconButton onClick={() => handleDeleteStock(index)}>
                      <HighlightOffIcon sx={{ fontSize: 20, color: "red" }} />
                    </IconButton>
                  </div>
                );
            })}
          </div>
        </div>
        <TextField
          id="note"
          className="note"
          label="Note"
          // multiline
          // rows={3}
          onInput={(e) => {
            setCreationStockNote(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default NewStock;
