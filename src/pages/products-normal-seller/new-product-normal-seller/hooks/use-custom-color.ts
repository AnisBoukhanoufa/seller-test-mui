import { useState } from "react";

const useColorPicker = (
  currentDetails,
  setCurrentDetails,
  setDropDownDetails,
  setCustomVariations
) => {
  const [colorDialogOpen, setColorDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [colorValue, setColorValue] = useState("");

  const openColorDialog = (event) => {
    setAnchorEl(event.currentTarget);
    setColorDialogOpen(true);
  };

  const closeColorDialog = () => {
    setColorDialogOpen(false);
  };

  const handleConfirmColor = (index) => {
    // Update `currentDetails`
    const updatedDetails = currentDetails.map((detail, idx) =>
      idx === index ? { ...detail, value: colorValue } : detail
    );
    setCurrentDetails(updatedDetails);

    // Update `dropDownDetails`
    setDropDownDetails((prevDetails) => ({
      ...prevDetails,
      color: [...(prevDetails.color || []), colorValue],
    }));

    // Update `customVariations`
    setCustomVariations((prevVariations) => ({
      ...prevVariations,
      color: [...(prevVariations.color || []), colorValue],
    }));

    closeColorDialog();
  };

  return {
    colorPickerOpen: colorDialogOpen,
    anchorEl,
    colorValue,
    setColorValue,
    openColorDialog,
    closeColorDialog,
    handleConfirmColor,
  };
};

export default useColorPicker;
