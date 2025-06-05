import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next"; // Import useTranslation if you're using react-i18next

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  const { t } = useTranslation(); // Using the translation hook for localization

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>
          {t("Are you sure you want to save the changes to this simulation?")}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {t("Cancel")}
        </Button>
        <Button onClick={onConfirm} color="primary">
          {t("Confirm")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
