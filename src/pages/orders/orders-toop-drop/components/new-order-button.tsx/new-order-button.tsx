import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { t } from "i18next";
import { EnumCountry } from "statics/enums";

const NewOrderButton = () => {
  const [anchorElNewOrder, setAnchorElNewOrder] = useState(null);
  const openButton = Boolean(anchorElNewOrder);

  const handleClickButton = (event) => {
    setAnchorElNewOrder(event.currentTarget);
  };

  const handleCloseButton = () => {
    setAnchorElNewOrder(null);
  };

  return (
    <div>
      <Button
        variant="outlined"
        className="secondary-button"
        onClick={handleClickButton}
      >
        <span className="capitalize">{t("new")}</span>
      </Button>
      <Menu
        className="new-list"
        anchorEl={anchorElNewOrder}
        open={openButton}
        onClose={handleCloseButton}
      >
        <MenuItem
          sx={{
            borderColor: "var(--color-secondary)",
            backgroundColor: "white",
            borderBottom: "1px solid #E6E6E6",
            color: "var(--color-secondary)",
            "&:hover": {
              backgroundColor: "var(--color-secondary)",
              color: "white",
            },
          }}
          onClick={() => handleCloseButton("from-your-balance")}
        >
          <Link to={`/orders-toop-drop/new?country=local`} className="link">
            {t("local order")}
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            borderColor: "var(--color-secondary)",
            backgroundColor: "white",
            color: "var(--color-secondary)",
            "&:hover": {
              backgroundColor: "var(--color-secondary)",
              color: "white",
            },
          }}
          onClick={handleCloseButton}
        >
          <Link
            to={`/orders-toop-drop/new?country=${EnumCountry.KSA}`}
            className="link"
          >
            {t("international from KSA")}
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            borderColor: "var(--color-secondary)",
            backgroundColor: "white",
            color: "var(--color-secondary)",
            "&:hover": {
              backgroundColor: "var(--color-secondary)",
              color: "white",
            },
          }}
          onClick={handleCloseButton}
        >
          <Link
            to={`/orders-toop-drop/new?country=${EnumCountry.UAE}`}
            className="link"
          >
            {t("international from UAE")}
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NewOrderButton;
