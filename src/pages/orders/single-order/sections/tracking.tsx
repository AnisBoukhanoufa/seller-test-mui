import { t } from "i18next";
import TrackingOrder from "pages/orders/components/order-tracking/order-tracking";

const TrackingSection = ({ orderInfo }) => {
  return (
    <div className="section">
      {/* Title and Separator */}
      <div className="sectionTitle">
        <div className="title">{t("tracking")}</div>
        <div className="separator"></div>
      </div>

      {/* Scrollable Tracking Content */}
      <div className="scroll-y">
        <TrackingOrder orderInfo={orderInfo} />
      </div>
    </div>
  );
};

export default TrackingSection;
