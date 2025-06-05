import "./thankyou.css";
import ok from "../../assets/ok.svg";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const Thankyou = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  function click() {
    navigate("/");
  }
  return (
    <div className="thankyou">
      <div className="thankyou-container">
        <div className="thankyou-contaner-box">
          <img src={logo} />
          <span className="text1">{t("thank you")}</span>
          <img src={ok} />
          <span className="text2">{t("for your registration")}</span>
          <span className="text3">
            {t("you will recieve an email to activate your account")}
          </span>
          <button className="thankyou-btn" onClick={click}>
            {t("done")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
