import React from "react";
import "./cta.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();
  return (
    <div className="gpt3__cta" id="cta">
      <div className="gpt3__cta-content">
        <p>{t("get started title")}</p>
        <h3>{t("get started content")}</h3>
      </div>
      <div className="gpt3__cta-btn">
        <Link to="/register" style={{ textDecoration: "none" }}>
          <button type="button">{t("get started")}</button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
