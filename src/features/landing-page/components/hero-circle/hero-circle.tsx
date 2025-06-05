import "./hero-circle.css";

type HeroCircleProps = {
  showDot: boolean;
  classes: string;
};

export default function HeroCircle({ showDot, classes }: HeroCircleProps) {
  return (
    <div className={`circle-container ${classes}`}>
      <div className={`gradiant-circle `}></div>
      {showDot && (
        <div className="arc-container">
          <div className="arc-circle">
            <div className="arc-dot"></div>
          </div>
        </div>
      )}
    </div>
  );
}
