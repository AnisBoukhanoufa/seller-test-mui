import "./widget.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { t } from "i18next";
import { Link, useSearchParams } from "react-router-dom";
import { EnumOrderStatus } from "statics/enums";
// import { EnumCurrentStatus } from "path-to-your-enums"; // Update with actual path

interface WidgetProps {
  type: string;
  amount: number;
}

const Widget = ({ type, amount }: WidgetProps) => {
  const [searchParams] = useSearchParams();
  const order = searchParams.get("order");

  let data: {
    title: string;
    isMoney: boolean;
    link: string;
    icon: JSX.Element;
    noLink?: boolean;
  };

  switch (type) {
    case "received":
      data = {
        title: "received",
        isMoney: true,
        link: getReceivedLink(order),
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon-widget"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.5)" }}
          />
        ),
        noLink: order === "affiliate",
      };
      break;

    case "wills":
      data = {
        title: "revenue",
        isMoney: true,
        link: getWillsLink(),
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon-widget"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
        noLink: order === "affiliate",
      };
      break;

    case "payment":
      data = {
        title: "payment",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon-widget"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;

    default:
      data = {
        title: "default",
        isMoney: true,
        link: "#",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon-widget"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
  }

  function getReceivedLink(order: string | null): string {
    switch (order) {
      case "seller":
        return `/invoices-normal-seller?page=0&pageSize=10&currentStatus=${EnumOrderStatus.delivered}`;
      case "toopDrop":
        return `/invoices-toop-drop?page=0&pageSize=10&currentStatus=${EnumOrderStatus.delivered}`;
      default:
        return null;
    }
  }

  function getWillsLink(): string {
    switch (order) {
      case "seller":
        return `/invoices-normal-seller`;
      case "toopDrop":
        return `/invoices-toop-drop`;
      default:
        return null;
    }
  }

  const content = (
    <>
      <div className="left">
        <span className="title uppercase">{t(data.title)}</span>
        <span className="counter">
          {amount?.toFixed(2)}
          {data.isMoney && " $"}
        </span>
      </div>
      <div className="right">{data.icon}</div>
    </>
  );

  return data.noLink ? (
    <div className="widget">{content}</div>
  ) : (
    <Link
      className="widget"
      to={data.link}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {content}
    </Link>
  );
};

export default Widget;
