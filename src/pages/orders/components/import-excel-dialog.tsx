import React from "react";
import {
  Typography,
  Button,
  Dialog,
  CircularProgress,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { t } from "i18next";

interface ImportExcelProps {
  open: boolean;
  uploadOrders: boolean;
  handleCloseModal: () => void;
  errorMessages: string[];
  handleConfirmExcelImport: () => void;
}

const ImportExcel: React.FC<ImportExcelProps> = ({
  open,
  handleCloseModal,
  errorMessages,
  handleConfirmExcelImport,
  uploadOrders,
}) => {
  return (
    <>
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>
          {errorMessages.length > 0 ? "Error Details" : "Select Seller"}
        </DialogTitle>
        <DialogContent>
          {errorMessages.length > 0 ? (
            <Typography variant="body2" color="error">
              {errorMessages.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </Typography>
          ) : (
            t(
              "Do you want to import these orders? Please make sure all details are correct before proceeding."
            )
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>{t("close")}</Button>
          {errorMessages.length === 0 && (
            <Button onClick={handleConfirmExcelImport}>{t("save")}</Button>
          )}
        </DialogActions>
      </Dialog>
      <Dialog open={uploadOrders} PaperProps={{ style: { padding: "1rem" } }}>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            minWidth: "250px",
          }}
        >
          <CircularProgress />
          <Typography>Uploading file, please wait...</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImportExcel;
