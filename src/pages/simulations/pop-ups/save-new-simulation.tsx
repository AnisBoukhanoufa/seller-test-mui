import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next"; // Import useTranslation hook if you're using react-i18next

interface SimulationNameDialogProps {
  open: boolean;
  onClose: () => void;
  newSimulationName: string;
  setNewSimulationName: (name: string) => void;
  onConfirm: () => void;
}

const SimulationNameDialog: React.FC<SimulationNameDialogProps> = ({
  open,
  onClose,
  newSimulationName,
  setNewSimulationName,
  onConfirm,
}) => {
  const { t } = useTranslation(); // Using the translation hook for localization

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>
          {t("Please provide a name for the new simulation.")}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label={t("Simulation Name")}
          type="text"
          fullWidth
          value={newSimulationName}
          onChange={(e) => setNewSimulationName(e.target.value)}
        />
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

export default SimulationNameDialog;
