import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { errorHandler } from "state/api-calls";
import { getStatisticBalance } from "state/api-calls/statistic-calls";
import { queryToFilter } from "utils/functions";

const useBalanceHandeler = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // //handle balance show
  const [showBalance, setShowBalance] = useState(false);
  const [balanceLoading, setBalanceLoading] = useState(false);
  const handleClickShowBalance = async () => {
    try {
      setBalanceLoading(true);
      setShowBalance(true);
      await getStatisticBalance(
        queryToFilter(Object.fromEntries(searchParams.entries())),
        dispatch
      );
      setBalanceLoading(false);
    } catch (error) {
      setBalanceLoading(false);
      errorHandler(error, dispatch);
    }
  };
  return {
    showBalance,
    balanceLoading,
    handleClickShowBalance,
  };
};

export default useBalanceHandeler;
