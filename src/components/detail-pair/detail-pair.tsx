import React, { useState } from "react";
import {
  Select,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Popover,
  IconButton,
} from "@mui/material";
import { t } from "i18next";
import { ChromePicker } from "react-color";
import DeleteIcon from '@mui/icons-material/Delete';
import "./detail-pair.scss";

const DetailPair = ({
  details,
  dropDownDetails,
  setDropDownDetails,
  setDetails,
  detailPair,
  index,
  subProducts,
  editVariations,
  setCustomVariations,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [newDetail, setNewDetail] = useState("");
  const [newDetailValues, setNewDetailValues] = useState("");
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  const handleDetailChange = (index, event) => {
    const value = event.target.value;
    if (value === "Other") {
      setOpenDialog(true);
    } else {
      const newDetails = [...details];
      newDetails[index].detail = value;
      newDetails[index].value = ""; // Reset the value when detail changes
      setDetails(newDetails);
    }
  };

  const handleValueChange = (index, event) => {
    const value = event.target.value;
    if (value === "Custom") {
      setColorPickerOpen(true);
      setAnchorEl(event.currentTarget);
    } else {
      const newDetails = [...details];
      newDetails[index].value = value;
      setDetails(newDetails);
    }
  };

  const handleColorChangeComplete = (color) => {
    setSelectedColor(color.hex);
  };

  const [addNewVariationErrorMessage, setAddNewVariationErrorMessage] =
    useState("");
  const [newVariationvaluesErrorMessage, setNewVariationvaluesErrorMessage] =
    useState("");

  const handleAddNewDetail = () => {
    setAddNewVariationErrorMessage("");
    setNewVariationvaluesErrorMessage("");
    const isDetailExisting = dropDownDetails.some(
      (detail) => detail.detail.toLowerCase() === newDetail.toLowerCase()
    );
    if (isDetailExisting) {
      setAddNewVariationErrorMessage("This detail name already exists.");
      return;
    }
    if (!newDetail) {
      setAddNewVariationErrorMessage("Please enter a detail name.");
      return;
    }
    if (!newDetailValues) {
      setNewVariationvaluesErrorMessage("Please enter values.");
      return;
    }
    const newDetailObject = {
      detail: newDetail,
      values: Array.from(
        new Set(
          newDetailValues
            .split(",")
            .filter((value) => value.trim() !== "")
            .map((val) => val.trim())
        )
      ),
      isOther: true,
    };

    setCustomVariations((prevValue) => [
      ...prevValue,
      { detail: newDetailObject.detail, values: newDetailObject.values },
    ]);
    setDropDownDetails([...dropDownDetails, newDetailObject]);

    setNewDetail("");
    setNewDetailValues("");
    setOpenDialog(false);
  };

  const handleConfirmColor = () => {
    const newDetails = [...details];
    newDetails[index].value = selectedColor;
    setDetails(newDetails);
    const colorsValues = dropDownDetails.find(
      (detail) => detail.detail === "color"
    );
    setDropDownDetails([
      ...dropDownDetails.filter((detail) => detail.detail !== "color"),
      {
        detail: colorsValues.detail,
        values: [...colorsValues.values, selectedColor],
      },
    ]);
    setCustomVariations((prevValue) => {
      const colorsValues = prevValue.find(
        (detail) => detail.detail === "color"
      );
      const newCustomVariations = [
        ...prevValue.filter((detail) => detail.detail !== "color"),
        {
          detail: "color",
          values: [...(colorsValues?.values || []), selectedColor],
        },
      ];
      return newCustomVariations;
    });
    setColorPickerOpen(false);
  };

  // Function to handle deletion of a detail pair
  const handleDeleteDetailPair = (index) => {
    const newDetails = [...details];
    newDetails.splice(index, 1); // Remove the selected detail pair
    setDetails(newDetails);
  };

  // Add a check to display the selected color in the MenuItem
  const selectedDetail = dropDownDetails.find(
    (element) => element.detail === detailPair.detail
  );
  const alreadyChosenDetails = details.map((element) => element.detail);

  return (
    <>
      <Grid container spacing={2} key={index} style={{ marginBottom: 16 }}>
        <Grid item xs={5} style={{ position: "relative" }}>
          <FormControl fullWidth size="small">
            <InputLabel>Detail</InputLabel>
            <Select
              value={detailPair.detail || ""}
              onChange={(event) => handleDetailChange(index, event)}
              variant="outlined"
              label={t("detail")}
              disabled={!editVariations && subProducts?.length > 0}
            >
              {dropDownDetails
                .filter(
                  (element) =>
                    element.detail === detailPair.detail ||
                    !alreadyChosenDetails.includes(element.detail)
                )
                .map((element) => (
                  <MenuItem
                    key={element.detail}
                    className="capitalize"
                    value={element.detail}
                  >
                    {t(element.detail)}
                  </MenuItem>
                ))}
              <MenuItem value="Other">{t("other")}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={5}>
          <FormControl fullWidth size="small">
            <InputLabel>{t("value")}</InputLabel>
            <Select
              value={detailPair.value || ""}
              onChange={(event) => handleValueChange(index, event)}
              variant="outlined"
              label="Value"
              disabled={!detailPair.detail} // Disable until a detail is selected
              className="input-button"
            >
              {selectedDetail && selectedDetail.values
                ? [
                    ...selectedDetail.values.map((value) => {
                      return (
                        <MenuItem
                          key={value}
                          value={value}
                          sx={{ backgroundColor: "#E8E8E8" }}
                          className="color"
                        >
                          {selectedDetail.detail === "color" && (
                            <div
                              style={{
                                backgroundColor: value,
                                width: 20,
                                height: 20,
                                borderRadius: 50,
                                marginRight: 10,
                              }}
                              className="single-color"
                            ></div>
                          )}
                          {value}
                        </MenuItem>
                      );
                    }),
                    selectedDetail.detail === "color" && (
                      <MenuItem
                        sx={{ backgroundColor: "#E8E8E8" }}
                        key="Custom"
                        value="Custom"
                      >
                        {t("custom")}
                      </MenuItem>
                    ),
                  ]
                : []}
            </Select>
          </FormControl>
        </Grid>

        {/* Delete Button */}
        <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="small"
            onClick={() => handleDeleteDetailPair(index)}
            color="danger"
            disabled={subProducts?.length > 0 && !editVariations}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle className="dialog-title capitalize">
          <span className="capitalize">{t("add new variation")}</span>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={t("detail name")}
            fullWidth
            value={newDetail}
            onChange={(e) => {
              setNewDetail(e.target.value);
              setAddNewVariationErrorMessage(""); // Clear error when user starts typing
            }}
            error={!!addNewVariationErrorMessage}
            helperText={addNewVariationErrorMessage}
          />
          <TextField
            margin="dense"
            label={t("values (comma-separated)")}
            fullWidth
            value={newDetailValues}
            onChange={(e) => {
              setNewDetailValues(e.target.value);
              setNewVariationvaluesErrorMessage(""); // Clear error when user starts typing
            }}
            error={!!newVariationvaluesErrorMessage}
            helperText={newVariationvaluesErrorMessage}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            {t("Cancel")}
          </Button>
          <Button onClick={handleAddNewDetail} color="primary">
            {t("Add")}
          </Button>
        </DialogActions>
      </Dialog>

      <Popover
        open={colorPickerOpen}
        anchorEl={anchorEl}
        onClose={() => setColorPickerOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div style={{ padding: 16 }}>
          <ChromePicker
            color={selectedColor}
            onChangeComplete={handleColorChangeComplete}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirmColor}
            style={{ marginTop: 10 }}
          >
            {t("confirm")}
          </Button>
        </div>
      </Popover>
    </>
  );
};

export default DetailPair;
