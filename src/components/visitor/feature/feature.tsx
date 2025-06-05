import "./feature.css";

const Feature = ({ imgUrl, title }) => (
  <div className="gpt3__features-container__featuree">
    <div className="gpt3__features-container__feature-title">
      <div className="image_container">
        <img src={imgUrl} alt="" />
      </div>

      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-texte"></div>
  </div>
);

export default Feature;
