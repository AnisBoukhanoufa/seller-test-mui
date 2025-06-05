// StatisticsSection.tsx
// import Widget from "../components/widget/widget";
import { useSelector } from "react-redux";
import BalanceWidget from "../components/widget/balance-widget";
import Widget from "../components/widget/widget";
import PaymentWidget from "../components/widget/payment-widget";

const PaymentsSection = ({ queryFilter, setQueryFilter }) => {
  const { received, wills, balance, payment } = useSelector(
    (state) => state.statistic.statistics
  );

  const desiredOrderPaymentWidgets = [
    "received",
    "wills",
    "balance",
    "payment",
  ];
  const payments = {
    received: received,
    wills: wills,
    balance: balance,
    payment: payment,
  };
  return (
    <>
      <div className="widgets-home">
        {desiredOrderPaymentWidgets.map((e) => {
          if (e === "balance") return <BalanceWidget amount={payments[e]} />;
          else if (e === "payment")
            return (
              <PaymentWidget
                setQueryFilter={setQueryFilter}
                queryFilter={queryFilter}
                amount={payments[e]}
              />
            );
          else return <Widget type={e} amount={payments[e]} />;
        })}
      </div>
    </>
  );
};

export default PaymentsSection;
