import "./brand.css";
import naqel from "../../../assets/visitor/naqel.svg";
import dhl from "../../../assets/visitor/dhl.svg";
import aramex from "../../../assets/visitor/aramex.svg";
import imile from "../../../assets/visitor/imile.svg";
import { useTranslation } from "react-i18next";
const Brand = () => {
  const { t } = useTranslation();
  return (
    <div className="gpt3__brand section__padding">
      <h1>{t("our partners")}</h1>
      <div className="brand-elements">
        <img src={naqel} alt="NAQEL" className="naqel" />
        <img src={dhl} alt="DHL" className="dhl" />
        <img src={aramex} alt="ARAMEx" className="aramex" />
        <img src={imile} alt="IMILE" className="imile" />
      </div>
    </div>
  );
};

export default Brand;
