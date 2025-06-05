import moment from "moment";
import DetailItem from "components/detail-item/detail-item";
import SellerLink from "components/seller-username-link/seller-username-link";
import CreatorLink from "components/creater-link/creator-link";
import { t } from "i18next";
import StatusCell from "components/status-cell";
import LinkIcon from "@mui/icons-material/Link";
import { Button, Link, TextField } from "@mui/material";

const OrderInfoSection = ({
  orderInfo,
  handleOpenEditOrderInfoDialog,
  handleOpenEditClientInfoDialog,
}) => {
  return (
    <>
      {/* Order ID and Created At Section */}
      <div className="section ">
        <div className="headerInfoContainer">
          <div className="headerInfo">
            <div className="detailItem">
              <span className="itemKey">{t("id")}</span>
              <span className="valueKey valueKeyId">{orderInfo?.id}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">{t("created at")}</span>
              <span className="valueKey">
                {moment(orderInfo?.createdAt).format("DD/MM/YYYY hh:mm A")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Client Info Section */}
      <div className="section">
        <div className="sectionTitle">
          <h1 className="title">{t("client info")}</h1>
          <div className="separator" />
        </div>
        <div className="details">
          <div className="order-infos">
            <DetailItem label={t("name")} value={orderInfo?.client?.name} />
            <DetailItem
              label={t("phone")}
              value={`+${orderInfo?.client?.phone.code}-${orderInfo?.client?.phone.number}`}
            />
            <DetailItem
              label={t("country")}
              value={t(orderInfo?.client?.country) || "/"}
            />
            <DetailItem
              label={t("city")}
              value={orderInfo?.client?.city || "/"}
            />
            {Object.entries(orderInfo?.client?.additionalInformation || {}).map(
              ([key, value]) => (
                <DetailItem label={t(key)} value={value} />
              )
            )}
            <DetailItem
              label={t("district")}
              value={orderInfo?.client?.district || "/"}
            />
            <DetailItem
              label={t("address")}
              value={orderInfo?.client?.address || "/"}
            />
            <div className="url">
              <div className="detailItem">
                <span className="itemKey capitalize">{t("location")} :</span>
              </div>
              <div className="link-field">
                <TextField
                  fullWidth
                  id="location"
                  InputProps={{ readOnly: true }}
                  value={orderInfo?.client?.location}
                />
                <Button
                  component={Link}
                  rel="noopener"
                  target="_blank"
                  href={`${orderInfo?.client?.location}`}
                >
                  <LinkIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className="edit-section">
            <div
              className="secondary-button"
              onClick={handleOpenEditClientInfoDialog}
            >
              {t("edit")}
            </div>
          </div>
        </div>
      </div>

      {/* Order Info Section */}
      <div className="section">
        <div className="sectionTitle">
          <h1 className="title">{t("order info")}</h1>
          <div className="separator" />
        </div>
        <div className="details">
          <div className="order-infos">
            <DetailItem
              label={t("seller")}
              value={
                <SellerLink
                  sellerId={orderInfo?.sellerId?._id}
                  username={orderInfo?.sellerId?.username}
                />
              }
            />
            <DetailItem
              label={t("price")}
              value={
                <>
                  {orderInfo?.totalPrice || "/"}{" "}
                  <span className="uppercase">{t(orderInfo?.currency)}</span>
                </>
              }
            />
            <DetailItem
              label={t("status")}
              value={<StatusCell status={orderInfo?.currentStatus} />}
            />
            <DetailItem label={t("note")} value={orderInfo?.note || "/"} />
            <DetailItem
              label={t("is confirmed")}
              value={orderInfo?.isConfirmed ? t("yes") : t("no")}
            />
            <DetailItem
              label={t("order creator")}
              value={
                orderInfo?.sellerId?._id === orderInfo?.creatorId?._id ? (
                  <SellerLink
                    sellerId={orderInfo?.sellerId?._id}
                    username={orderInfo?.sellerId?.username}
                  />
                ) : (
                  <CreatorLink
                    creatorId={orderInfo?.creatorId?._id}
                    username={orderInfo?.creatorId?.username}
                  />
                )
              }
            />
          </div>
          <div className="edit-section">
            <div
              className="secondary-button"
              onClick={handleOpenEditOrderInfoDialog}
            >
              {t("edit")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderInfoSection;
