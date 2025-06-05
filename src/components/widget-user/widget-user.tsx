import { EnumEmployeeRole } from "statics/enums";
import "./widget-user.scss";
import { useTranslation } from "react-i18next";

interface widgets {
  type: string;
  amount: number;
  handleStats: () => void;
}

const WidgetUser = ({ type, amount, handleStats }: widgets) => {
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
    case "active":
      data = {
        title: t("Active"),
        link: "",
        color: "green",
      };
      break;

    case "inactive":
      data = {
        title: t("Inactive"),
        link: "",
        color: "rgb(36, 36, 36)",
      };
      break;
    case "banned":
      data = {
        title: t("Banned"),
        link: "",
        color: "red",
      };
      break;
    case "duplicated":
      data = {
        title: t("Duplicated"),
        link: "",
        color: "#7B3F00",
      };
      break;
    case "affiliate":
      data = {
        title: t("Affiliate"),
        link: "",
        color: getComputedStyle(document.body).getPropertyValue(
          "--color-secondary",
        ),
      };
      break;

    case "seller":
      data = {
        title: t("Seller"),
        link: "",
        color: getComputedStyle(document.body).getPropertyValue("--color-main"),
      };
      break;
    case "totalRoles":
      data = {
        title: t("Sellers And Affiliates"),
        link: "",
        color: "#127A7F",
      };
      break;
    case "totalRolesEmployees":
      data = {
        title: t("total"),
        link: "",
        color: "#127A7F",
      };
      break;
    case "all":
      data = {
        title: t("Total Employees"),
        link: "",
        color: "#127A7F",
      };
      break;
    case "admin":
      data = {
        title: t(EnumEmployeeRole.admin),
        link: "",
        color: "#023e8a",
      };
      break;
    case "sm":
      data = {
        title: t(EnumEmployeeRole.sm),
        link: "",
        color: "#22b573 ",
      };
      break;
    case "am":
      data = {
        title: t(EnumEmployeeRole.am),
        link: "",
        color: "#FF6F61",
      };
      break;
    case "confirmer":
      data = {
        title: t(EnumEmployeeRole.confirmer),
        link: "",
        color: "#22b5a5",
      };
      break;
    case "follower":
      data = {
        title: t(EnumEmployeeRole.follower),
        link: "",
        color: "#B565A7 ",
      };
      break;
    default:
      data = {
        title: "",
        link: "",
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

export default WidgetUser;
