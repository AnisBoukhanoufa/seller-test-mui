import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { t } from "i18next";

const CustomColorInputDialog = ({
  open,
  onClose,
  onConfirm,
  index,
  selectedColor,
  setSelectedColor,
}) => {
  const handleConfirm = () => {
    onConfirm(index);
    onClose();
  };

  return (
    <Dialog
      className="capitalize"
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle className="capitalize">
        <span className="capitalize">{t("enter custom color")}</span>
      </DialogTitle>
      <DialogContent>
        <TextField
          label={t("value")}
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          {t("cancel")}
        </Button>
        <Button onClick={handleConfirm} variant="contained" color="primary">
          {t("confirm")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomColorInputDialog;
