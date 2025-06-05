import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { t } from "i18next";
import { EnumSellerRole } from "statics/enums";
const DropdownRole = ({ initRole, editState, newData, setNewData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(initRole);
  const open = Boolean(anchorEl); // Boolean to check if the menu is open

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element to the button
  };

  const handleClose = (item) => {
    setAnchorEl(null); // Close the menu by setting anchorEl to null
    if (item) {
      setSelectedItem(item); // Set the selected item
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={`cellWithType ${t(selectedItem)}`}
        sx={{
          padding: "1px 20px ",
          fontSize: "14px",
          color: "#ffffff",
          "&.Mui-disabled": {
            bgcolor:
              selectedItem === EnumSellerRole.seller
                ? " var(--color-main)"
                : " var(--color-secondary)",
            color: "#ffffff",
          },
        }}
        disabled={!editState}
      >
        {t(selectedItem)} {/* Display the selected item on the button */}
      </Button>
      <Menu
        anchorEl={anchorEl} // The menu is anchored to this element
        open={open} // The menu is open if open is true
        onClose={() => handleClose(selectedItem)} // The menu is closed if this function is called
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            setNewData({ ...newData, role: EnumSellerRole.seller });
            handleClose(EnumSellerRole.seller);
          }}
        >
          Seller
        </MenuItem>
        <MenuItem
          onClick={() => {
            setNewData({ ...newData, role: EnumSellerRole.affiliate });
            handleClose(EnumSellerRole.affiliate);
          }}
        >
          Affiliate
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownRole;
