import { useTranslation } from "react-i18next"; // Assuming you're using i18next for translations

const FeeSimulation = ({
  inputs,
  handleInput,
  focusClear,
  blurValue,
  productCostTotal,
  adsTotal,
  quantity,
  leadsConfirmation,
  totalConfirmation,
  upsellQuantityDelivered,
  feeTotal,
  totalCostDelivery,
  totalCostReturn,
  totalExtraExpenses,
  wills,
  investedCapital,
  adsCostPerPieceSold,
  totalProfitUpsell,
  payment,
  netProfit,
  profitToCapitalRatio,
  tasks,
  callCenter,
  shipping,
}) => {
  const { t } = useTranslation();

  return (
    <div className="table-center">
      <div className="single-row">
        <div className="row-left">
          <div className="element-type">
            <div className="element-icon">
              <img src={tasks} alt="operation" className="rotate10" />
            </div>
            <div className="element-title capitalize">{t("operations")}</div>
          </div>
        </div>

        <div className="row-center">
          <div className="fee-row-container">
            <h3> {t("product")}</h3>
            <div className="fee-row-elements">
              <div className="fee-row-element-simulation">
                <span className="fee-row-title">{t("cost")}</span>
                <input
                  className="fee-row-input-simultaion"
                  type="number"
                  autoComplete="off"
                  value={inputs?.productCost ?? ""}
                  onChange={handleInput}
                  name="productCost"
                  onFocus={focusClear}
                  onBlur={blurValue}
                  min="0"
                />
              </div>
              <div className="fee-row-element-simulation result">
                <span className="fee-row-title">{t("quantity")}</span>
                <span className="fee-row-value">{quantity ?? ""}</span>
              </div>
              <div className="fee-row-element-simulation result">
                <span className="fee-row-title">{t("total")}</span>
                <span className="fee-row-value dollar">
                  {productCostTotal ? productCostTotal.toFixed(2) : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="fee-row-container">
            <h3> {t("ads")}</h3>
            <div className="fee-row-elements">
              <div className="fee-row-element-simulation">
                <span className="fee-row-title">{t("cost")}</span>
                <input
                  min="0"
                  className="fee-row-input-simultaion"
                  type="number"
                  name="adsCost"
                  autoComplete="off"
                  defaultValue={0}
                  value={inputs?.adsCost ?? ""}
                  onChange={handleInput}
                  onFocus={focusClear}
                  onBlur={blurValue}
                />
              </div>
              <div className="fee-row-element-simulation result">
                <span className="fee-row-title">{t("leads")}</span>

                <span className="fee-row-value">{inputs?.leads ?? ""}</span>
              </div>

              <div className="fee-row-element-simulation result">
                <span className="fee-row-title">{t("total")}</span>
                <span className="fee-row-value dollar">
                  {adsTotal ? adsTotal.toFixed(2) : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="fee-row-container">
            <h3> {t("extra expenses")}</h3>
            <div className="fee-row-elements">
              <div className="fee-row-element-simulation">
                <span className="fee-row-title">{t("extra expenses")}</span>
                <input
                  min="0"
                  className="fee-row-input-simultaion"
                  type="number"
                  name="extraExpenses"
                  autoComplete="off"
                  defaultValue={0}
                  value={inputs?.extraExpenses ?? ""}
                  onChange={handleInput}
                  onFocus={focusClear}
                  onBlur={blurValue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single-row">
        <div className="row-left">
          <div className="element-type">
            <div className="element-icon">
              <img src={callCenter} alt="call center" />
            </div>
            <div className="element-title capitalize">{t("call center")}</div>
          </div>
        </div>

        <div className="row-center">
          <div className="fee-row-container">
            <h3> {t("confirmation")}</h3>

            <div className="fee-row-elements">
              <div className="fee-row-element-simulation call-center-fee">
                <span className="new">
                  <span className="fee-row-title ">{t("new")}</span>
                  <input
                    min="0"
                    className="fee-row-input-simultaion"
                    type="number"
                    name="newFee"
                    autoComplete="off"
                    defaultValue={0}
                    value={inputs?.newFee ?? ""}
                    onChange={handleInput}
                    onFocus={focusClear}
                    onBlur={blurValue}
                  />
                </span>
                <span className=" confirm-follow">
                  <span className="fee-row-title">{t("fee")}</span>
                  <input
                    min="0"
                    className="fee-row-input-simultaion"
                    type="number"
                    name="confirmationFee"
                    autoComplete="off"
                    defaultValue={0}
                    value={inputs?.confirmationFee ?? ""}
                    onChange={handleInput}
                    onFocus={focusClear}
                    onBlur={blurValue}
                  />
                </span>
              </div>
              <div className="fee-row-element-simulation result">
                <span className="fee-row-title">{t("leads")}</span>
                <span className="fee-row-value">{leadsConfirmation || 0}</span>
              </div>
              <div className="fee-row-element-simulation result">
                <span className="fee-row-title">{t("total")}</span>
                <span className="fee-row-value dollar">
                  {totalConfirmation ? totalConfirmation.toFixed(2) : 0}
                </span>
              </div>
            </div>
          </div>

          <div className="fee-row-container">
            <h3> {t("upsell")}</h3>
            <div className="fee-row-elements">
              <div className="fee-row-sub-elements">
                <div className="fee-row-element-simulation">
                  <span className="fee-row-title">{t("fee")}</span>
                  <input
                    min="0"
                    className="fee-row-input-simultaion"
                    type="number"
                    name="upsellFee"
                    value={inputs?.upsellFee ?? ""}
                    autoComplete="off"
                    defaultValue={0}
                    onChange={handleInput}
                    onFocus={focusClear}
                    onBlur={blurValue}
                  />
                </div>

                <div className="fee-row-element-simulation">
                  <span className="fee-row-title">{t("product cost")}</span>
                  <input
                    min="0"
                    className="fee-row-input-simultaion"
                    type="number"
                    name="upsellProductCost"
                    autoComplete="off"
                    defaultValue={0}
                    value={inputs?.upsellProductCost ?? ""}
                    onChange={handleInput}
                    onFocus={focusClear}
                    onBlur={blurValue}
                  />
                </div>
              </div>

              <div className="fee-row-sub-elements">
                <div className="fee-row-element-simulation result">
                  <span className="fee-row-title">{t("leads delivered")}</span>

                  <span className="fee-row-value ">
                    {upsellQuantityDelivered || 0}
                  </span>
                </div>
                <div className="fee-row-element-simulation">
                  <span className="fee-row-title">{t("price")}</span>
                  <input
                    min="0"
                    className="fee-row-input-simultaion"
                    type="number"
                    name="upsellPrice"
                    autoComplete="off"
                    defaultValue={0}
                    value={inputs?.upsellPrice ?? ""}
                    onChange={handleInput}
                    onFocus={focusClear}
                    onBlur={blurValue}
                  />
                </div>
              </div>
              <div className="fee-row-sub-elements">
                <div className="fee-row-element-simulation result">
                  <span className="fee-row-title">{t("total")}</span>
                  <span className="fee-row-value dollar">
                    {feeTotal ? feeTotal.toFixed(2) : 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single-row">
        <div className="row-left last-child">
          <div className="element-type">
            <div className="element-icon">
              <img src={shipping} alt="shipping" />
            </div>
            <div className="element-title shipping">{t("shipping")}</div>
          </div>
        </div>

        <div className="row-center">
          <div className="fee-row-container">
            <h3> {t("delivery")}</h3>
            <div className="fee-row-elements">
              <div className="fee-row-element-simulation">
                <span className="fee-row-title ">{t("fee")}</span>
                <input
                  min="0"
                  className="fee-row-input-simultaion"
                  type="number"
                  name="deliveryFee"
                  autoComplete="off"
                  defaultValue={0}
                  value={inputs?.deliveryFee ?? ""}
                  onChange={handleInput}
                  onFocus={focusClear}
                  onBlur={blurValue}
                />
              </div>
              <div className="fee-row-element-simulation result">
                <span className="fee-row-title">{t("leads")}</span>
                <span className="fee-row-value">{quantity || 0}</span>
              </div>
              <div className="fee-row-element-simulation result">
                <span className="fee-row-title">{t("total")}</span>
                <span className="fee-row-value dollar">
                  {totalCostDelivery ? totalCostDelivery.toFixed(2) : 0}
                </span>
              </div>
            </div>
          </div>

          <div className="fee-row-container">
            <h3> {t("return")}</h3>
            <div className="fee-row-elements">
              <div className="fee-row-element-simulation">
                <span className="fee-row-title">{t("return")}</span>
                <input
                  min="0"
                  className="fee-row-input-simultaion"
                  type="number"
                  name="returnFee"
                  autoComplete="off"
                  defaultValue={0}
                  value={inputs?.returnFee ?? ""}
                  onChange={handleInput}
                  onFocus={focusClear}
                  onBlur={blurValue}
                />
              </div>
              <div className="fee-row-element-simulation result">
                <span className="fee-row-title">{t("leads")}</span>
                <span className="fee-row-value">
                  {leadsConfirmation - quantity || 0}
                </span>
              </div>
              <div className="fee-row-element-simulation result">
                <span className="fee-row-title">{t("total")}</span>
                <span className="fee-row-value dollar">
                  {totalCostReturn ? totalCostReturn.toFixed(2) : 0}
                </span>
              </div>
            </div>
          </div>

          <div className="fee-row-container">
            <h3> {t("fees")}</h3>
            <div className="fee-row-elements">
              <div className="fee-row-element-simulation">
                <span className="fee-row-title  ">{t("vat")}</span>
                <div className="percentage-input">
                  <input
                    min="0"
                    className="fee-row-input-simultaion"
                    type="number"
                    name="vatFee"
                    autoComplete="off"
                    value={inputs?.vatFee ?? ""}
                    defaultValue={0}
                    onChange={handleInput}
                    onFocus={focusClear}
                    onBlur={blurValue}
                  />
                  {inputs?.vatFee !== 0 && (
                    <span className="percentage-sign">%</span>
                  )}
                </div>
              </div>
              <div className="fee-row-element-simulation">
                <span className="fee-row-title ">{t("cod")}</span>
                <div className="percentage-input">
                  <input
                    min="0"
                    className="fee-row-input-simultaion"
                    type="number"
                    name="codFee"
                    autoComplete="off"
                    defaultValue={0}
                    value={inputs?.codFee ?? ""}
                    onChange={handleInput}
                    onFocus={focusClear}
                    onBlur={blurValue}
                  />
                  {inputs?.codFee !== 0 && (
                    <span className="percentage-sign">%</span>
                  )}
                </div>
              </div>
              <div className="fee-row-element-simulation result">
                <span className="fee-row-title">{t("total")}</span>
                <span className="fee-row-value dollar">
                  {totalExtraExpenses ? totalExtraExpenses.toFixed(2) : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single-row">
        <div className="row-center-result">
          <div className="single-result">
            <div className="fee-results-element">
              <div className="fee-result-title">{t("wills")}</div>
              <div className="fee-result-value dollar">{wills.toFixed(2)}</div>
            </div>
          </div>
          <div className="single-result">
            <div className="fee-results-element">
              <div className="fee-result-title">{t("invested capital")}</div>
              <div className="fee-result-value dollar">
                {investedCapital.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="single-result">
            <div className="fee-results-element">
              <div className="fee-result-title">
                {t("ads cost per piece sold")}
              </div>
              <div className="fee-result-value dollar">
                {isFinite(adsCostPerPieceSold) &&
                  adsCostPerPieceSold.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="single-result">
            <div className="fee-results-element">
              <div className="fee-result-title">
                {t("total profit on upsell")}
              </div>
              <div className="fee-result-value dollar">
                {totalProfitUpsell ? totalProfitUpsell.toFixed(2) : 0}
              </div>
            </div>
          </div>
          <div className="single-result">
            <div className="fee-results-element">
              <div className="fee-result-title">{t("payment")}</div>
              <div className="fee-result-value dollar">
                {payment.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="single-result">
            <div className="fee-results-element">
              <div className="fee-result-title">{t("net profit")}</div>
              <div className="fee-result-value dollar">
                {isNaN(netProfit) ? netProfit.toFixed(2) : 0}
              </div>
            </div>
          </div>
          <div className="single-result ">
            <div className="fee-results-element ">
              <div className="fee-result-title only-child">{t("R O I")}</div>
              <div className="fee-result-value percentage">
                {isFinite(profitToCapitalRatio)
                  ? (profitToCapitalRatio * 100).toFixed(2) || 0
                  : 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeSimulation;
