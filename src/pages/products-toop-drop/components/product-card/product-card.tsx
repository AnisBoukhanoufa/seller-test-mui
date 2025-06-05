import { Link, useSearchParams } from "react-router-dom";
import "./product-card.scss";
import qatar from "../../../../assets/qatar.png";
import emirates from "../../../../assets/emirates.png";
import kuwait from "../../../../assets/kuwait.png";
import ksa from "../../../../assets/ksa.png";
import oman from "../../../../assets/oman.png";
import bahrain from "../../../../assets/bahrain.png";
import { useEffect, useState } from "react";
import { currenciesFromCountry } from "statics/statics";
import { t } from "i18next";
import StarIcon from "@mui/icons-material/Star";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  deleteProductToopDropFavorite,
  getProductToopDrop,
  registerProductToopDropFavorite,
} from "state/api-calls/product-toop-drop-calls";
import { queryToFilter } from "utils/functions";

interface Products {
  info: any;
}
const images = {
  70: ksa,
  71: emirates,
  72: qatar,
  73: kuwait,
  74: bahrain,
  75: oman,
};

const Product = ({ info }: Products) => {
  const [searchParams] = useSearchParams();

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const uniqueCountries = [
      ...new Set(info?.toopDropPrice?.flatMap((price) => price.country)),
    ];
    setCountries(uniqueCountries);
  }, []);
  const imageToShow = info?.images?.filter(
    (image) => !image?.startsWith("NOT_FOUND")
  )[0];

  const dispatch = useDispatch();
 
  const handleFavoriteClick = async () => {
    const dataToSend = { productId: info?._id };
    if (info.isFavorite) {
      await deleteProductToopDropFavorite(dataToSend, dispatch);
    } else {
      await registerProductToopDropFavorite(dataToSend, dispatch);
    }
    await getProductToopDrop(
      queryToFilter(Object.fromEntries(searchParams.entries())),
      dispatch
    );
    
  };
  return (
    <Link
      to={`/products-toop-drop/${info?._id}`}
      style={{ textDecoration: "none" }}
    >
      <div
        className={`product ${
          info.isValidated !== true ? "active" : "in-active"
        }`}
      >
        <div
          className="img-container"
          style={{
            backgroundImage: imageToShow ? `url('${imageToShow}')` : "none",
          }}
        ></div>
        <div className="info-container">
          <div className="container">
            <div className="title">{info?.name}</div>
            <div
              style={{
                backgroundColor: `rgba(var(--color-${t(info.currentStatus, {
                  lng: "en",
                })}-rgb), 1)`,
              }}
              className={`status-tag cellWithStatus capitalize ${t(
                info?.currentStatus,
                {
                  lng: "en",
                }
              )}`}
            >
              {t(info.currentStatus)}
            </div>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                handleFavoriteClick();
              }}
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: "4%",
                right: "5%",
                backgroundColor: "#F2F2F2D2",
                padding: "3px",
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                "&:hover": { backgroundColor: "#D3D3D3" },
              }}
            >
              <StarIcon
                sx={{ color: info.isFavorite ? "#FFCD29" : "#B3B3B3" }}
              />
            </IconButton>
            <div className="sub-info">
              <div>
                <div className=" price ">
                  <span className="value uppercase dollar">
                    {info?.toopDropPrice[0].price?.toFixed(2)}{" "}
                    {t(currenciesFromCountry[info?.offers?.country])}
                  </span>
                </div>

                <div className="countries">
                  {countries.map((country) => (
                    <img src={images[country]} alt="" className="country" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
