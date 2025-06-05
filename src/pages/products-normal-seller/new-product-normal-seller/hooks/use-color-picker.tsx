import { useState } from "react";

const useColorPicker = (
  currentDetails,
  setCurrentDetails,
  setDropDownDetails,
  setCustomVariations
) => {
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const openColorPicker = () => {
    setColorPickerOpen(true);
  };

  const closeColorPicker = () => {
    setColorPickerOpen(false);
  };

  const handleConfirmColor = (index) => {
    // Update `currentDetails`
    const updatedDetails = currentDetails.map((detail, idx) =>
      idx === index ? { ...detail, value: selectedColor } : detail
    );
    setCurrentDetails(updatedDetails);

    // Update `dropDownDetails`
    setDropDownDetails((prevDetails) => ({
      ...prevDetails,
      color: [...(prevDetails.color || []), selectedColor],
    }));

    // Update `customVariations`
    setCustomVariations((prevVariations) => ({
      ...prevVariations,
      color: [...(prevVariations.color || []), selectedColor],
    }));

    closeColorPicker();
  };

  return {
    colorPickerOpen,
    selectedColor,
    setSelectedColor,
    openColorPicker,
    closeColorPicker,
    handleConfirmColor,
  };
};

export default useColorPicker;
