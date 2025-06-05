import {
  Autocomplete,
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
import "./order-normal-seller-edit.scss";

import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { useEffect, useState } from "react";
import { baseRequest } from "utils/request-methods";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderNormalSeller } from "state/api-calls/order-normal-seller-calls";
import OrderNormalSellerCard from "components/cards/order-normal-seller-card/order-normal-seller-card";
import {
  addSubProduct,
  editSubProduct,
  removeSubProducts,
} from "state/cards/product-card/productNormalSellerCardRedux";
interface Open {
  open: boolean;
}
interface Order {
  orderInfo: {
    id: number;
    seller: string;
    client: {
      id: number;
      name: string;
      phone: string;
      address: string;
      district: string;
      state: string;
      country: string;
    };
    note: string;
    warehouse: string;
    currency: string;
    status: {
      status: number;
      reason: number;
      note: string;
      isVisible: boolean;
      userId: string;
      date: Date;
      delay: Date;
    };
    fees: {
      name: string;
      value: number;
      unit: number;
      category: number;
    };
    upsellNumber: number;
    totalPrice: number;
    products: [
      {
        productId: string;
        quantity: number;
        price: number;
        isUpsell: boolean;
      },
    ];
    isConfirmed: boolean;
  };
}
const OrderNormalSellerEdit = ({ param }: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const [countries, setCountries] = useState(param.orderInfo.client.country);
  const [currency, setCurrency] = useState(param.orderInfo.currency);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isUpsell, setIsUpsell] = useState(false);
  const [productId, setProductId] = useState("");
  const [client, setClient] = useState({
    name: param.orderInfo.client.name,
    phone: param.orderInfo.client.phone,
    address: param.orderInfo.client.address,
    district: param.orderInfo.client.district,
    state: param.orderInfo.client.state,
    country: param.orderInfo.client.country,
  });
  const [phoneValue, setPhoneValue] = useState(param.orderInfo.client.phone);
  const [productsData, setProductsData] = useState([]);
  const [productName, setProductName] = useState(false);
  const [warehouseCountry, setWarehouseCountry] = useState(0);
  const [subProductId, setSubProductId] = useState(null);
  const [product, setProduct] = useState({
    id: String,
    productId: String,
    price: Number,
    quantity: Number,
    isUpsell: Boolean,
  });

  const cart = useSelector((state: any) => state.orderNormalSellerCard);

  useEffect(() => {
    const fetchData = async () => {
      const res = await baseRequest.get(
        `/products-normal-seller/sub-products/${param.orderInfo.seller}`,
      );
      setProductsData(res.data);
    };
    fetchData();
  }, [open]);

  useEffect(() => {
    dispatch(removeSubProducts());
    param.orderInfo.products.map((product: any) => {
      dispatch(
        addSubProduct({
          id: product.productId,
          productName: product.productName,
          quantity: product.quantity,
          price: product.price,
          isUpsell: product.isUpsell,
        }),
      );
    });
  }, []);

  useEffect(() => {
    setData({ ...data, client: client });
  }, [, client]);

  const handleInput1 = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;
    setClient({ ...client, [id]: value });
  };

  const handleInput = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsUpsell(event.target.checked);
  };

  useEffect(() => {}, []);

  const handleCart = () => {
    //if(warehouseCountry !== 0 && warehouseCountry!==){
    if (productId) {
      dispatch(
        editSubProduct({
          id: productId,
          productId,
          quantity,
          price,
          isUpsell,
        }),
      );
      setIsUpsell(false);
      setProductName(!productName);
      setQuantity(0);
      setPrice(0);
    } else {
      dispatch(
        addSubProduct({
          id: product.id,
          productId,
          quantity,
          price,
          isUpsell,
        }),
      );
      setIsUpsell(false);
      setProductName(!productName);
      setQuantity(0);
      setPrice(0);
    }
  };
  const handleUpdate = () => {
    try {
      updateOrderNormalSeller(param.orderInfo._id, data, dispatch);
    } catch (err) {
      console.log(err);
    }
    param.setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={param.open}
        onClose={param.handleClose}
        sx={{ margin: "5%" }}
      >
        <DialogTitle>{t("edit")}</DialogTitle>
        <DialogContent>
          <div className="edit-order-seller">
            <div className="edit-order-seller-info">
              <h3>{t("information")}</h3>
              <TextField
                fullWidth
                id="note"
                label={t("note")}
                variant="outlined"
                onChange={handleInput}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  {t("currency")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currency}
                  label={t("currency")}
                  onChange={(event) => {
                    setData({ ...data, currency: event.target.value });
                    setCurrency(event.target.value);
                  }}
                >
                  <MenuItem value={t("SAR")}>{t("SAR")}</MenuItem>
                  <MenuItem value={t("QAR")}>{t("QAR")}</MenuItem>
                  <MenuItem value={t("OMR")}>{t("OMR")}</MenuItem>
                  <MenuItem value={t("KWD")}>{t("KWD")}</MenuItem>
                  <MenuItem value={t("BHD")}>{t("BHD")}</MenuItem>
                  <MenuItem value={t("AED")}>{t("AED")}</MenuItem>
                  <MenuItem value={t("$")}>{t("$")}</MenuItem>
                  <MenuItem value={t("€")}>{t("€")}</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="edit-order-seller-client">
              <h3>{t("client")}</h3>
              <TextField
                fullWidth
                id="name"
                defaultValue={param.orderInfo.client.name}
                label={t("name")}
                variant="outlined"
                onChange={handleInput1}
              />
              <PhoneInput
                country={"dz"}
                inputProps={{ default: param.orderInfo.client.phone }}
                value={phoneValue}
                onChange={(newValue) => {
                  setPhoneValue;
                  setClient({
                    ...client,
                    phone: newValue,
                  });
                }}
              />
              <TextField
                fullWidth
                id="address"
                defaultValue={param.orderInfo.client.address}
                label={t("address")}
                variant="outlined"
                onChange={handleInput1}
              />
              <TextField
                fullWidth
                id="district"
                defaultValue={param.orderInfo.client.district}
                label={t("district")}
                variant="outlined"
                onChange={handleInput1}
              />
              <TextField
                fullWidth
                id="state"
                defaultValue={param.orderInfo.client.state}
                label={t("state")}
                variant="outlined"
                onChange={handleInput1}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  {t("country")}
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={countries}
                  label={t("country")}
                  onChange={(event, value) => {
                    setClient({
                      ...client,
                      country: event.target.value,
                    });
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

            <div className="edit-order-seller-product">
              <h3>{t("products")}</h3>
              <Autocomplete
                disablePortal
                id="alpha1"
                //key={productName}
                options={productsData}
                getOptionLabel={(option: any) =>
                  option.productName +
                  " " +
                  option.id +
                  ` (${t(option.warehouseCountry)})`
                }
                onChange={(event, value: any) => {
                  setProduct(value);
                  setProductId(value._id);
                  // setProductName(value.productName);
                  setData({ ...data, warehouse: value.warehouseId });
                  setWarehouseCountry(value.warehouseCountry);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("products")}
                    variant="outlined"
                  />
                )}
              />
              <div style={{ display: "flex", gap: "20px" }}>
                <TextField
                  id="quantity"
                  label={t("quantity")}
                  value={quantity}
                  type="number"
                  variant="outlined"
                  placeholder="0"
                  inputProps={{ step: "1", min: "1" }}
                  onChange={(e: any) => {
                    setQuantity(e.target.value);
                  }}
                />

                <TextField
                  id="price"
                  label={t("total price")}
                  value={price}
                  type="number"
                  variant="outlined"
                  placeholder="0"
                  inputProps={{ step: "10", min: "0" }}
                  onChange={(e: any) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div>
                <Checkbox
                  name="isUpsell"
                  checked={isUpsell}
                  onChange={handleChange}
                />
                <span>{t("isUpsell")}</span>
              </div>
              <button className="submitOrder" onClick={handleCart}>
                {t(`${subProductId === null ? "add" : "edit"}  sub product `)}
              </button>
              {cart &&
                cart.subProducts.map((product: any) => {
                  return (
                    <div
                      onClick={() => {
                        setPrice(product.price);
                        setQuantity(product.quantity);
                        setSubProductId(product._id);
                        setIsUpsell(product.isUpsell);
                      }}
                    >
                      <OrderNormalSellerCard
                        param={{
                          product,
                        }}
                      />
                    </div>
                  );
                })}
            </div>
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

export default OrderNormalSellerEdit;
