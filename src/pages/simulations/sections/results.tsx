import React from "react";
import { useTranslation } from "react-i18next";

interface SimulationResultsProps {
  wills: number;
  investedCapital: number;
  adsCostPerPieceSold: number;
  totalProfitUpsell: number;
  payment: number;
  netProfit: number;
  profitToCapitalRatio: number;
}

const SimulationResults: React.FC<SimulationResultsProps> = ({
  wills,
  investedCapital,
  adsCostPerPieceSold,
  totalProfitUpsell,
  payment,
  netProfit,
  profitToCapitalRatio,
}) => {
  const { t } = useTranslation();

  return (
    <div className="results-calcs">
      <div className="single-result">
        <div className="fee-results-element">
          <div className="fee-result-title">{t("Revenue")}</div>
          <div className="fee-result-value dollar">{wills.toFixed(2) || 0}</div>
        </div>
      </div>
      <div className="single-result">
        <div className="fee-results-element">
          <div className="fee-result-title">{t("invested capital")}</div>
          <div className="fee-result-value dollar">
            {investedCapital.toFixed(2) || 0}
          </div>
        </div>
      </div>
      <div className="single-result">
        <div className="fee-results-element">
          <div className="fee-result-title">{t("ads cost per piece sold")}</div>
          <div className="fee-result-value dollar">
            {adsCostPerPieceSold.toFixed(2) ?? 0}
          </div>
        </div>
      </div>
      <div className="single-result">
        <div className="fee-results-element">
          <div className="fee-result-title">{t("total profit on upsell")}</div>
          <div className="fee-result-value dollar">
            {totalProfitUpsell.toFixed(2) || 0}
          </div>
        </div>
      </div>
      <div className="single-result">
        <div className="fee-results-element">
          <div className="fee-result-title">{t("payment")}</div>
          <div className="fee-result-value dollar">{payment.toFixed(2) || 0}</div>
        </div>
      </div>
      <div className="single-result">
        <div className="fee-results-element ">
          <div className="fee-result-title">{t("net profit")}</div>
          <div className="fee-result-value dollar">{netProfit.toFixed(2) || 0}</div>
        </div>
      </div>
      <div className="single-result">
        <div className="fee-results-element none-border">
          <div className="fee-result-title">{t("R O I")}</div>
          <div className="fee-result-value percentage">
            {isFinite(profitToCapitalRatio)
              ? (profitToCapitalRatio * 100).toFixed(2) || 0
              : 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationResults;
