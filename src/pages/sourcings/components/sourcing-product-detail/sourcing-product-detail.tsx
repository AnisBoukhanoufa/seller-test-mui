import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ColorDot from "components/color-dot";
import TrackingSourcing from "components/tracking/sourcing-tracking";
import { t } from "i18next";
const SourcingProductDetail = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <>
      <Box className="details-content">
        <Typography className="details-title" variant="h5" gutterBottom>
          {product?.productId?.productId?.name}{" "}
          {product?.productId?.variations && (
            <>
              {Object.entries(product?.productId?.variations).map(
                ([key, value], index) => (
                  <span key={index}>{value} </span>
                )
              )}
              {product?.productId?.variations?.color && (
                <ColorDot
                  color={product?.productId?.variations?.color}
                  size={20}
                />
              )}
            </>
          )}
        </Typography>
        <Box className="details" display="flex" justifyContent="space-between">
          <Box className="left">
            <Typography className="details-sub-title" variant="h6" gutterBottom>
              {t("details")} :
            </Typography>

            <Typography className="key-value" variant="body1">
              <span className="capitalize">{t("quantity")} :</span>
              <span> {product.quantity}</span>
            </Typography>
            <Typography className="key-value" variant="body1">
              <span className="capitalize">{t("number of boxes")} :</span>
              <span> {product.numberOfCartoons}</span>
            </Typography>
            <Typography className="key-value" variant="body1">
              <span className="capitalize">{t("weight")} :</span>
              <span>{product.weight}Kg</span>
            </Typography>
            <Typography className="key-value" variant="body1">
              <span className="capitalize">{t("volume")} :</span>
              <span>{product.volume} CBM</span>
            </Typography>
          </Box>
          <Box className="right" flex={1} ml={2}>
            <Typography
              className="details-sub-title"
              variant="div"
              gutterBottom
            >
              {t("status")} :{" "}
              <div
                className={` cellWithStatus ${t(
                  product.status[product.status.length - 1].status,
                  { lng: "en" }
                )}`}
              >
                {t(product.status[product.status.length - 1].status)}
              </div>
            </Typography>
            <Box className="status-tracker">
              <TrackingSourcing statusData={product.status} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SourcingProductDetail;
