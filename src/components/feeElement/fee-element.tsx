import "./feeElement.scss";

const FeeElement = (props: any) => {
  return (
    <div className="feeElement">
      <span className="close-button" onClick={props.handleClose}>
        x
      </span>
      <div className="title">{props.content}</div>
    </div>
  );
};

export default FeeElement;
