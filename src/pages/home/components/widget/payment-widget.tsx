import "./widget.scss";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import DropDownPaymentType from "../payment-type-button";
import { Link } from "react-router-dom";
interface widgets {
  amount: number;
  setQueryFilter: any;
  queryFilter: any;
}
const PaymentWidget = ({ amount, queryFilter, setQueryFilter }: widgets) => {
  const data = {
    title: "payment",
    isMoney: true,
    link: "/payments?pageSize=10&page=0",
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

  return (
    <div className="widget">
      <Link
        to={data?.link}
        className="widget-link"
        style={{
          display: "flex",
          width: "100%",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div className="left">
          <DropDownPaymentType
            queryFilter={queryFilter}
            setQueryFilter={setQueryFilter}
          />
          <span className="counter">
            {amount?.toFixed(2)}
            {data?.isMoney && " $"}
          </span>
        </div>
        <div className="right">{data?.icon}</div>
      </Link>
    </div>
  );
};

export default PaymentWidget;
