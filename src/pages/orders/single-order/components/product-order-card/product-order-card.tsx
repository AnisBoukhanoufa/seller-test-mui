import { t } from "i18next";
import "./product-order-card.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { EnumOrderStatus } from "statics/enums";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const ProductsOrderCard = ({
  orderInfo,
  productInfo,
  handleClickDeleteProduct,
  handleEditProduct,
  orderType,
}) => {

  let link = "";
  if (orderType === "seller") {
    link = `/products-normal-seller/${productInfo.productId.productId._id}`;
  } else if (orderType === "affiliate") {
    link = `/products-affiliate-seller/${productInfo.productId.productId._id}`;
  } else if (orderType === "toopDrop") {
    link = `/products-toop-drop/${productInfo.productId.productId._id}`;
  }

  return (
    <>
      <Link
        className={`product`}
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        // style={{
        //   cursor:
        //     orderInfo.currentStatus === EnumOrderStatus.new
        //       ? "pointer"
        //       : "default",
        // }}
        // onClick={(event) => {
        //   if (orderInfo.currentStatus === EnumOrderStatus.new)
        //     handleEditProduct(productInfo);
        // }}
      >
        <div
          className="img-container"
          style={{
            backgroundImage: productInfo?.productId?.images?.[0]
              ? `url('${productInfo?.productId?.images?.[0]}')`
              : "none",
          }}
        ></div>
        <div className="info-container">
          <div className="container">
            <div className="title">
              {productInfo?.productId?.productId.name}
              {productInfo?.productId?.variations && (
                <>
                  {Object.entries(productInfo?.productId?.variations).map(
                    ([key, value]) => (
                      <span key={key + value}>{value}</span>
                    )
                  )}
                </>
              )}
            </div>
            {productInfo.isUpsell === true && (
              <div className={`cellWithStatus upsell capitalize`}>
                {t("upsell")}
              </div>
            )}
            {orderInfo.currentStatus === EnumOrderStatus.new && (
              <div
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  handleEditProduct(productInfo);
                }}
                className={`cellWithStatus edit capitalize`}
              >
                <EditIcon />
              </div>
            )}
            {orderInfo.currentStatus === EnumOrderStatus.new && (
              <div
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  handleClickDeleteProduct(productInfo);
                }}
                className={`cellWithStatus delete capitalize`}
              >
                <DeleteForeverIcon />
              </div>
            )}
            <div className="sub-info">
              <div className="key-value-pair">
                <div className="key"> {t("quantity")}:</div>
                <div className="value">
                  {productInfo?.offer?.quantity || productInfo?.quantity}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductsOrderCard;
