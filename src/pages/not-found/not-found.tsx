import { useNavigate } from "react-router-dom";
import "./not-found.scss";
import { useTranslation } from "react-i18next";
const NotFound = () => {
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

export default NotFound;
