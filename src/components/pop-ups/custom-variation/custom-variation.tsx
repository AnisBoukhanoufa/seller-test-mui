import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { t } from "i18next";

const CustomVariationDialog = ({
  open,
  onClose,
  detailValue,
  valuesValue,
  onDetailChange,
  onValuesChange,
  detailError,
  valuesError,
  onSubmit,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="dialog-title capitalize">
        <span className="capitalize">{t("add new variation")}</span>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label={t("detail name")}
          fullWidth
          value={detailValue}
          onChange={(e) => {
            onDetailChange(e.target.value);
          }}
          error={!!detailError}
          helperText={detailError}
        />
        <TextField
          margin="dense"
          label={t("values (comma-separated)")}
          fullWidth
          value={valuesValue}
          onChange={(e) => {
            onValuesChange(e.target.value);
          }}
          error={!!valuesError}
          helperText={valuesError}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          <span className="capitalize">{t("cancel")}</span>
        </Button>
        <Button onClick={onSubmit} color="primary">
          <span className="capitalize">{t("add")}</span>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomVariationDialog;
