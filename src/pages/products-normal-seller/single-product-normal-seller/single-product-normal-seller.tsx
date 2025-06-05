import { Button, Link, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import moment from "moment";
import LinkIcon from "@mui/icons-material/Link";
import "./single-product-normal-seller.scss";
import StockCard from "components/stock-card/stock-card";

import { baseRequest } from "utils/request-methods";

import SubProductAutocomplete from "components/autocomplete/sub-products-autocomplete";
import { t } from "i18next";
import ProductNormalSellerEdit from "./pop-up/edit-product-normal-seller/product-normal-seller-edit";
import SubProductsNormalSellerEdit from "./pop-up/sub-product-normal-seller-edit/sub-product-normal-seller-edit";

const SingleProductNormalSeller = () => {
  const location = useLocation();
  const itemId = location.pathname.split("/")[2];

  const [productInfo, setProductInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await baseRequest.get(`/product-seller/single/${itemId}`);

      setProductInfo(res.data._doc);
    };
    fetchData();
  }, []);

  const [open, setOpen] = useState(false);

  const [subProducts, setSubProducts] = useState([]);
  const [choosenSubProduct, setChoosenSubProduct] = useState({ _id: "" });
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    if (productInfo._id) {
      setSubProducts(productInfo.products);
      setChoosenSubProduct(productInfo.products[0]);
    }
  }, [productInfo?._id]);

  useEffect(() => {
    if (choosenSubProduct?._id) {
      const fetchData = async () => {
        const res = await baseRequest.get(
          `/stock-seller/pagination?productId=${choosenSubProduct?._id}`
        );
        setStocks(res.data.list);
      };
      fetchData();
    }
  }, [choosenSubProduct]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // //handle click edit sub product
  const [openDialogEditSubProduct, setOpenDialogEditSubProduct] =
    useState(false);
  const handleCloseEditSubProduct = () => {
    setOpenDialogEditSubProduct(false);
  };
  const handleOpenEditSubProduct = () => {
    setOpenDialogEditSubProduct(true);
  };

  return (
    <div className="singleProductNormalSeller">
      <div className="singleContainer overflowPreventerFlexbox">
        <div className="overflowPreventerContainer">
          <div className="overflowPreventer">
            <div className="top">
              <div className="left">
                <div className="headerInfoContainer">
                  <div className="headerInfo">
                    <div className="detailItem">
                      <span className="itemKey capitalize">{t("id")} :</span>
                      <span className="valueKey valueKeyId">
                        {productInfo?.id}
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey capitalize">
                        {t("created at")} :
                      </span>
                      <span className="valueKey">
                        {moment(productInfo?.createdAt).format(
                          "DD/MM/YYYY hh:mm A"
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="editButtonContainer"></div>
                  <div className="edit-button" onClick={handleClickOpen}>
                    {t("edit")}
                  </div>
                </div>
                <div className="item">
                  <div className="details">
                    <ProductNormalSellerEdit
                      open={open}
                      productInfo={productInfo}
                      handleClose={handleClose}
                      setProductInfo={setProductInfo}
                    />
                    <div className="cardTitle">
                      <span className="valueKey">{t("product info")}</span>
                      <div className="separator" />
                    </div>

                    <div className="section product-info">
                      <div className="detailItem">
                        <span className="itemKey capitalize">
                          {t("name")} :
                        </span>
                        <span className="valueKey">{productInfo?.name}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey capitalize">
                          {t("tags")} :
                        </span>
                        <span className="valueKey tags-bullets-container">
                          {productInfo?.category?.map((e, index) => {
                            return <span className="tags-bullets">{t(e)}</span>;
                          })}
                        </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey capitalize">
                          {t("status")} :
                        </span>

                        {
                          <div
                            className={`cellWithStatus ${t(
                              `${productInfo?.currentStatus}`,
                              { lng: "en" }
                            )}`}
                          >
                            {t(`${productInfo?.currentStatus}`)}
                          </div>
                        }
                      </div>
                      <div className="url">
                        <div className="detailItem">
                          <span className="itemKey capitalize">
                            {t("url")} :
                          </span>
                        </div>
                        <div className="link-field">
                          <TextField
                            fullWidth
                            id="url"
                            InputProps={{ readOnly: true }}
                            value={productInfo?.url}
                          />
                          <Button
                            component={Link}
                            rel="noopener"
                            target="_blank"
                            href={`${productInfo?.url}`}
                          >
                            <LinkIcon />
                          </Button>
                        </div>
                      </div>
                      <div className="detailItem description">
                        <span className="itemKey capitalize">
                          {t("product description")} :
                        </span>
                        <div
                        style={{color: "black"}}
                          className="description-container"
                          dangerouslySetInnerHTML={{
                            __html: productInfo?.description,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="detailItem stocks">
                  <div className="details-sub-product">
                    <SubProductsNormalSellerEdit
                      open={openDialogEditSubProduct}
                      productInfo={productInfo}
                      handleClose={handleCloseEditSubProduct}
                    />
                    <div className="sub-product">
                      <SubProductAutocomplete
                        choosenProduct={productInfo}
                        subProducts={subProducts}
                        choosenSubProduct={choosenSubProduct}
                        setChoosenSubProduct={setChoosenSubProduct}
                        width={"100%"}
                      />
                      <div
                        className="edit-button secondary-button"
                        onClick={handleOpenEditSubProduct}
                      >
                        {t("edit")}
                      </div>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">{t("id")} :</span>
                      <span className="valueKey valueKeyId">
                        {choosenSubProduct?.id}
                      </span>
                    </div>
                    <div className="status">
                      <div className="key">{t("status")} : </div>
                      <div
                        className={`cellWithStatus ${t(
                          choosenSubProduct?.currentStatus  ,
                          { lng: "en" }
                        )}`}
                      >
                        {t(choosenSubProduct?.currentStatus)}
                      </div>
                    </div>
                  </div>
                  <span className="item-key-title capitalize">
                    {t("stocks")} :
                  </span>
                  <div className="stocks-container">
                    {stocks.length > 0 && (
                      <StockCard
                        choosenSubProduct={choosenSubProduct}
                        setStocks={setStocks}
                        stocks={stocks}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductNormalSeller;
