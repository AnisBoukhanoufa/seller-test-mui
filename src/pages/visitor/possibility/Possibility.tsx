import React from "react";
import possibilityImage from "../../../assets/visitor/12.svg";
import shadow from "../../../assets/visitor/shadow.svg";
import "./possibility.css";
import { useTranslation } from "react-i18next";
import { fontWeight } from "@mui/system";
import RoomIcon from "@mui/icons-material/Room";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Possibility = () => {
  const { t } = useTranslation();
  return (
    <div className="gpt3__possibility section__padding" id="about-us">
      <div className="gpt3__possibility-image">
        <img className="globe" src={possibilityImage} alt="possibility" />
        <img src={shadow} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h1>COD TOOP</h1>
        <Content />
        
      </div>
    </div>
  );
};

const Content = () => {
  const { i18n } = useTranslation();
  if (i18n.language === "ar") {
    return (
      <p>
        شركة مختصة في الادارة اللوجيستية وتطوير
        <span className="bold color-secondary no-wrap">
          {" "}
          مشاريع التجارة الالكترونية{" "}
        </span>{" "}
        في دول <span className="bold color-secondary no-wrap"> الخليج </span>
      </p>
    );
  }

  return (
    <p>
      Is a company specialized in logistics and the developement of
      <span className="bold color-secondary no-wrap"> e-commerce</span> projects
      in the <span className="bold color-secondary">Gulf</span> counteries.
    </p>
  );
};

export default Possibility;
