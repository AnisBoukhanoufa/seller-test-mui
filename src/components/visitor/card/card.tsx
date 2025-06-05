import React from "react";
import "./card.css";
const Card = ({ image, text, author, position }) => {
  return (
    <div className="card">
      <div className="card-head">
        <img src={image} alt="" />
        <div className="card-names">
          <span className="author">{author}</span>
          <span className="position">{position}</span>
        </div>
      </div>

      <div className="card-container">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
