import "./widget.scss";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { t } from "i18next";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useBalanceHandeler from "pages/home/hooks/use-balance-handeler";
import RefreshIcon from "@mui/icons-material/Refresh";

interface widgets {
  amount: number;
}
const BalanceWidget = ({ amount }: widgets) => {
  const { showBalance, balanceLoading, handleClickShowBalance } =
    useBalanceHandeler();
  const data = {
    title: "balance",
    isMoney: true,
    link: "",
    icon: (
      <MonetizationOnOutlinedIcon
        className="icon-widget"
        style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }}
      />
    ),
  };
  const hideNumber = "- - - - -";
  return (
    <div className="widget">
      <div className="left">
        <span className="title uppercase">{t(data?.title)}</span>

        <span className="counter">
          {showBalance ? (
            <>
              {balanceLoading ? (
                <div>
                  <>0.00 $</>
                  <CircularProgress size={20} />
                </div>
              ) : (
                <>
                  {amount?.toFixed(2)}
                  {data?.isMoney && " $"}
                </>
              )}
            </>
          ) : (
            <>{hideNumber}</>
          )}
        </span>
      </div>
      <div className="right">
        {data?.icon}

        {!showBalance ? (
          <VisibilityIcon
            onClick={handleClickShowBalance}
            className="show-hide"
          />
        ) : (
          <RefreshIcon onClick={handleClickShowBalance} className="show-hide" />
        )}
      </div>
    </div>
  );
};

export default BalanceWidget;
