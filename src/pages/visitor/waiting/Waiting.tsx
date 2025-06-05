import { useNavigate } from "react-router";
import ok from "../../assets/waiting.svg";
import logo from "../../assets/logo.svg";
import "./waiting.css";
import { useTranslation } from "react-i18next";

const Waiting = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  function click() {
    navigate("/");
  }
  return (
    <div>
      <div className="waiting">
        <div className="waiting-container">
          <div className="waiting-contaner-box">
            <img src={logo} />
            <span className="text1">{t("please wait")}</span>
            <img className="waiting-img" src={ok} />
            <span className="text2">
              {t("your account is under verification")}
            </span>
            <span className="text3">{t("we will call you soon")}</span>
            <button className="waiting-btn" onClick={click}>
              {t("done")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waiting;
