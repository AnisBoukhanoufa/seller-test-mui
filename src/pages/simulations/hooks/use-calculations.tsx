import { useEffect, useState } from "react";

const useCalculations = (inputs) => {
  // Product cost
  const [productCostTotal, setProductCostTotal] = useState(0);
  // Offers
  const [quantity, setQuantity] = useState(0);
  // Confirmation
  const [totalConfirmation, setTotalConfirmation] = useState(0);
  const [leadsConfirmation, setLeadsConfirmation] = useState(0);
  // Ads
  const [adsTotal, setAdsTotal] = useState(0);
  // Delivery
  const [totalCostDelivery, setTotalCostDelivery] = useState(0);
  // Return
  const [totalCostReturn, setTotalCostReturn] = useState(0);
  // Upsell
  const [upsellQuantityDelivered, setUpsellQuantityDelivered] = useState(0);
  const [feeTotal, setFeeTotal] = useState(0);
  // Expenses
  const [totalExtraExpenses, setTotalExtraExpenses] = useState(0);
  // Wills >>> Revenue
  const [wills, setWills] = useState(0);
  // Invested capital
  const [investedCapital, setInvestedCapital] = useState(0);
  // Ads cost per piece sold
  const [adsCostPerPieceSold, setAdsCostPerPieceSold] = useState(0);
  // Total profit upsell
  const [totalProfitUpsell, setTotalProfitUpsell] = useState(0);
  // Payment
  const [payment, setPayment] = useState(0);
  // Net profit
  const [netProfit, setNetProfit] = useState(0);
  // Profit to capital ratio
  const [profitToCapitalRatio, setProfitToCapitalRatio] = useState(0);

  // Quantity calculation
  useEffect(() => {
    setQuantity(
      Math.round(
        (inputs?.leads * inputs?.confirmationRate * inputs?.deliveryRate) /
          10000
      )
    );
  }, [inputs]);

  // Leads confirmation
  useEffect(() => {
    setLeadsConfirmation(
      Math.round((inputs?.leads * inputs?.confirmationRate) / 100)
    );
  }, [inputs]);

  // Product cost total
  useEffect(() => {
    setProductCostTotal(quantity * inputs?.productCost);
  }, [inputs?.productCost, quantity]);

  // Upsell quantity delivered
  useEffect(() => {
    setUpsellQuantityDelivered(
      Math.round(
        (inputs?.leads *
          inputs?.upsellRate *
          inputs?.deliveryRate *
          inputs?.confirmationRate) /
          1000000
      )
    );
  }, [inputs]);

  // Total fee calculation
  useEffect(() => {
    setFeeTotal(upsellQuantityDelivered * inputs?.upsellFee);
  }, [upsellQuantityDelivered, inputs?.upsellFee]);

  // Total extra expenses
  useEffect(() => {
    setTotalExtraExpenses((wills * (inputs?.vatFee + inputs?.codFee)) / 100);
  }, [inputs?.vatFee, inputs?.codFee, wills]);

  // Total confirmation
  useEffect(() => {
    setTotalConfirmation(
      inputs?.newFee * inputs?.leads +
        inputs?.confirmationFee * leadsConfirmation
    );
  }, [inputs?.confirmationFee, leadsConfirmation,inputs?.newFee]);

  // Ads total calculation
  useEffect(() => {
    setAdsTotal(inputs?.adsCost * inputs?.leads);
  }, [inputs]);

  // Total cost delivery
  useEffect(() => {
    setTotalCostDelivery(quantity * inputs?.deliveryFee);
  }, [quantity, inputs?.deliveryFee]);

  // Total cost return
  useEffect(() => {
    setTotalCostReturn(inputs?.returnFee * (leadsConfirmation - quantity));
  }, [quantity, inputs?.returnFee, leadsConfirmation]);

  // Wills calculation
  useEffect(() => {
    setWills(
      inputs?.price * quantity +
        upsellQuantityDelivered * inputs?.upsellPrice || 0
    );
  }, [inputs?.price, quantity, upsellQuantityDelivered, inputs?.upsellPrice]);

  // Invested capital calculation
  useEffect(() => {
    setInvestedCapital(
      adsTotal +
        Number(productCostTotal) +
        Number(inputs?.extraExpenses) +
        inputs?.upsellProductCost * upsellQuantityDelivered || 0
    );
  }, [
    adsTotal,
    productCostTotal,
    inputs?.extraExpenses,
    inputs?.upsellProductCost,
    upsellQuantityDelivered,
  ]);

  // Ads cost per piece sold
  useEffect(() => {
    if (inputs?.leads > 0) setAdsCostPerPieceSold(adsTotal / quantity || 0);
  }, [adsTotal, inputs?.leads, quantity]);

  // Total profit upsell calculation
  useEffect(() => {
    setTotalProfitUpsell(
      (inputs?.upsellPrice - inputs?.upsellProductCost - inputs?.upsellFee) *
        upsellQuantityDelivered || 0
    );
  }, [
    inputs?.upsellPrice,
    inputs?.upsellProductCost,
    inputs?.upsellFee,
    upsellQuantityDelivered,
  ]);

  // Payment calculation
  useEffect(() => {
    setPayment(
      wills * (1 - (inputs?.vatFee + inputs?.codFee) / 100) -
        totalConfirmation -
        totalCostDelivery -
        totalCostReturn -
        upsellQuantityDelivered * inputs?.upsellFee || 0
    );
  }, [
    wills,
    inputs?.vatFee,
    inputs?.codFee,
    totalConfirmation,
    totalCostDelivery,
    upsellQuantityDelivered,
    inputs?.upsellFee,
    totalCostReturn,
  ]);

  // Net profit calculation
  useEffect(() => {
    setNetProfit(payment - investedCapital || 0);
  }, [payment, investedCapital]);

  // Profit to capital ratio calculation
  useEffect(() => {
    setProfitToCapitalRatio(netProfit / investedCapital || 0);
  }, [netProfit, investedCapital]);

  return {
    productCostTotal,
    quantity,
    totalConfirmation,
    leadsConfirmation,
    adsTotal,
    totalCostDelivery,
    totalCostReturn,
    upsellQuantityDelivered,
    feeTotal,
    totalExtraExpenses,
    wills,
    investedCapital,
    adsCostPerPieceSold,
    totalProfitUpsell,
    payment,
    netProfit,
    profitToCapitalRatio,
  };
};

export default useCalculations;
