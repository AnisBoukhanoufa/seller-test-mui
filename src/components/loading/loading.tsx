import "./loading.scss";

const LoadingAnimation = (props: any) => {
  return (
    <div className="typing-indicator">
      <div className="typing-circle"></div>
      <div className="typing-circle"></div>
      <div className="typing-circle"></div>
      <div className="typing-shadow"></div>
      <div className="typing-shadow"></div>
      <div className="typing-shadow"></div>
    </div>
  );
};

export default LoadingAnimation;
