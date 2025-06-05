import { useState } from "react";
import "./stock-edit.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { updateStock } from "state/api-calls/stock-calls";

const EditStockPopUp = ({ editableStock, editPopUp, setEditPopUp }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [newData, setNewData] = useState({ damage: editableStock.damage });
  //   useEffect(() => {
  //     setNewData({ damage: editableStock.damage });
  //   }, []);
  const handleChange = (e, key) => {
    setNewData({ ...newData, [key]: e.target.value });
  };

  const handleCancel = () => {
    setNewData(null);
    setEditPopUp(false);
  };

  const handleConfirm = () => {
    try {
      updateStock(editableStock._id, newData, dispatch);
    } catch (err) {
      console.log(err);
    }
    setNewData(null);
    setEditPopUp(false);
  };

  return (
    <Dialog
      open={editPopUp}
      onClose={() => {
        handleCancel();
      }}
    >
      <DialogTitle
        sx={{
          color: "var(--color-secondary)",
          fontSize: "24px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Edit Stock
      </DialogTitle>
      <DialogContent className="dialog-content">
        <div className="create-stock-container">
          <div className="sourcing-warehouse">
            <TextField
              fullWidth
              id="damage"
              label={t("damage")}
              variant="outlined"
              onChange={(e) => {
                handleChange(e, "damage");
              }}
              value={newData.damage}
              type="number"
            />

            <TextField
              id="note"
              className="note"
              label="Note"
              multiline
              rows={3}
              onInput={(e) => {
                handleChange(e, "note");
              }}
              // defaultValue="Default Value"
            />
          </div>
          <div className="buttons">
            <Button
              variant="outlined"
              onClick={() => {
                handleCancel();
              }}
            >
              cancel
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                handleConfirm();
              }}
            >
              {t("confirm")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditStockPopUp;
