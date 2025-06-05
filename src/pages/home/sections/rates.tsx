// RatesSection.tsx
import { useSelector } from "react-redux";
import SubWidget from "../components/sub-widget/sub-widget";
import useRates from "../hooks/use-rates";

const RatesSection = () => {
  const ratesCount = useSelector(
    (state) => state.statistic.statistics.ratesCount
  );
  const desiredOrderRatesWidgets = [
    "confirmed",
    "delivered",
    "wrong",
    "upsell",
  ];
  useRates();

  return (
    <>
      <div className="widgets-home">
        {desiredOrderRatesWidgets.map((desiredElement) => {
          const rate = ratesCount.filter(
            (element) => element.name === desiredElement
          )[0];
          return <SubWidget key={rate.name} type={rate} />;
        })}
      </div>
    </>
  );
};

export default RatesSection;
