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
import { EnumProductSellerStatus } from "statics/enums";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";

import { updateStatusSubProductNormalSeller } from "state/api-calls/sub-product-normal-seller-calls";

const DropdownSubProductNormalSellerStatus = ({
  setChoosenSubProduct,
  choosenSubProduct,
  initStatus,
}) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(initStatus);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [pendingStatus, setPendingStatus] = useState(null);

  const open = Boolean(anchorEl);

  const error = useSelector((state) => state.productNormalSeller.error);

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
      const response = await updateStatusSubProductNormalSeller(
        choosenSubProduct._id,
        {
          status: pendingStatus,
        },
        dispatch,
      );
      setChoosenSubProduct(response);
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
        {selectedItem === EnumProductSellerStatus.new && (
          <MenuItem
            key={t(EnumProductSellerStatus.test)}
            onClick={() => handleClose(EnumProductSellerStatus.test)}
          >
            {t(EnumProductSellerStatus.test)}
          </MenuItem>
        )}
        {selectedItem === EnumProductSellerStatus.test && (
          <MenuItem
            key={t(EnumProductSellerStatus.sourcing)}
            onClick={() => handleClose(EnumProductSellerStatus.sourcing)}
          >
            {t(EnumProductSellerStatus.sourcing)}
          </MenuItem>
        )}
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

export default DropdownSubProductNormalSellerStatus;
