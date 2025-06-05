import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setSourcing } from "state/api-calls/sourcing-calls";
import { baseRequest } from "utils/request-methods";
import { useForm } from "react-hook-form";
import "./new-sourcing.scss";
import {
  EnumCountry,
  EnumSellerRole,
  EnumSourcingShippingMethod,
} from "statics/enums";
import countryList from "react-select-country-list";
import SubProductAutocomplete from "components/autocomplete/sub-products-autocomplete";
import SourcingSubProductsTable from "../components/sourcing-sub-products-table";
import ProductsSourcingAutocomplete from "pages/products-normal-seller/components/sub-product-status/products-sourcing-autocomplete";

const NewSourcing = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const withCod = location.search.split("withCod=")[1];

  const [data, setData] = useState({});
  const [productsData, setProductsData] = useState<any>([]);
  const [subProductsData, setSubProductsData] = useState<any>([]);
  const [choosenProduct, setChoosenProduct] = useState<any>({ _id: "" });
  const [choosenSubProduct, setChoosenSubProduct] = useState<any>({
    _id: null,
  });
  const [subProductDetail, setSubProductDetail] = useState<any>({});
  const [subProducts, setSubProducts] = useState<any>([]);

  const { t } = useTranslation();

  const [searchCheckPurchase, setSearchCheckPurchase] = useState(false);

  const { isFetching, error, succeed } = useSelector(
    (state: any) => state.sourcing
  );

  const countrys = useMemo(
    () => [
      { value: "CN", label: "China" },
      ...countryList()
        .getData()
        .filter((e) => e.value !== "CN" && e.value !== "IL"),
    ],
    []
  );
  const countrysFrom = useMemo(
    () => [
      { value: "CN", label: "China" },
      ...countryList()
        .getData()
        .filter((e) => e.value !== "CN" && e.value !== "IL"),
    ],
    []
  );
  const generateCountrys = useCallback(() => {
    const countrys = Object.values(EnumCountry).map((element) => {
      if (element === EnumCountry.KSA) {
        return { value: element, label: t("Saudi Arabia") };
      } else if (element === EnumCountry.UAE) {
        return { value: element, label: t("United Arab Emirates") };
      } else return { value: element, label: t(element) };
    });
    return countrys;
  }, []);
  const countrysTo = useMemo(() => generateCountrys(), []);

  useEffect(() => {
    try {
      if (choosenProduct?._id) {
        setSubProductsData(choosenProduct?.products);
        if (choosenProduct?.products[0]) {
          setChoosenSubProduct(choosenProduct?.products[0]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [choosenProduct?._id]);

  // handle change product or sub product
  useEffect(() => {
    setSubProductDetail(null);
  }, [choosenProduct?._id?._id, choosenSubProduct?._id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await baseRequest.get(
          `/product-seller/name-pagination?pageSize=10&sellerId=${data?.sellerId}&sourcing=1`
        );
        setProductsData(res.data.list);
      } catch (err) {
        setProductsData([]);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCheckPurchase(!searchCheckPurchase);
  };
  const handleInput = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;
    setSubProductDetail({ ...subProductDetail, [id]: value });
  };

  //handle request response is true or is false
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmitRequest = async (dataToSend) => {
    if (dataToSend) {
      try {
        await setSourcing(
          {
            ...dataToSend,
            withCod: withCod === "true" ? true : false,
            search: searchCheckPurchase,
          },
          dispatch
        );
        setHasSubmitted(true);
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    if (
      hasSubmitted &&
      isFetching === false &&
      error === false &&
      succeed === true
    ) {
      navigate(-1);
    }
  }, [hasSubmitted, isFetching, error, succeed]);

  const handleSub = async (event: any) => {
    if (subProducts.length === 0) {
      handleSubmitRequest({
        ...data,
        products: [
          {
            productId: choosenSubProduct._id,
            ...subProductDetail,
          },
        ],
      });
    } else {
      handleSubmitRequest({
        ...data,
        products: subProducts,
      });
    }
  };

  const handleAddProduct = async (event: any) => {
    // Add the selected product and its details to the subProducts array
    setSubProducts([
      ...subProducts,
      {
        productName: choosenProduct?._id?.name,
        productId: choosenSubProduct._id,
        variations: choosenSubProduct.variations,
        ...subProductDetail,
      },
    ]);
    setChoosenSubProduct({ _id: null });
    setSubProductDetail(null);
  };

  //handle disable submit button
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);

  useEffect(() => {
    if (isFetching === true) {
      setDisableSubmitButton(true);
    } else setDisableSubmitButton(false);
  }, [isFetching, error]);

  return (
    <div className="newSourcing">
      <div className="newContainer overflowPreventerFlexbox">
        <div className="overflowPreventerContainer">
          <div className="overflowPreventer">
            <div className="top">
              <h1 className="title">{t("new sourcing")}</h1>
            </div>
            <div className="bottom">
              <form onSubmit={handleSubmit(handleSub)}>
                <div className="sourcing-form-container">
                  <div className="right">
                    <div className="formInput">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          {t("from")}
                        </InputLabel>
                        <Select
                          {...register("from", {
                            required: "This field is required",
                          })}
                          options={countrysFrom}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={data.sourceCountry || ""}
                          label={t("from")}
                          onChange={(event, value) => {
                            setData({
                              ...data,
                              sourceCountry: event.target.value,
                            });
                            console.log(event.target);
                          }}
                        >
                          {countrysFrom.map((country) => (
                            <MenuItem key={country.value} value={country.label}>
                              {country.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {errors.from && (
                        <p className="errorValidation">
                          This field is required
                        </p>
                      )}
                    </div>

                    <div className="formInput">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          {t("to")}
                        </InputLabel>
                        <Select
                          {...register("to", {
                            required: "This field is required",
                          })}
                          value={data.destinationCountry || ""}
                          label={t("to")}
                          onChange={(event, value) => {
                            setData({
                              ...data,
                              destinationCountry: event.target.value,
                            });
                          }}
                        >
                          {countrysTo.map((e) => (
                            <MenuItem value={e.value}>{e.label}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {errors.to && (
                        <p className="errorValidation">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className="left"
                    style={{
                      justifyContent: !withCod ? "space-between" : "initial",
                    }}
                  >
                    <div className="formInput">
                      <Autocomplete
                        disablePortal
                        loading
                        options={Object.values(EnumSourcingShippingMethod)}
                        getOptionLabel={(option: any) => t(option)}
                        renderOption={(props: any, option: any) => {
                          return (
                            <li {...props} key={option}>
                              {t(option)}
                            </li>
                          );
                        }}
                        onChange={(event, value: any) => {
                          setData({ ...data, shippingMethod: value });
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={t("shipping method")}
                            variant="outlined"
                            {...register("shippingMethod", {
                              required: "This field is required",
                            })}
                          />
                        )}
                      />
                      {errors.shippingMethod && (
                        <p className="errorValidation">
                          This field is required
                        </p>
                      )}
                    </div>
                    {withCod === "true" && (
                      <div className="formInput check-box">
                        <div className="checkbox">
                          <Checkbox
                            name="searchCheckPurchase"
                            checked={searchCheckPurchase}
                            onChange={handleChange}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                          <span>
                            {t("search")} - {t("check")} - {t("purchase")}
                          </span>
                        </div>
                      </div>
                    )}{" "}
                  </div>
                  <div className="right product-detail">
                    <div className="formInput">
                      <ProductsSourcingAutocomplete
                        products={productsData}
                        setProducts={setProductsData}
                        choosenProduct={choosenProduct}
                        setChoosenProduct={setChoosenProduct}
                        sellerType={EnumSellerRole.seller}
                        width={"100%"}
                      />
                      {errors.products && (
                        <p className="errorValidation">
                          This field is required
                        </p>
                      )}
                    </div>
                    {choosenProduct._id !== "" && (
                      <div className="formInput">
                        <SubProductAutocomplete
                          choosenProduct={choosenProduct}
                          choosenSubProduct={choosenSubProduct}
                          subProducts={subProductsData}
                          setChoosenSubProduct={setChoosenSubProduct}
                          width={"100%"}
                        />
                        {errors.products && (
                          <p className="errorValidation">
                            This field is required
                          </p>
                        )}
                      </div>
                    )}

                    <div className="formInput">
                      <TextField
                        {...(subProducts.length > 0
                          ? {}
                          : register("quantity", {
                              required:
                                subProducts.length === 0
                                  ? "This field is required"
                                  : false,
                              validate: (value) =>
                                value > 49 || "minimum quantity is 50", // Custom validation rule
                            }))}
                        fullWidth
                        id="quantity"
                        label={t("quantity")}
                        variant="outlined"
                        onChange={handleInput}
                        value={subProductDetail?.quantity || ""}
                        type="number"
                      />
                      {subProductDetail?.quantity < 50 && (
                        <p className="errorValidation">
                          {t("minimum quantity 50")}
                        </p>
                      )}
                      {!(subProducts.length > 0) && errors.quantity && (
                        <p className="errorValidation">
                          {errors?.quantity?.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={handleAddProduct}
                      className="add-sub-product"
                      disabled={
                        !(
                          subProductDetail?.quantity > 49 &&
                          choosenSubProduct._id !== null
                        )
                      }
                    >
                      {t("add product")}
                    </button>
                  </div>
                </div>
                <div className="formInput">
                  <TextField
                    {...register("note", {
                      // required: "This field is required",
                    })}
                    fullWidth
                    id="note"
                    label={t("note")}
                    inputProps={{
                      style: {
                        height: "50px",
                      },
                    }}
                    variant="outlined"
                    onChange={(event) => {
                      setData({
                        ...data,
                        note: event?.target?.value,
                      });
                    }}
                  />
                </div>
                <div className="formInput buttons">
                  <Button
                    type="submit"
                    disabled={disableSubmitButton}
                    className="primary-button"
                  >
                    {t("save")}
                  </Button>
                </div>
              </form>
            </div>
            {subProducts.length > 0 && (
              <SourcingSubProductsTable
                subProducts={subProducts}
                setSubProducts={setSubProducts}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSourcing;
