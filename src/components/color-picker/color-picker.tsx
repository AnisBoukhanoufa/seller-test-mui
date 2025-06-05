import { useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { ChromePicker } from "react-color";
import { t } from "i18next";

const CustomColorPicker = ({
  open,
  anchorEl,
  onClose,
  onConfirm,
  index,
  selectedColor,
  setSelectedColor,
}) => {

  const handleColorChangeComplete = (color) => {
    setSelectedColor(color.hex);
  };

  const handleConfirm = (index) => {
    onConfirm(index);
    onClose();
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
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
          onClick={() => {
            handleConfirm(index);
          }}
          style={{ marginTop: 10 }}
        >
          {t("confirm")}
        </Button>
      </div>
    </Popover>
  );
};

export default CustomColorPicker;
