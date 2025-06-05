import { Menu, MenuItem } from "@mui/material";
import { t } from "i18next";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewSourcingButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openButton = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="secondary-button" onClick={handleClick}>
        {t("new")}
      </div>
      <Menu
        className="new-list"
        anchorEl={anchorEl}
        open={openButton}
        onClose={() => handleClose(null)}
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
          onClick={() => handleClose()}
        >
          <Link to={`/sourcings/new?withCod=true`} className="link">
            {t("sourcing with cod toop")}
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
          onClick={() => handleClose()}
        >
          <Link to={`/sourcings/new?withCod=false`} className="link">
            {t("self-sourcing")}
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default NewSourcingButton;
