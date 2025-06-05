
import "./number.css";
import CountUp from "react-countup";

const Number = ({ image, number, title, span, plus }) => {
  return (
    <div className="number">
      <img src={image} alt={title} />
      <div className="number-container" dir="ltr">
        <span className="number">
          <div style={{ display: "flex" }}>
            {plus}
            {number == 9 ? "0" : ""}
            <CountUp end={number} delay={2} className="counter" />
            {span}
          </div>
        </span>
        <hr></hr>
        <span className="title">{title}</span>
      </div>
    </div>
  );
};

export default Number;
