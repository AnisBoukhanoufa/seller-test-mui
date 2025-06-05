import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { updateWarehouse } from "state/api-calls/warehouse-calls";
const WarehouseEdit = ({ param }: any) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  // const warehouseCountry = useSelector((state: any) =>
  //   state.warehouse.warehouses.find(
  //     (warehouse: any) => warehouse._id === param.warehouseInfo._id
  //   )
  // );
  const [countries, setCountries] = useState(param.countries);

  // useEffect(() => {
  //   setCountries(warehouseCountry?.country);
  // }, []);

  const { t } = useTranslation();

  const handleInput = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleUpdate = () => {
    try {
      updateWarehouse(param.warehouseInfo._id, data, dispatch);
    } catch (err) {
      console.log(err);
    }

    param.setRefresh(!param.refresh);
    param.setOpen(false);
  };
  return (
    <Dialog fullWidth open={param.open} onClose={param.handleClose}>
      <DialogTitle>{t("edit")}</DialogTitle>
      <DialogContent>
        <div className="edit">
          <TextField
            fullWidth
            id="name"
            defaultValue={param.warehouseInfo.name}
            label={t("name")}
            variant="outlined"
            onChange={param.handleInput}
          />
          <TextField
            fullWidth
            id="address"
            defaultValue={param.warehouseInfo.address}
            label={t("address")}
            variant="outlined"
            onChange={handleInput}
          />
          <TextField
            fullWidth
            id="district"
            defaultValue={param.warehouseInfo.district}
            label={t("district")}
            variant="outlined"
            onChange={handleInput}
          />
          <TextField
            fullWidth
            id="state"
            defaultValue={param.warehouseInfo.state}
            label={t("state")}
            variant="outlined"
            onChange={handleInput}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {t("country")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={{ country: param.countries }}
              value={countries}
              label={t("country")}
              onChange={(event, value) => {
                setData({ ...data, country: event.target.value });
                setCountries(event.target.value);
              }}
            >
              <MenuItem value={70}>{t("KSA")}</MenuItem>
              <MenuItem value={71}>{t("UAE")}</MenuItem>
              <MenuItem value={72}>{t("Qatar")}</MenuItem>
              <MenuItem value={73}>{t("Kuwait")}</MenuItem>
              <MenuItem value={74}>{t("Bahrain")}</MenuItem>
              <MenuItem value={75}>{t("Oman")}</MenuItem>
            </Select>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={param.handleClose}>{t("cancel")}</Button>
        <Button onClick={handleUpdate}>{t("update")}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default WarehouseEdit;
