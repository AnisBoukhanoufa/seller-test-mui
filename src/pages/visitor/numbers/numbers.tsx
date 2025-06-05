
import Number from "../../../components/visitor/number/number";
import people from "../../../assets/visitor/people.svg";
import world from "../../../assets/visitor/worldwide.svg";
import order from "../../../assets/visitor/fast-delivery.svg";
import teamwork from "../../../assets/visitor/teamwork.svg";
import affiliate from "../../../assets/visitor/affiliate.svg";
import warehouse from "../../../assets/visitor/warehouse 1.svg";
import "./numbers.css";
import { useTranslation } from "react-i18next";
const Numbers = () => {
  const { t } = useTranslation();
  return (
    <div className="numbers" id="our-numbers">
      <h1>{t("some numbers")}</h1>
      <div className="numbers-container">
        <div className="number-contanier">
          <Number
            image={people}
            plus="+"
            number="6"
            span="k"
            title={t("sellers")}
          />
        </div>
        <div className="number-contanier">
          <Number
            image={affiliate}
            plus="+"
            number="12"
            span="k"
            title={t("affiliates")}
          />
        </div>
        <div className="number-contanier">
          <Number
            image={order}
            plus="+"
            number="7"
            span="k"
            title={t("daily orders")}
          />
        </div>
        <div className="number-contanier">
          <Number
            image={warehouse}
            number="14"
            plus=""
            span=""
            title={t("warehouses")}
          />
        </div>
        <div className="number-contanier">
          <Number
            image={world}
            number="09"
            plus=""
            span=""
            title={t("countries")}
          />
        </div>
        <div className="number-contanier">
          *
          <Number
            image={teamwork}
            plus="+"
            number="270"
            span=""
            title={t("employees")}
          />
        </div>
      </div>
    </div>
  );
};

export default Numbers;
