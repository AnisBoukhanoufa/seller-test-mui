import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import "./single-product-affiliate-seller.scss";
import LinkIcon from "@mui/icons-material/Link";
import moment from "moment";

import qatar from "../../../assets/qatar.png";
import emirates from "../../../assets/emirates.png";
import kuwait from "../../../assets/kuwait.png";
import ksa from "../../../assets/ksa.png";
import oman from "../../../assets/oman.png";

import bahrain from "../../../assets/bahrain.png";

import { baseRequest } from "utils/request-methods";
import { Alert, AlertProps, Button, Snackbar, Tooltip } from "@mui/material";
import Offers from "components/cards/offers-card/offers-card";
// import ImagesGallery from "components/image-gallery/image-gallery";
import { t } from "i18next";
import ImagesGallery from "components/image-gallery/image-gallery-v1";

const SingleProductAffiliateSeller = () => {
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
  useEffect(() => {
    if (choosenSubProduct?._id) {
      setSelectedCountry(choosenSubProduct?.offers[0]?.country);
      const uniqueCountries = [
        ...new Set(choosenSubProduct.offers.map((offer) => offer.country)),
      ];

      setOffersCountries(uniqueCountries);
    }
  }, [choosenSubProduct]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var images = {
    70: ksa,
    71: emirates,
    72: qatar,
    73: kuwait,
    74: bahrain,
    75: oman,
  };

  //handle variation change
  const handleVariationChange = (subproduct) => {
    setChoosenSubProduct(subproduct);
  };

  //handle offers by country selection
  const [selectedCountry, setSelectedCountry] = useState("");
  const [offers, setOffers] = useState([]);
  const [offersCountries, setOffersCountries] = useState([]);

  useEffect(() => {
    if (choosenSubProduct?._id) {
      const offersToShow = choosenSubProduct?.offers.filter(
        (offer) => offer?.country === selectedCountry
      );
      setOffers(offersToShow);
    }
  }, [selectedCountry]);

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
    <div className="singleAffiliateSeller">
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

                  <div className="editButtonContainer">
                    <Button className="primary-button" onClick={getLink}>
                      {t("visit")}
                    </Button>
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
                          // disabled={!subproduct.available}
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
                                // .filter(([key]) => key !== "color")
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
                      {t("offers")}

                      <Tooltip
                        title={`copy affiliate link for country ${t(
                          selectedCountry
                        )}`}
                      >
                        <Button
                          className="link-offer"
                          rel="noopener"
                          onClick={getLink}
                        >
                          <LinkIcon />
                        </Button>
                      </Tooltip>
                    </div>
                    <div className="countries-buttons">
                      {offersCountries.map((image) => {
                        return (
                          <img
                            src={images[image]}
                            onClick={() => {
                              setSelectedCountry(image);
                            }}
                            alt=""
                            className={`country ${
                              Number(selectedCountry) === Number(image)
                                ? `selected-country`
                                : ``
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <Offers offers={offers} />
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

export default SingleProductAffiliateSeller;
