import { useEffect, useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { t } from "i18next";
// import {  EnumStockProductStatus } from "static/enums";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { baseRequest } from "utils/request-methods";
import { updateStockStatus } from "state/api-calls/stock-calls";
import "./stock-status-drop-down.scss";
import { EnumStockProductStatus } from "statics/enums";

const DropdownStockStatus = ({
  choosenSubProduct,
  initStatus,
  stockId,
  setStocks,
}) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(initStatus);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [pendingStatus, setPendingStatus] = useState(null);

  const open = Boolean(anchorEl);

  const error = useSelector((state) => state.stock.error);

  useEffect(() => {
    setSelectedItem(initStatus);
  }, [initStatus]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
    setAnchorEl(null);
    if (item && item !== selectedItem) {
      setPendingStatus(item); // Store the status that is pending confirmation
      setOpenConfirmDialog(true); // Open the confirmation dialog
    }
  };

  const handleConfirm = async () => {
    setOpenConfirmDialog(false);
    try {
      await updateStockStatus(
        stockId,
        {
          status: pendingStatus,
        },
        dispatch,
      );
      if (!error) {
        //   setSelectedItem(pendingStatus);
        const fetchData = async () => {
          const res = await baseRequest.get(
            `/stock-seller/pagination?productId=${choosenSubProduct._id}`,
          );
          setStocks(res.data.list);
        };
        fetchData();
      }
    } catch (err) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setOpenConfirmDialog(false);
    setPendingStatus(null);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className={`status-button cellWithStatus ${t(selectedItem, { lng: 'en' })}`}
      >
        {t(selectedItem)} <ArrowDropDownIcon />
      </div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(selectedItem)}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <MenuItem
          key="search"
          onClick={() => handleClose(EnumStockProductStatus.available)}
        >
          {t(EnumStockProductStatus.available)}
        </MenuItem>

        <MenuItem
          key="rejected"
          onClick={() => handleClose(EnumStockProductStatus.onHold)}
        >
          {t(EnumStockProductStatus.onHold)}
        </MenuItem>
        <MenuItem
          key="rejected"
          onClick={() => handleClose(EnumStockProductStatus.outOfStock)}
        >
          {t(EnumStockProductStatus.outOfStock)}
        </MenuItem>
      </Menu>
      <Dialog open={openConfirmDialog} onClose={handleCancel}>
        <DialogTitle>Confirm Status Change</DialogTitle>
        <DialogContent>
          {`Are you sure you want to change the status to "${t(
            pendingStatus,
          )}"?`}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const getStyles = (status) => {
  switch (status) {
    case EnumStockProductStatus.available:
      return {
        bgcolor: "rgba(0, 128, 0, 0.05)",
        color: "green",
        padding: "1px 20px",
        fontSize: "14px",
        "&:hover": {
          bgcolor: "rgba(0, 128, 0, 0.1)",
        },
        "&.MuiDisabled": {
          bgcolor: "rgba(0, 128, 0, 0.05)",
          color: "green",
        },
      };
    case EnumStockProductStatus.onHold:
      return {
        bgcolor: "rgba(47, 47, 47, 0.05)",
        color: "rgb(36, 36, 36)",
        padding: "1px 20px",
        fontSize: "14px",
        "&:hover": {
          bgcolor: "rgba(47, 47, 47, 0.1)",
        },
        "&.MuiDisabled": {
          bgcolor: "rgba(47, 47, 47, 0.05)",
          color: "rgb(36, 36, 36)",
        },
      };
    case EnumStockProductStatus.outOfStock:
      return {
        bgcolor: "rgba(255, 0, 0, 0.05)",
        color: "red",
        padding: "1px 20px",
        fontSize: "14px",
        "&:hover": {
          bgcolor: "rgba(255, 0, 0, 0.1)",
        },
        "&.MuiDisabled": {
          bgcolor: "rgba(255, 0, 0, 0.05)",
          color: "red",
        },
      };

    default:
      return {};
  }
};

export default DropdownStockStatus;
