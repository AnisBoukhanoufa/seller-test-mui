import "./statistics.css";
import stat1 from "../../../assets/visitor/stat1.svg";
import stat2 from "../../../assets/visitor/stat2.svg";
import stat3 from "../../../assets/visitor/stat3.svg";
import { useTranslation } from "react-i18next";

const Statistics = () => {
  const { t } = useTranslation();
  return (
    <div className="GPT-statistics section__padding" id="statistics">

      <div className="stat-text">
        <h1>{t("live statistics")}</h1>
        <p>{t("statistics content")}</p>
      </div>

      <div className="stat-image">
        <img className="img1" src={stat1} alt="statistics" />
        <img className="img2" src={stat2} alt="statistics" />
        <img className="img3" src={stat3} alt="statistics" />
      </div>
      
    </div>
  );
};

export default Statistics;
