import "./sub-widget.scss";
import { t } from "i18next";
interface widgets {
  type: {
    name: string;
    value: number;
    last30days: number;
  };
}
const SubWidget = ({ type }: widgets) => {
  return (
    <div className="subWidget">
      <div className="left">
        <span className="title">{t(type.name)}</span>
        <span className="counter">
          {isFinite(type.value) ? type.value.toFixed(2) : 0}%
        </span>
      </div>
    </div>
  );
};

export default SubWidget;
