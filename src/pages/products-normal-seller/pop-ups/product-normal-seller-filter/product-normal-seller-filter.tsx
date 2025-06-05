import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./product-normal-seller-filter.scss";
import { baseRequest } from "utils/request-methods";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { EnumSellerRole } from "statics/enums";

const ProductNormalSellerFilter = ({ param }: any) => {
  const { t } = useTranslation();
  const [openDate, setOpenDate] = useState(false);
  const [openDateStatus, setOpenDateStatus] = useState(false);
  const [sellers, setSellers] = useState([]);

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [datesStatus, setDatesStatus] = useState([
    {
      startDate:
        param.queryFilter.startDateStatus == null
          ? new Date().setDate(new Date().getDate() - 30)
          : new Date(param.queryFilter.startDateStatus),
      endDate:
        param.queryFilter.endDateStatus == null
          ? new Date()
          : new Date(param.queryFilter.endDateStatus),
      key: "selection",
    },
  ]);

  const [reasonFilter, setReasonFilter] = useState(param.queryFilter.reason);
  const [statusFilter, setStatusFilter] = useState(param.queryFilter.status);
  const [operationFilter, setOperationFilter] = useState(
    param.queryFilter.operation,
  );

  const [countryFilter, setCountryFilter] = useState(
    param.queryFilter.country || [],
  );

  const [warehouses, setWarehouses] = useState([]);

  const [query, setQuery] = useState(param.queryFilter);

  const products = useSelector(
    (state: any) => state.productNormalSeller.productNormalSellers,
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await baseRequest.get(`/warehouse/name-pagination`);
      setWarehouses(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await baseRequest.get(
        `/seller/name-pagination?role=${EnumSellerRole.seller}`,
      );
      setSellers(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    handleInput({ target: { id: "country", value: countryFilter } });
  }, [countryFilter]);

  const handleFilter = async () => {
    param.setQueryFilter(query);
    console.log(query);
    param.setFilterOpen(false);
  };

  const handleInput = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;

    setQuery({ ...query, [id]: value });
    console.log(query);
  };

  console.log(operationFilter);
  console.log(param.queryFilter.operation);
  const renderOptions = (props: any, options: any) => {
    return (
      <li {...props} key={options._id}>
        {options.username}
      </li>
    );
  };
  return (
    <Dialog
      open={param.filterOpen}
      onClose={() => param.setFilterOpen(false)}
      sx={{ height: "100%" }}
      maxWidth="md"
    >
      <DialogTitle className="dialogTitle">
        {t("filter")}
        <IconButton onClick={() => param.setFilterOpen(false)}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div className="filter">
          <div className="filterDialog">
            <div className="dateSearchItem">
              <CalendarMonthIcon className="headerIcon" />
              <span
                className="headerSearchText"
                onClick={() => setOpenDate(!openDate)}
              >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                dates[0].endDate,
                "dd/MM/yyyy",
              )}`}</span>
              {openDate && (
                <DateRange
                  className="date"
                  editableDateInputs={true}
                  onChange={(item: any) => {
                    setDates([item.selection]);
                    const date = item.selection.endDate;
                    date.setDate(item.selection.endDate.getDate() + 1);
                    setQuery({
                      ...query,
                      startDate: moment(item.selection.startDate).format(
                        "YYYY-MM-DD",
                      ),
                      endDate: moment(date).format("YYYY-MM-DD"),
                    });
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  maxDate={new Date()}
                />
              )}
            </div>
          </div>
          <Autocomplete
            sx={{ width: 350 }}
            id="sellers"
            loading
            defaultValue={{ name: param.queryFilter.seller }}
            options={sellers}
            getOptionLabel={(option: any) => t(option.username)}
            onChange={(event: any, value: any) => {
              const ev = {
                target: { id: "seller", value: value._id },
              };
              handleInput(ev);
            }}
            renderOption={renderOptions}
            renderInput={(params) => (
              <TextField {...params} label="Sellers" placeholder="Sellers" />
            )}
          />

          <div>
            <FormControl sx={{ width: 350 }}>
              <InputLabel id="demo-simple-select-label">
                {t("operation")}
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="quantityOperation"
                value={operationFilter}
                label={t("operation")}
                onChange={(event: any, value: any) => {
                  setOperationFilter(event.target.value);
                  const ev = {
                    target: {
                      id: "quantityOperation",
                      value: event.target.value,
                    },
                  };
                  handleInput(ev);
                }}
              >
                <MenuItem value={"$eq"}>{t("Equal =")}</MenuItem>
                <MenuItem value="$gt">{t("Greater then >")}</MenuItem>
                <MenuItem value="$lt">{t("Less then<")}</MenuItem>
                <MenuItem value={"$gte"}>{t("Greater or Equal <=")}</MenuItem>
                <MenuItem value={"$lte"}>{t("Less or Equal >=")}</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="quantity"
              label={t("quantity")}
              defaultValue={param.queryFilter.quantity}
              type="number"
              variant="outlined"
              inputProps={{ step: "10", min: "0" }}
              onChange={handleInput}
            />
          </div>

          <div style={{ display: "flex" }}>
            <div className="reason">
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">
                  {t("status")}
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={statusFilter}
                  label={"status"}
                  onChange={(event: any, value: any) => {
                    setStatusFilter(event.target.value);
                    const ev = {
                      target: { id: "status", value: event.target.value },
                    };
                    statusFilter;
                    console.log(statusFilter);
                    handleInput(ev);
                  }}
                >
                  <MenuItem value={130}>{t("130")}</MenuItem>
                  <MenuItem value={131}>{t("131")}</MenuItem>
                  <MenuItem value={132}>{t("132")}</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div>
            <Autocomplete
              sx={{ width: 350 }}
              multiple
              loading
              id="checkboxes-tags-demo"
              options={[70, 71, 72, 73, 74, 75]}
              defaultValue={param.queryFilter.country}
              disableCloseOnSelect
              filterSelectedOptions
              getOptionLabel={(option: any) => t(option)}
              onChange={(e: any, newValue: any, reason: any, option: any) => {
                console.log(option.option);
                if (reason === "removeOption") {
                  console.log("delete", option.option);
                  const toDelete = [...countryFilter];
                  toDelete.splice(toDelete.indexOf(option.option), 1);
                  setCountryFilter(toDelete);
                } else {
                  if (reason === "clear") {
                    console.log("clear all");
                    setCountryFilter([]);
                  } else {
                    setCountryFilter([...countryFilter, option.option]);
                  }
                }
              }}
              renderInput={(params) => (
                <TextField {...params} label="Country " placeholder="Country" />
              )}
            />
          </div>

          <div>
            <FormControl sx={{ width: 350 }}>
              <InputLabel id="demo-simple-select-label">
                {t("operation")}
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="damageOperation"
                value={operationFilter}
                label={t("operation")}
                onChange={(event: any, value: any) => {
                  setOperationFilter(event.target.value);
                  const ev = {
                    target: {
                      id: "damageOperation",
                      value: event.target.value,
                    },
                  };
                  handleInput(ev);
                }}
              >
                <MenuItem value={"$eq"}>{t("Equal =")}</MenuItem>
                <MenuItem value="$gt">{t("Greater then >")}</MenuItem>
                <MenuItem value="$lt">{t("Less then<")}</MenuItem>
                <MenuItem value={"$gte"}>{t("Greater or Equal <=")}</MenuItem>
                <MenuItem value={"$lte"}>{t("Less or Equal >=")}</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="damage"
              label={t("damage")}
              defaultValue={param.queryFilter.damage}
              type="number"
              variant="outlined"
              inputProps={{ step: "10", min: "0" }}
              onChange={handleInput}
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button>{t("clear")}</Button>
        <Button onClick={handleFilter}>{t("filter")}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductNormalSellerFilter;
