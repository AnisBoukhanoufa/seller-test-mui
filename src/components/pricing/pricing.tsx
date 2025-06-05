import "./pricing.scss";
import { useTranslation } from "react-i18next";
import callCenter from "../../assets/call-center.svg";
import vat from "../../assets/vat.svg";
import tasks from "../../assets/tasks.svg";
import shipping from "../../assets/shipping.svg";
import sourcingPlan from "../../assets/sourcing-plan.svg";

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <div className="single-pricing">
      <div className="singleContainer ">
        <div className="top">
          <h1 className="page-title">{t("pricing plane")}</h1>
        </div>

        <div className="bottom">
          <div className="overflowPreventer">
            <div className="table pricing-table w-full p-10">
              <div className="table-center">
                <div className="single-row">
                  <div className="row-left">
                    <div className="element-type">
                      <div className="element-icon">
                        <img src={sourcingPlan} alt="shipping" />
                      </div>
                      <div className="element-title">{t("shipping")}</div>
                      <div className="element-subtitle">
                        {t("from china to gcc")}
                      </div>
                    </div>
                  </div>
                  <div className="row-center">
                    <div className="fee-title"></div>
                    <div className="fee-title">{t("70")}</div>
                    <div className="fee-title">{t("71")}</div>
                    <div className="fee-title">{t("73")}</div>
                    <div className="fee-title">{t("72")}</div>
                    <div className="fee-title">{t("74")}</div>
                    <div className="fee-title">{t("75")}</div>
                  </div>
                  <div className="row-right">
                    <div className="row-right-side">
                      <div className="row-right">
                        <div className="fee-title">{t("air freight")}</div>
                        <div className="fee-value dollar-kg">11</div>
                        <div className="fee-value dollar-kg">9</div>
                        <div className="fee-value dollar-kg">10</div>
                        <div className="fee-value dollar-kg">10</div>
                        <div className="fee-value dollar-kg">12</div>
                        <div className="fee-value dollar-kg">9</div>
                      </div>
                      <div className="row-right">
                        <div className="fee-title">{t("sea freight")}</div>
                        <div className="fee-value dollar-cbm">170</div>
                        <div className="fee-value dollar-cbm">120</div>
                        <div className="fee-value dollar-cbm">165</div>
                        <div className="fee-value dollar-cbm">185</div>
                        <div className="fee-value dollar-cbm">280</div>
                        <div className="fee-value dollar-cbm">190</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-row">
                  <div className="row-left">
                    <div className="element-type">
                      <div className="element-icon">
                        <img src={tasks} alt="operation" className="rotate10" />
                      </div>
                      <div className="element-title">{t("operations")}</div>
                    </div>
                  </div>
                  <div className="row-center">
                    {/* <div className="fee-title">{t('sourcing')}</div> */}
                    <div className="fee-title">{t("storage")}</div>
                    <div className="fee-title">{t("packaging")}</div>
                  </div>
                  <div className="row-right">
                    {/* <div className="fee-value free">{t("free")}</div> */}
                    <div className="fee-value free">{t("free")}</div>
                    <div className="fee-value free">{t("free")}</div>
                  </div>
                </div>
                <div className="single-row">
                  <div className="row-left">
                    <div className="element-type">
                      <div className="element-icon">
                        <img src={callCenter} alt="call center" />
                      </div>
                      <div className="element-title">{t("call center")}</div>
                    </div>
                  </div>

                  <div className="row-center">
                    <div className="fee-title">{t("new order")}</div>
                    <div className="fee-title">{t("confirmation")}</div>
                    <div className="fee-title">{t("following")}</div>
                    <div className="fee-title">{t("upsell")}</div>
                  </div>

                  <div className="row-right">
                    <div className="row-right-side">
                      <div className="row-right">
                        <div className="fee-title">{t("cosmetics")}</div>
                        <div className="fee-value dollar">1/2</div>
                        <div className="fee-value dollar">2</div>
                        <div className="fee-value dollar">3</div>
                        <div className="fee-value dollar">3</div>
                      </div>
                      <div className="row-right">
                        <div className="fee-title">{t("gadgets")}</div>
                        <div className="fee-value dollar">1/2</div>
                        <div className="fee-value dollar">1</div>
                        <div className="fee-value dollar">2</div>
                        <div className="fee-value dollar">3</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-row">
                  <div className="row-left">
                    <div className="element-type">
                      <div className="element-icon">
                        <img src={shipping} alt="shipping" />
                      </div>
                      <div className="element-title">{t("shipping")}</div>
                    </div>
                  </div>
                  <div className="row-center">
                    <div className="fee-title"></div>
                    <div className="fee-title">{t("70")}</div>
                    <div className="fee-title">{t("71")}</div>
                    <div className="fee-title">{t("73")}</div>
                    <div className="fee-title">{t("72")}</div>
                    <div className="fee-title">{t("74")}</div>
                    <div className="fee-title">{t("75")}</div>
                  </div>
                  <div className="row-right">
                    <div className="row-right-side">
                      <div className="row-right">
                        <div className="fee-title">{t("delivery")}</div>
                        <div className="fee-value dollar">5.99</div>
                        <div className="fee-value dollar">6.99</div>
                        <div className="fee-value dollar">5.99</div>
                        <div className="fee-value dollar">5.99</div>
                        <div className="fee-value dollar">5.99</div>
                        <div className="fee-value dollar">5.99</div>
                      </div>
                      <div className="row-right">
                        <div className="fee-title">{t("return")}</div>
                        <div className="fee-value dollar">2.99</div>
                        <div className="fee-value free">{t("free")}</div>
                        <div className="fee-value dollar">4.99</div>
                        <div className="fee-value dollar">4.99</div>
                        <div className="fee-value dollar">4.99</div>
                        <div className="fee-value dollar">4.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-row">
                  <div className="row-left">
                    <div className="element-type">
                      <div className="element-icon">
                        <img src={vat} alt="vat" />
                      </div>
                      <div className="element-title">{t("tax")}</div>
                    </div>
                  </div>

                  <div className="row-center">
                    <div className="fee-title">{t("cod")}</div>
                    <div className="fee-title">{t("vat")}</div>
                  </div>

                  <div className="row-right">
                    <div className="fee-value percentage">5</div>
                    <div className="fee-value percentage">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
