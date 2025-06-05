import React from "react";
import "./notfound.css";
import { useTranslation } from "react-i18next";
import ok from "../../../assets/visitor/waiting.svg";
import logo from "../../../assets/visitor/logo.svg";
import { useNavigate } from "react-router";

const Notfound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  function click() {
    navigate(-1);
  }

  return (
    <div className="notfound">
      <div className="notfound-container">
        <div className="waiting-contaner-box">
          <span className="text1">404</span>
          <span className="text2">{t("page not found")}</span>
          <button className="waiting-btn" onClick={click}>
            {t("back")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
