import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./single-sourcing.scss";

import { useTranslation } from "react-i18next";

import moment from "moment";
import { baseRequest } from "utils/request-methods";
import SubProductsCards from "pages/sourcings/components/sourcing-product-card/sourcing-product-card";
import SourcingProductDetail from "pages/sourcings/components/sourcing-product-detail/sourcing-product-detail";


export const SourcingContext = createContext(null);
const SingleSourcing = () => {

  const location = useLocation();
  const itemId = location.pathname.split("/")[2];


  const [sourcingInfo, setSourcingInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await baseRequest.get(`/sourcing/single/${itemId}`);
      setSourcingInfo(res.data._doc);
    };
    fetchData();
  }, []);

  const { t } = useTranslation();

  //handle selected card
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    if (sourcingInfo._id) {
      setSelectedCardId(sourcingInfo?.products[0]._id);
    }
  }, [sourcingInfo._id]);

  return (
    <SourcingContext.Provider value={{ sourcingInfo, setSourcingInfo }}>
      <div className="singleSourcing">
        <div className="singleContainer overflowPreventerFlexbox">
          <div className="overflowPreventerContainer">
            <div className="overflowPreventer">
              <div className="top">
                <div className="left">
                  <div className="headerInfoContainer">
                    <div className="headerInfo sourcing">
                      <div className="details">
                        <div className="detailItem">
                          <span className="itemKey">{t("id")} :</span>
                          <span className="valueKey valueKeyId">
                            {sourcingInfo?.id}
                          </span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">{t("created at")} :</span>
                          <span className="valueKey">
                            {moment(sourcingInfo?.createdAt).format(
                              "DD/MM/YYYY hh:mm A"
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="details">
                      <div className="cardTitle">
                        <span className="valueKey">{t("sourcing info")}</span>
                        <div className="separator" />
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">{t("seller")} :</span>
                        <span className="valueKey">
                          {sourcingInfo?.sellerId?.username}
                        </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">{t("type")} :</span>
                        <span className="valueKey sourcing-category">
                          {t(sourcingInfo?.category)}
                        </span>
                        <span
                          className={`valueKey cellWithStatus ${t(
                            sourcingInfo?.type
                            , { lng: 'en' } )}`}
                        >
                          {t(sourcingInfo?.type)}
                        </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">{t("from")} :</span>
                        <span className="valueKey">
                          {sourcingInfo?.sourceCountry}
                        </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">{t("To")} :</span>
                        <span className="valueKey">
                          {t(sourcingInfo?.destinationCountry)}
                        </span>
                      </div>

                      <div className="detailItem">
                        <span className="itemKey">{t("status")} :</span>
                        <span
                          className={`valueKey cellWithStatus ${t(
                            sourcingInfo?.currentStatus
                            , { lng: 'en' } )}`}
                        >
                          {t(sourcingInfo?.currentStatus)}
                        </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">{t("description")} :</span>
                        {sourcingInfo?.description ? (
                          <span className="valueKey">
                            {sourcingInfo?.description}
                          </span>
                        ) : (
                          <span className="valueKey">{t("none")}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="cards-container">
                    <SubProductsCards
                      setSelectedCardId={setSelectedCardId}
                      selectedCardId={selectedCardId}
                      subProducts={sourcingInfo.products}
                    />
                  </div>
                </div>
              </div>
              <div className="bottom-container">
                <div className="bottom">
                  <SourcingProductDetail
                    product={
                      sourcingInfo.products?.filter((e) => {
                        return e._id === selectedCardId;
                      })[0]
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SourcingContext.Provider>
  );
};

export default SingleSourcing;
