import { useEffect, useState } from "react";
import { Menu, MenuItem, styled } from "@mui/material";
import { t } from "i18next";
import { EnumPaymentType } from "statics/enums";
// import "./drop-down-order-paymentType.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const RotatingIcon = styled(ArrowForwardIosIcon)(({ rotate }) => ({
  transform: rotate ? "rotate(90deg)" : "rotate(0deg)",
  transition: "transform 0.2s ease-in-out",
}));

const DropDownPaymentType = ({ queryFilter, setQueryFilter }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(
    queryFilter?.paymentType || EnumPaymentType.withdraw
  );
  const open = Boolean(anchorEl); // Boolean to check if the menu is open

  useEffect(() => {
    if (queryFilter?.paymentType) setSelectedItem(queryFilter?.paymentType);
    else setSelectedItem("all payments");
  }, [queryFilter?.paymentType]);
  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    setAnchorEl(event.currentTarget); // Set the anchor element to the button
  };

  const handleClose = (event, item) => {
    event.stopPropagation();
    event.preventDefault();

    setAnchorEl(null); // Close the menu by setting anchorEl to null
    if (item) {
      setSelectedItem(item); // Set the selected item
    }
  };

  return (
    <>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          cursor: "pointer",
        }}
        onClick={handleClick}
        className="title uppercase"
      >
        {t(selectedItem) || t(EnumPaymentType.withdraw)}
        <RotatingIcon rotate={open} fontSize="inherit" />
      </span>
      <Menu
        anchorEl={anchorEl} // The menu is anchored to this element
        open={open} // The menu is open if open is true
        onClose={(event) => handleClose(event, selectedItem)} // The menu is closed if this function is called
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {Object.values(EnumPaymentType).map((paymentType) => (
          <MenuItem
            onClick={(event) => {
              setQueryFilter((prevQuery) => ({
                ...prevQuery,
                paymentType: paymentType,
              }));
              handleClose(event, paymentType);
            }}
          >
            <span className="capitalize"> {t(paymentType)}</span>
          </MenuItem>
        ))}
        <MenuItem
          onClick={(event) => {
            setQueryFilter((prevQuery) => {
              const query = { ...prevQuery };
              delete query.paymentType;
              return query;
            });
            handleClose(event, "all payments");
          }}
        >
          <span className="capitalize"> {t("all payments")}</span>
        </MenuItem>
      </Menu>
    </>
  );
};

export default DropDownPaymentType;
