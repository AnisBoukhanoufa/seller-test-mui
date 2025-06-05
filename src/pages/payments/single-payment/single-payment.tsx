import { useLocation } from "react-router-dom";
import "./single-payment.scss";

import { useTranslation } from "react-i18next";
import moment from "moment";
import SellerLink from "components/seller-username-link/seller-username-link";
import { useEffect, useState } from "react";
import { baseRequest } from "utils/request-methods";
import { EnumPaymentType } from "statics/enums";
const SinglePayment = () => {
  const location = useLocation();
  const itemId = location.pathname.split("/")[2];

  const [paymentInfo, setPaymentInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await baseRequest.get(`/payment/single/${itemId}`);
      setPaymentInfo(res.data._doc);
    };
    fetchData();
  }, []);
  const { t } = useTranslation();

  return (
    <div className="single-payment">
      <div className="singleContainer overflowPreventerFlexbox">
        <div className="overflowPreventerContainer">
          <div className="overflowPreventer">
            <div className="top">
              <div className="left">
                <div className="item">
                  <div className="details">
                    <div className="headerContainer">
                      <div className="headerInfo">
                        <div className="detailItem">
                          <span className="itemKey capitalize">Id</span>
                          <span className="valueKey valueKeyId">
                            {paymentInfo?.id}
                          </span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey capitalize">
                            {t("created at")}
                          </span>
                          <span className="valueKey">
                            {moment(paymentInfo?.createdAt).format(
                              "DD/MM/YYYY"
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="titleContainer">
                      <h1 className="section-title">{t("information")}</h1>
                      <div className="separator" />
                    </div>

                    <div className="detailItem">
                      <span className="itemKey capitalize">
                        {t("seller")} :
                      </span>
                      <span className="valueKey" style={{ color: "black" }}>
                        {paymentInfo?.sellerId?.username}
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey capitalize">{t("type")} :</span>
                      <span className="valueKey">{t(paymentInfo?.type)}</span>
                    </div>
                    {paymentInfo?.type === EnumPaymentType.sourcing && (
                      <div className="detailItem">
                        <span className="itemKey capitalize">
                          {t("reason")} :
                        </span>
                        <span className="valueKey">
                          {`[ ${paymentInfo?.reason
                            .map((element) => t(element))
                            .join(" , ")} ]`}
                        </span>
                      </div>
                    )}
                    <div className="detailItem">
                      <span className="itemKey capitalize">
                        {t("amount")} :
                      </span>
                      <span className="valueKey">
                        {paymentInfo?.withdraw} $
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey capitalize">
                        {t("payment method")} :
                      </span>
                      <span className="valueKey">
                        {t(paymentInfo?.paymentMethod)}
                      </span>
                    </div>
                    {paymentInfo?.type === EnumPaymentType.sourcing ? (
                      <div className="detailItem">
                        <span className="itemKey capitalize">
                          {t("sourcing ID")} :
                        </span>
                        <span className="valueKey">
                          {paymentInfo?.sourcingId &&
                            `${paymentInfo?.sourcingId}`}
                        </span>
                      </div>
                    ) : (
                      <div className="detailItem">
                        <span className="itemKey capitalize">
                          {t("payment ID")} :
                        </span>
                        <span className="valueKey">
                          {paymentInfo?.paymentMethodId &&
                            `${paymentInfo?.paymentMethodId}`}
                        </span>
                      </div>
                    )}
                    <div className="detailItem">
                      <span className="itemKey capitalize">
                        {t("status")} :
                      </span>
                      <span
                        className={` cellWithStatus ${t(
                          paymentInfo?.currentStatus,
                          { lng: "en" }
                        )}`}
                      >
                        {t(paymentInfo?.currentStatus)}
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey capitalize">{t("note")} :</span>
                      <span className="valueKey">{t(paymentInfo?.note)}</span>
                    </div>
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

export default SinglePayment;
