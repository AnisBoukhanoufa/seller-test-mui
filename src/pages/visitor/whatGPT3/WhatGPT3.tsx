import Feature from "../../../components/visitor/feature/feature";
import "./whatGPT3.css";
import shipping from "../../../assets/visitor/truck.svg";
import warehouse from "../../../assets/visitor/warehouse.svg";
import callcenter from "../../../assets/visitor/headphone.svg";
import sourcing from "../../../assets/visitor/globe.svg";
import fulfillment from "../../../assets/visitor/package.svg";
import remittance from "../../../assets/visitor/wallet.svg";
import { useTranslation } from "react-i18next";

const WhatGPT3 = () => {
  const { t } = useTranslation();
  return (
    <div className="gpt3__whatgpt3" id="our-service">
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          {t("our service")}
        </h1>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature imgUrl={sourcing} title={t("sourcing")} />
        <Feature imgUrl={warehouse} title={t("warehousing")} />
        <Feature imgUrl={fulfillment} title={t("fulfillment")} />
        <Feature imgUrl={callcenter} title={t("call center")} />
        <Feature imgUrl={shipping} title={t("shipping")} />
        <Feature imgUrl={remittance} title={t("cod")} />
      </div>
      <div className="gpt3__whatgpt3-feature"></div>
    </div>
  );
};

export default WhatGPT3;
