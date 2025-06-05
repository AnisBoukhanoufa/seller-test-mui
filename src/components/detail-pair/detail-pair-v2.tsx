import {
  Select,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import { t } from "i18next";

import DeleteIcon from "@mui/icons-material/Delete";
import "./detail-pair.scss";
import useCustomVariations from "pages/products-normal-seller/new-product-normal-seller/hooks/use-custom-variation";
import CustomVariationDialog from "components/pop-ups/custom-variation/custom-variation";
import CustomColorInputDialog from "components/pop-ups/custom-color";
import useColorPicker from "pages/products-normal-seller/new-product-normal-seller/hooks/use-color-picker";

const DetailPair = ({
  currentDetails,
  dropDownDetails,
  setDropDownDetails,
  setCurrentDetails,
  detailPair,
  index,
  subProducts,
  editVariations,
  setCustomVariations,
}) => {
  const handleDetailChange = (index, event) => {
    const value = event.target.value;
    if (value === "other") {
      setOpenDialog(true);
    } else {
      const newDetails = [...currentDetails];
      newDetails[index].detail = value;
      newDetails[index].value = "";
      setCurrentDetails(newDetails);
    }
  };

  const handleValueChange = (index, event) => {
    const value = event.target.value;
    if (value === "custom") {
      openColorPicker(event);
    } else {
      const newDetails = [...currentDetails];
      newDetails[index].value = value;
      setCurrentDetails(newDetails);
    }
  };

  //handle cusstom variation
  const {
    newVariationError,
    newDetail,
    newDetailValues,
    openDialog,
    handleAddNewDetail,
    onCloseCustomVariationDialog,
    onDetailChange,
    onValuesChange,
    setOpenDialog,
  } = useCustomVariations(
    dropDownDetails,
    setCustomVariations,
    setDropDownDetails
  );

  // handle pick custom color
  const {
    colorPickerOpen,
    selectedColor,
    setSelectedColor,
    openColorPicker,
    closeColorPicker,
    handleConfirmColor,
  } = useColorPicker(
    currentDetails,
    setCurrentDetails,
    setDropDownDetails,
    setCustomVariations
  );

  // Function to handle deletion of a detail pair
  const handleDeleteDetailPair = (index) => {
    const newDetails = [...currentDetails];
    newDetails.splice(index, 1); // Remove the selected detail pair
    setCurrentDetails(newDetails);
  };

  // Add a check to display the selected color in the MenuItem
  const detailValues = Array.isArray(dropDownDetails[detailPair?.detail])
    ? dropDownDetails[detailPair.detail]
    : Object.keys(dropDownDetails[detailPair?.detail] ?? []);

  const alreadyChosenDetails = currentDetails.map((element) => element.detail);

  //handle render details of the pair
  const getFilteredDetails = () => {
    return Object.keys(dropDownDetails).filter(
      (element) =>
        element === detailPair.detail || !alreadyChosenDetails.includes(element)
    );
  };
  return (
    <>
      <Grid container spacing={2} key={index} style={{ marginBottom: 16 }}>
        <Grid item xs={5} style={{ position: "relative" }}>
          <FormControl fullWidth size="small">
            <InputLabel>{t("detail")}</InputLabel>
            <Select
              value={detailPair.detail || ""}
              onChange={(event) => handleDetailChange(index, event)}
              variant="outlined"
              label={t("detail")}
              disabled={!editVariations && subProducts?.length > 0}
            >
              {getFilteredDetails().map((element) => (
                <MenuItem key={element} className="capitalize" value={element}>
                  {t(element)}
                </MenuItem>
              ))}
              <MenuItem value="other" className="capitalize">
                {t("other")}
              </MenuItem>
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
              {detailValues
                ? [
                    ...detailValues.map((value) => {
                      return (
                        <MenuItem
                          key={value}
                          value={value}
                          sx={{ backgroundColor: "#E8E8E8" }}
                          className="color"
                        >
                          {detailPair.detail === "color" && (
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

                    detailPair.detail === "color" && (
                      <MenuItem
                        sx={{ backgroundColor: "#E8E8E8" }}
                        key="custom"
                        value="custom"
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

      <CustomVariationDialog
        open={openDialog}
        onClose={onCloseCustomVariationDialog}
        detailValue={newDetail}
        valuesValue={newDetailValues}
        onDetailChange={onDetailChange}
        onValuesChange={onValuesChange}
        detailError={newVariationError.errorDetail}
        valuesError={newVariationError.errorValues}
        onSubmit={handleAddNewDetail}
      />

      <CustomColorInputDialog
        open={colorPickerOpen}
        onClose={closeColorPicker}
        onConfirm={handleConfirmColor}
        index={index}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      {/* <CustomColorPicker
        open={colorPickerOpen}
        anchorEl={anchorEl}
        onClose={closeColorPicker}
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
        index={index}
        onConfirm={handleConfirmColor}
      /> */}
    </>
  );
};

export default DetailPair;
