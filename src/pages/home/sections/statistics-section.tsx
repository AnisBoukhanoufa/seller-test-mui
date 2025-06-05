// StatisticsSection.tsx
import React from "react";
import Widget from "../components/widget/widget";
import SubWidget from "../components/sub-widget/sub-widget";
// import SubWidget from "components/sub-widget/sub-widget";

interface StatisticsSectionProps {
  amount: {
    received: number;
    wills: number;
    balance: number;
    payment: number;
  };
  isLoading: boolean;
  rates: Array<any>;
  employeeRole: string;
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  amount,
  isLoading,
  rates,
  showBalance,
  balanceLoading,
  handleClickShowBalance,
}) => {
  const desiredOrderPaymentWidgets = [
    "received",
    "wills",
    "balance",
    "payment",
  ];

  const desiredOrderRatesWidgets = [
    "confirmed",
    "delivered",
    "wrong",
    "upsell",
  ];
  return (
    <>
      <div className="widgets-home">
        {desiredOrderPaymentWidgets.map((e) => (
          <Widget
            type={e}
            amount={amount[e]}
            isLoading={isLoading}
            showBalance={showBalance}
            balanceLoading={balanceLoading}
            handleClickShowBalance={handleClickShowBalance}
          />
        ))}
      </div>

      <div className="widgets-home">
        {desiredOrderRatesWidgets.map((desiredElement) => {
          const rate = rates.filter(
            (element) => element.name === desiredElement
          )[0];
          return <SubWidget key={rate.name} type={rate} />;
        })}
      </div>
    </>
  );
};

export default StatisticsSection;
