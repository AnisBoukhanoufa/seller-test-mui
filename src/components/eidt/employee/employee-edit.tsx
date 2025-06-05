import { useEffect, useState } from "react";
import "./employee-edit.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { updateEmployee } from "state/api-calls/employee-calls";
import { useDispatch } from "react-redux";

const EmployeeEdit = ({ param }: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const [phone1Value, setPhone1Value] = useState(param.employeeInfo.phone1);
  const [phone2Value, setPhone2Value] = useState(param.employeeInfo.phone2);

  useEffect(() => {
    setData({ ...data, phone1: phone1Value });
  }, [phone1Value]);

  useEffect(() => {
    setData({ ...data, phone2: phone2Value });
  }, [phone2Value]);

  const handleInput = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleUpdate = () => {
    try {
      updateEmployee(param.employeeInfo._id, data, dispatch);
    } catch (err) {
      console.log(err);
    }
    param.setOpen(false);
    param.setRefresh(!param.refresh);
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
              defaultValue={param.employeeInfo.username}
              label={t("username")}
              variant="outlined"
              onChange={handleInput}
            />

            <TextField
              fullWidth
              id="firstName"
              defaultValue={param.employeeInfo.firstName}
              label={t("firstName")}
              variant="outlined"
              onChange={handleInput}
            />
            <TextField
              fullWidth
              id="lastName"
              defaultValue={param.employeeInfo.lastName}
              label={t("lastName")}
              variant="outlined"
              onChange={handleInput}
            />
            {/* <PhoneInput
              country={"dz"}
              inputProps={{ default: param.employeeInfo.phone1 }}
              value={phone1Value}
              onChange={setPhone1Value}
            />
            <PhoneInput
              country={"dz"}
              inputProps={{ default: param.employeeInfo.phone2 }}
              value={phone2Value}
              onChange={setPhone2Value}
            /> */}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={param.handleClose}>{t("cancel")}</Button>
          <Button onClick={handleUpdate}>{t("update")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmployeeEdit;
