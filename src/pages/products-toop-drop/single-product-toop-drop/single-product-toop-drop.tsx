import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import "./single-product-toop-drop.scss";
import moment from "moment";

import { baseRequest } from "utils/request-methods";
import { Alert, AlertProps, Button, Snackbar, Tooltip } from "@mui/material";
// import ImagesGallery from "components/image-gallery/image-gallery";
import { t } from "i18next";
import Prices from "../components/price-card/prices-card";
import ImagesGallery from "components/image-gallery/image-gallery-v1";

const SingleProductToopDrop = () => {
  const location = useLocation();
  const itemId = location.pathname.split("/")[2];

  const [productInfo, setProductInfo] = useState({});
  const [choosenSubProduct, setChoosenSubProduct] = useState({ _id: "" });

  useEffect(() => {
    const fetchData = async () => {
      const res = await baseRequest.get(`/product-affiliate/single/${itemId}`);
      setProductInfo(res.data._doc);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (productInfo?._id) {
      setChoosenSubProduct(productInfo?.products[0]);
    }
  }, [productInfo?._id]);



  //handle variation change
  const handleVariationChange = (subproduct) => {
    setChoosenSubProduct(subproduct);
  };

  //handle offers by country selection
  const [selectedCountry, setSelectedCountry] = useState("");

  const [offersCountries, setOffersCountries] = useState([]);



  //handle get link
  const [snackbar, setSnackbar] = useState<Pick<
    AlertProps,
    "children" | "severity"
  > | null>(null);

  const handleCloseSnackbar = () => setSnackbar(null);
  const getLink = async () => {
    try {
      const res = await baseRequest.get(
        `/product-affiliate/get-link/${productInfo._id}?country=${selectedCountry}`
      );
      const link = res.data.link;
      window.open(link, "_blank", "noopener,noreferrer");
      await navigator.clipboard.writeText(link);
      setSnackbar({
        children: "Link Copied successfully",
        severity: "success",
      });
    } catch (error) {
      console.log("Fail to fetch link", error);
      setSnackbar({
        children: "Link can not be copied",
        severity: "error",
      });
    }
  };

  return (
    <div className="singleToopDrop">
      <div className="singleContainer overflowPreventerFlexbox">
        <div className="overflowPreventerContainer">
          <div className="overflowPreventer">
            <div className="top">
              <div className="left">
                <div className="header">
                  <div className="id-title">
                    {productInfo?.id}
                    <span className="date">
                      <div className="date">
                        <span className="valueKey">
                          {moment(productInfo?.createdAt).format(
                            "DD/MM/YYYY hh:mm A"
                          )}
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <ImagesGallery images={choosenSubProduct?.images} />
                <div className="details">
                  <div className="title">
                    <div className="name">{productInfo.name} </div>
                  </div>
                  <div className="status">
                    <span
                      className={`valueKey cellWithStatus ${t(
                        choosenSubProduct?.currentStatus,
                        { lng: "en" }
                      )}`}
                    >
                      {t(choosenSubProduct?.currentStatus)}
                    </span>
                  </div>
                </div>
                <div className="detailItem">
                  <span className="itemKey">{t("id")} :</span>
                  <span className="valueKey valueKeyId">
                    {choosenSubProduct?.id}
                  </span>
                </div>
                {Object.values(productInfo?.products?.[0].variations || [])
                  .length > 0 && (
                  <div className="variations-section">
                    <div className="itemKey capitalize">{t("variations")}</div>
                    <div className="variations">
                      {productInfo?.products.map((subproduct, index) => (
                        <button
                          key={index}
                          className={
                            subproduct._id === choosenSubProduct._id
                              ? "active variations-bullet"
                              : "variations-bullet"
                          }
                          onClick={() => handleVariationChange(subproduct)}
                        >
                          {subproduct?.variations && (
                            <>
                              {subproduct?.variations.color && (
                                <span
                                  style={{
                                    display: "inline-block",
                                    width: "16px",
                                    height: "16px",
                                    borderRadius: "50%",
                                    backgroundColor:
                                      subproduct?.variations.color,
                                    marginRight: "8px",
                                  }}
                                ></span>
                              )}
                              {Object.entries(subproduct?.variations)
                                .map(([key, value], index) => (
                                  <span key={index}>{value} </span>
                                ))}
                            </>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="offers-section">
                  <div className="title-countries">
                    <div className="itemKey capitalize">
                      {t("prices")}
                    </div>

                  </div>
                  <Prices toopDropPrice={choosenSubProduct?.toopDropPrice} />
                </div>
              </div>
              <div className="right">
                <div className="item">
                  <div className="category">
                    <span className="itemKey ">{t("categories")}: </span>
                    <span className="bullets">
                      {productInfo?.category?.map((e, index) => {
                        return <span className="tags-bullets">{t(e)}</span>;
                      })}
                    </span>
                  </div>
                  <div className="detailItem description">
                    <span className="itemKey">
                      {t("product description")} :
                    </span>
                    <div
                      className="description-container"
                      style={{color: "black"}}
                      dangerouslySetInnerHTML={{
                        __html: productInfo?.description,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!!snackbar && (
        <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={3000}>
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </div>
  );
};

export default SingleProductToopDrop;
