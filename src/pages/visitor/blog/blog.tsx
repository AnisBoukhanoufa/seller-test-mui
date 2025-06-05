
import Article from "../../../components/visitor/article/article";
import sa from "../../../assets/visitor/SA_flag.svg";
import uae from "../../../assets/visitor/UAE_flag.svg";
import bh from "../../../assets/visitor/bh_flag.svg";
import kw from "../../../assets/visitor/kw_flag.svg";
import om from "../../../assets/visitor/om_flag.svg";
import qa from "../../../assets/visitor/qa_flag.svg";
import "./blog.css";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  return (
    <div className="gpt3__blog " id="locations">
      <div className="gpt3__blog-heading">
        <h1>{t("Countries")}</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={sa} text={t("saudi")} />
          <Article imgUrl={uae} text={t("uae")} />
          <Article imgUrl={qa} text={t("qatar")} />
          <Article imgUrl={kw} text={t("kuwait")} />
          <Article imgUrl={bh} text={t("bahrain")} />
          <Article imgUrl={om} text={t("oman")} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
