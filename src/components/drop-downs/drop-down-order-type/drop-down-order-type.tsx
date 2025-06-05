import { memo, useEffect, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { t } from "i18next";
import { EnumOrderTypes } from "statics/enums";
import "./drop-down-order-type.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DropDownOrderType = memo(
  ({ queryFilter, setQueryFilter, showAll = false }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItem, setSelectedItem] = useState(
      queryFilter.type || (showAll ? "all" : EnumOrderTypes.default)
    );
    const open = Boolean(anchorEl); // Boolean to check if the menu is open

    useEffect(() => {
      if (queryFilter.type) setSelectedItem(queryFilter.type);
      else setSelectedItem(showAll ? "all" : EnumOrderTypes.default);
    }, [queryFilter.type, showAll]);
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
          className={`type cellWithStatus ${t(selectedItem, {
            lng: "en",
          })} btn`}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {t(selectedItem) || t(showAll ? "all" : EnumOrderTypes.default)}
        </Button>
        <Menu
          anchorEl={anchorEl} // The menu is anchored to this element
          open={open} // The menu is open if open is true
          onClose={() => handleClose(selectedItem)} // The menu is closed if this function is called
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {showAll && (
          <MenuItem
            onClick={() => {
              const updatedFilter = { ...queryFilter };
              delete updatedFilter.type; // Remove the 'type' key from the queryFilter
              setQueryFilter(updatedFilter);
              handleClose("all");
            }}
          >
            <span className="capitalize"> {t("all")}</span>
          </MenuItem>
        )}
          {Object.values(EnumOrderTypes).map((type) => (
            <MenuItem
              onClick={() => {
                setQueryFilter({ ...queryFilter, type: type });
                handleClose(type);
              }}
            >
              <span className="capitalize"> {t(type)}</span>
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
);

export default DropDownOrderType;
