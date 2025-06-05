import { useEffect, useMemo, useState } from "react";
import "./sourcing-edit.scss";
import {
  Button,
  Checkbox,
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
import { useTranslation } from "react-i18next";
import countryList from "react-select-country-list";
import { EnumSourcingServices } from "statics/enums";
import { useDispatch } from "react-redux";
import { updateSourcing } from "state/api-calls/sourcing-calls";

const SourcingEdit = ({ sourcingInfo, open, setOpen, handleClose }: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleUpdate = () => {
    try {
      updateSourcing(sourcingInfo._id, newData, dispatch);
    } catch (err) {
      console.log(err);
    }
    setOpen(false);
    // param.setRefresh(!param.refresh);
  };
  const countrys = useMemo(
    () => [
      { value: "CN", label: "China" },
      ...countryList()
        .getData()
        .filter((e) => e.value !== "CN" && e.value !== "IL"),
    ],
    [],
  );

  const [sourcingMethod, setSourcingMethod] = useState(
    sourcingInfo.fromBalance,
  );

  // const [oldData, setOldData] = useState(sourcingInfo);
  console.log(sourcingInfo);
  const [operations, setOperations] = useState({
    check: sourcingInfo.operations?.includes(EnumSourcingServices.check),
    search: sourcingInfo.operations?.includes(EnumSourcingServices.search),
    shipping: sourcingInfo.operations?.includes(EnumSourcingServices.shipping),
    custom: sourcingInfo.operations?.includes(EnumSourcingServices.custom),
  });

  const [newData, setNewData] = useState({
    amount: sourcingInfo.amount,
    description: sourcingInfo.description,
    fromBalance: sourcingInfo.fromBalance,
    operations: sourcingInfo.operations,
    volume: sourcingInfo.volume,
    weight: sourcingInfo.weight,
    numberOfCartoons: sourcingInfo.numberOfCartoons,
    destinationCountry: sourcingInfo.destinationCountry,
    sourceCountry: sourcingInfo.sourceCountry,
  });

  const handleCancel = (event) => {
    setNewData({
      amount: sourcingInfo.amount,
      description: sourcingInfo.description,
      fromBalance: sourcingInfo.fromBalance,
      operations: sourcingInfo.operations,
      volume: sourcingInfo.volume,
      weight: sourcingInfo.weight,
      numberOfCartoons: sourcingInfo.numberOfCartoons,
      destinationCountry: sourcingInfo.destinationCountry,
      sourceCountry: sourcingInfo.sourceCountry,
    });
    setOpen(false);
    setSourcingMethod(sourcingInfo.fromBalance);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSourcingMethod(event.target.checked);
    setNewData({ ...newData, fromBalance: !sourcingInfo.fromBalance });
  };
  const handleInput = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;
    setNewData({ ...newData, [id]: value });
  };

  useEffect(() => {
    setNewData({ ...newData, fromBalance: sourcingMethod });
  }, [sourcingMethod]);

  useEffect(() => {
    const oper = [
      operations.check && EnumSourcingServices.check,
      operations.search && EnumSourcingServices.search,
      operations.custom && EnumSourcingServices.custom,
      operations.shipping && EnumSourcingServices.shipping,
    ].filter((e) => e !== false);
    console.log(oper);
    setNewData({ ...newData, operations: oper });
  }, [operations]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOperations({
      ...operations,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t("edit")}</DialogTitle>
        <DialogContent className="container">
          <div className="top">
            <div className="right">
              <div className="formInput">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    {t("from")}
                  </InputLabel>
                  <Select
                    options={countrys}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={newData.sourceCountry}
                    //   value={data.sourceCountry || ""}
                    label={t("from")}
                    onChange={(event, value) => {
                      setNewData({
                        ...newData,
                        sourceCountry: event.target.value,
                      });
                    }}
                  >
                    {countrys.map((country) => (
                      <MenuItem key={country.value} value={country.label}>
                        {country.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="formInput">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    {t("to")}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={newData.destinationCountry || ""}
                    label={t("to")}
                    onChange={(event, value) => {
                      setNewData({
                        ...newData,
                        destinationCountry: event.target.value,
                      });
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
              <div className="formInput">
                <TextField
                  fullWidth
                  id="amount"
                  label={t("amount")}
                  variant="outlined"
                  onChange={handleInput}
                  value={newData.amount}
                />
              </div>
            </div>
            <div className="left">
              <div className="formInput">
                <TextField
                  fullWidth
                  id="numberOfCartoons"
                  label={t("number of cartoons")}
                  variant="outlined"
                  onChange={handleInput}
                  type="number"
                  value={newData.numberOfCartoons}
                />
              </div>
              <div className="formInput">
                <TextField
                  fullWidth
                  id="volume"
                  label={t("volume in CBM")}
                  variant="outlined"
                  onChange={handleInput}
                  type="number"
                  value={newData.volume}
                />
              </div>

              <div className="formInput">
                <TextField
                  fullWidth
                  id="weight"
                  label={t("Weight in Kg")}
                  variant="outlined"
                  onChange={handleInput}
                  type="number"
                  value={newData.weight}
                />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="formInput">
              <TextField
                fullWidth
                id="description"
                label={t("description")}
                inputProps={{
                  style: {
                    height: "50px",
                  },
                }}
                variant="outlined"
                onChange={handleInput}
                value={sourcingInfo.description}
              />
            </div>
          </div>
          <div className="bottom">
            <div className="formInput">
              <div className="checkbox">
                <Checkbox
                  name="check"
                  checked={operations.check}
                  onChange={handleChange}
                />
                <span>{t("check")}</span>
              </div>
              <div className="checkbox">
                <Checkbox
                  name="search"
                  checked={operations.search}
                  onChange={handleChange}
                />
                <span>{t("search")}</span>
              </div>

              <div className="checkbox">
                <Checkbox
                  name="shipping"
                  checked={operations.shipping}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <span>{t("shipping")}</span>
              </div>

              <div className="checkbox">
                <Checkbox
                  name="custom"
                  checked={operations.custom}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <span>{t("custom")}</span>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="checkbox">
              <Checkbox
                name="sourcing"
                checked={sourcingMethod}
                onChange={handleChange1}
              />
              <span>{t("sourcing from my balance")}</span>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>{t("cancel")}</Button>
          <Button onClick={handleUpdate}>{t("update")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SourcingEdit;
