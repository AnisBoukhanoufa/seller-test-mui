// import people from "../../assets/people.png";
import ai from "../../../assets//visitor/logistics.svg";
import "./header.css";
import { useTranslation } from "react-i18next";
// import { hometext } from "../../utils/text";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const { t, i18n } = useTranslation();
  let header_padding_class =
    i18n.language === "en"
      ? "section_header_padding_en"
      : "section_header_padding_ar";
  return (
    <div className="gpt3__header" id="home">
      <div className={"gpt3__header-content " + header_padding_class}>
        <h1 className="gradient__text">{t("slogan")}</h1>
        <p>{t("header content")}</p>
        {/* <Link to="/signup" style={{ textDecoration: "none" }}>
          <p>{t("Start ")}</p>
        </Link> */}
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  );
};

export default Header;
