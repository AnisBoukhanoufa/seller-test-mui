import "./widget-orders.scss";
import { useTranslation } from "react-i18next";

interface widgets {
  type: string;
  amount: number;
  handleStats: () => void;
}

const WidgetOrders = ({ type, amount, handleStats }: widgets) => {
  const { t } = useTranslation();

  let data: {
    title: string;
    link: string;
    color: string;
  };

  switch (type) {
    case "total":
      data = {
        title: t("total"),
        link: "",
        color: getComputedStyle(document.body).getPropertyValue(
          "--color-total",
        ),
      };
      break;
    case "new":
      data = {
        title: t("new"),
        link: "",
        color: getComputedStyle(document.body).getPropertyValue("--color-new"),
      };
      break;

    case "inConfirmation":
      data = {
        title: t("in confirmation"),
        link: "",
        color: getComputedStyle(document.body).getPropertyValue(
          "--color-inConfirmation",
        ),
      };
      break;
    case "expired":
      data = {
        title: t("expired"),
        link: "",
        color: "#98a497",
      };
      break;

    case "wrong":
      data = {
        title: t("wrong"),
        link: "",
        color: getComputedStyle(document.body).getPropertyValue(
          "--color-wrong",
        ),
      };
      break;

    case "canceled":
      data = {
        title: t("canceled"),
        link: "",
        color: getComputedStyle(document.body).getPropertyValue(
          "--color-canceled",
        ),
      };
      break;

    case "confirmed":
      data = {
        title: t("confirmed"),
        link: "",
        color: getComputedStyle(document.body).getPropertyValue(
          "--color-confirmed",
        ),
      };
      break;

    case "shipping":
      data = {
        title: t("shipping"),
        link: "",
        color: getComputedStyle(document.body).getPropertyValue(
          "--color-shipping",
        ),
      };
      break;

    case "dispatched":
      data = {
        title: t("dispatched"),
        link: "",
        color: getComputedStyle(document.body).getPropertyValue(
          "--color-dispatched",
        ),
      };
      break;

    case "delivered":
      data = {
        title: t("delivered"),
        link: "",
        color: getComputedStyle(document.body).getPropertyValue(
          "--color-delivered",
        ),
      };
      break;
    case "return":
      data = {
        title: t("return"),
        link: "",
        color: getComputedStyle(document.body).getPropertyValue(
          "--color-return",
        ),
      };
      break;

    case "returned":
      data = {
        title: t("returned"),
        link: "",
        color:  getComputedStyle(document.body).getPropertyValue(
          "--color-returned",
        ),
      };
      break;

    default:
      data = {
        title: " ",
        link: " ",
        color: "",
      };
      break;
  }
  return (
    <div
      className="widgetOrders"
      style={{ background: data.color }}
      onClick={handleStats}
    >
      <div className="left-widget">
        <span className="title-widget">{data.title}</span>
        <span className="counter">{amount || 0}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right-widget"></div>
    </div>
  );
};

export default WidgetOrders;
