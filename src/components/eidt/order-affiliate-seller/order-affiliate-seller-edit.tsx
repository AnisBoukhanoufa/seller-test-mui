import {
  Autocomplete,
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
import "./order-affiliate-seller-edit.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { baseRequest } from "utils/request-methods";
import { addProduct } from "state/cart-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import CartProduct from "components/cart-product/cart-product";
import { updateOrderAffiliateSeller } from "state/api-calls/order-affiliate-calls";
const OrderAffiliateSellerEdit = ({ param }: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const [client, setClient] = useState({
    name: param.orderInfo.client.name,
    phone: param.orderInfo.client.phone,
    address: param.orderInfo.client.address,
    district: param.orderInfo.client.district,
    state: param.orderInfo.client.state,
    country: param.orderInfo.client.country,
  });
  const cart = useSelector((state: any) => state.cart);
  const [productId, setProductId] = useState("");

  const [product, setProduct] = useState({
    id: String,
    productId: String,
    offers: {
      offerNumber: Number,
      commission: Number,
      quantity: Number,
      targetPrice: Number,
    },
  });
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [offers, setOffers] = useState([{}]);
  const [offer, setOffer] = useState({});
  const [phoneValue, setPhoneValue] = useState(param.orderInfo.client.phone);
  const [currency, setCurrency] = useState("");
  const [countries, setCountries] = useState("");
  const [resetCounter, setResetCounter] = useState(0);
  const [resetOffers, setResetOffers] = useState(0);
  const products = useSelector(
    (state: any) => state.productAffiliateSeller.productsAffiliateSeller,
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await baseRequest.get(
        `/products-affiliate-seller/offers/${productId}`,
      );
      setOffers(res.data);
    };
    fetchData();
  }, [productId]);

  useEffect(() => {
    setData({ ...data, client: client });
  }, [client]);

  useEffect(() => {
    setProduct({ ...product, offers: offer });
  }, [offer]);

  useEffect(() => {
    setData({ ...data, products: cart.products });
  }, [cart]);

  useEffect(() => {}, []);
  const handleCart = () => {
    dispatch(
      addProduct({
        ...product,
        id: product.id,
        productId,
        quantity,
        price,
        offer,
      }),
    );
  };

  const handleInput = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleInput1 = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;

    setClient({ ...client, [id]: value });
  };

  const handleUpdate = () => {
    try {
      updateOrderAffiliateSeller(param.orderInfo._id, data, dispatch);
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
                options={products}
                getOptionLabel={(option: any) => option.name}
                onChange={(event, value: any) => {
                  setProduct(value);
                  setProductId(value._id);
                  setResetOffers((prev) => prev + 1);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("products")}
                    variant="outlined"
                  />
                )}
              />

              <div className="formInput">
                <Autocomplete
                  disablePortal
                  id="alpha1"
                  options={offers}
                  key={resetCounter + resetOffers}
                  getOptionLabel={(option: any) => option.quantity}
                  onChange={(event, value: any) => {
                    //setProduct(value);
                    setOffer(value);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={t("offers")}
                      variant="outlined"
                    />
                  )}
                />
              </div>
              <button className="submitOrder" onClick={handleCart}>
                {t("add")}
              </button>
              {cart &&
                cart.products.map((product: any) => {
                  return (
                    <CartProduct
                      type={{
                        id: product.id,
                        name: product.name,
                        quantity: product.quantity,
                        price: product.price,
                        isUpsell: product.isUpseller,
                      }}
                    />
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

export default OrderAffiliateSellerEdit;
