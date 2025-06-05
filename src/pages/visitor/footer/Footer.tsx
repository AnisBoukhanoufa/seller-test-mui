import React from "react";
import facebook from "../../../assets/visitor/facebook.svg";
import instagram from "../../../assets/visitor/instagram.svg";
// import tiktok from "../../../assets/visitor/tiktok.svg";
import linkedin from "../../../assets/visitor/linkedin.svg";
// import youtube from "../../../assets/visitor/youtube.svg";
// import twitter from "../../../assets/visitor/twitter.svg";
import logo from "../../../assets/visitor/logo.svg";
import "./footer.css";
import { useTranslation } from "react-i18next";
import RoomIcon from "@mui/icons-material/Room";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import { Link } from "react-router-dom";

// const openWindow = (text) => {
//   window.open({ text }, "_blank", "noreferrer");
// };
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">{t("footer title")}</h1>
      </div>

      <div className="gpt3__footer-links">
        
        {/* <div className="gpt3__footer-div gpt3__footer-links_div">
          <h4>{t("about")}</h4>
          <a href="#about-us">
            <p>{t("about us")}</p>
          </a>

          <a href="#locations">
            <p>{t("locations")}</p>
          </a>

          <a href="#our-numbers">
            <p>{t("some numbers")}</p>
          </a>
        </div> */}
        <div className="gpt3__footer-div">
          <h4>{t("services")}</h4>
          <p>{t("sourcing")} </p>
          <p>{t("warehousing & fulfillment")}</p>
          <p>{t("shipping")}</p>
          <p>{t("call center")}</p>
          <p>{t("COD")}</p>
        </div>
        <div className="gpt3__footer-div">
          <h4>{t("solutions")}</h4>
          <p>{t("live statistics")} </p>
          <p>{t("simulation")}</p>
          <p>{t("account manager")}</p>
          <p>{t("live support")}</p>
        </div>


        <div className="gpt3__footer-div">
          <h4>{t("contact")}</h4>

          
          <p className="contact-info">
            <WhatsAppIcon />
            +213 770 40 77 87
          </p>
          <p className="contact-info">
            <RoomIcon />
            {t("key-algeria-location")}
          </p>
          <p className="contact-info email">
            <AlternateEmailIcon />
            contact@codtoop.com
          </p>
        </div>

      
      </div>
      <div className="gpt3__footer-links_logo">
  
  <div className="gpt3__footer-links_logo_social_media">
    <a href="https://www.linkedin.com/company/codtoop/posts/?feedView=all" target="_blank">
      <img src={linkedin} alt="COD TOOP LOGO" />
    </a>
    <a href="https://www.instagram.com/cod.toop/" target="_blank">
      <img src={instagram} alt="COD TOOP LOGO" />
    </a>
    <a href="https://web.facebook.com/profile.php?id=100072392371272" target="_blank">
      <img src={facebook} alt="COD TOOP LOGO" />
    </a>
  </div>
</div>
      <div className="gpt3__footer-copyright">
        <p>Copyright &copy; 2019 - {new Date().getFullYear()} COD TOOP. All rights reserved. </p>
      </div>
    </div>
  );
};
export default Footer;
