import "./sellerEdit.scss";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { updateSeller } from "state/api-calls/seller-calls";
import { useDispatch } from "react-redux";

const SellerEdit = ({ param }: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const [phone1Value, setPhone1Value] = useState(param.sellerInfo.phone1);
  const [phone2Value, setPhone2Value] = useState(param.sellerInfo.phone2);
  console.log(param);
  const handleInput = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };
  console.log(param);
  const handleUpdate = () => {
    try {
      updateSeller(param.sellerInfo._id, data, dispatch);
    } catch (err) {
      console.log(err);
    }
    param.setOpen(false);
  };
  return (
    <div>
      <Dialog fullWidth open={param.open} onClose={param.handleClose}>
        <DialogTitle>{t("edit")}</DialogTitle>
        <DialogContent>
          <div className="edit">
            <TextField
              fullWidth
              id="username"
              defaultValue={param.sellerInfo.username}
              label={t("username")}
              variant="outlined"
              onChange={param.handleInput}
            />

            <TextField
              fullWidth
              id="firstName"
              defaultValue={param.sellerInfo.firstName}
              label={t("firstname")}
              variant="outlined"
              onChange={handleInput}
            />
            <TextField
              fullWidth
              id="lastName"
              defaultValue={param.sellerInfo.lastName}
              label={t("lastame")}
              variant="outlined"
              onChange={handleInput}
            />
            <PhoneInput
              country={"dz"}
              value={phone1Value}
              onChange={setPhone1Value}
            />
            <PhoneInput
              country={"dz"}
              value={phone2Value}
              onChange={setPhone2Value}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={param.handleClose}>{t("cancel")}</Button>
          <Button onClick={handleUpdate}>{t("save")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SellerEdit;
