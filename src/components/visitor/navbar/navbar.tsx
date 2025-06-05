import { useEffect, useState } from "react";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../../assets/visitor/logo.svg";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import "../../../utils/i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  // const [toggleMenu, setToggleMenu] = useState(false);
  const [nav, setNav] = useState(true);
  const {
    t,
    // i18n
  } = useTranslation();
  const location = useLocation();
  const itemId = location.pathname.split("/")[1];
  // const lngs = {
  //   en: { nativeName: "En" },
  //   ar: { nativeName: "Ar" },
  // };

  useEffect(() => {
    if (
      itemId === "register" ||
      itemId === "signup" ||
      itemId === "forgetpassword"
    ) {
      setNav(false);
    } else setNav(true);
  }, [itemId]);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="CODTOOP" loading="lazy"/>
          </Link>
        </div>
        <div className="gpt3__navbar-links_container">
          {nav ? (
            <>
              <p>
                <a href="#home">{t("home")}</a>
              </p>

              <p>
                <a href="#about-us">{t("about us")}</a>
              </p>
              <p>
                <a href="#our-service">{t("our service")}</a>
              </p>
              <p>
                <a href="#locations">{t("countries")}</a>
              </p>
            </>
          ) : (
            <p>
              <Link to="/" style={{ textDecoration: "none" }}>
                <a>{t("home")}</a>
              </Link>
            </p>
          )}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <p>{t("sign in")}</p>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <button type="button">{t("sign up")}</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
