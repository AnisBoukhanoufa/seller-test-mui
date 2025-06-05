// import WidgetUser from "components/widget-orders/widget-orders";
import { EnumOrderStatus } from "statics/enums";
import "./widgets-filter.scss";
import WidgetOrders from "components/widget-orders/widget-orders";

const WidgetsFilter = ({ count, queryFilter, setQueryFilter }: any) => {
  const handleClick = (x: any) => {
    if (x == 0) {
      const query = { ...queryFilter };
      delete query.currentStatus;
      setQueryFilter(query);
    } else {
      setQueryFilter({ ...queryFilter, currentStatus: x });
    }
  };
  return (
    <>
      <div className="widgets">
        <div className="widget-row">
          <WidgetOrders
            type="total"
            amount={
              Object.values(count || {})?.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              ) || 0
            }
            handleStats={() => handleClick(0)}
          />
          <WidgetOrders
            type="new"
            amount={count?.[EnumOrderStatus?.new] || 0}
            handleStats={() => handleClick(EnumOrderStatus?.new)}
          />
          <WidgetOrders
            type="inConfirmation"
            amount={count?.[EnumOrderStatus?.inConfirmation] || 0}
            handleStats={() => handleClick(EnumOrderStatus?.inConfirmation)}
          />
          <WidgetOrders
            type="expired"
            amount={count?.[EnumOrderStatus?.expired] || 0}
            handleStats={() => handleClick(EnumOrderStatus?.expired)}
          />
          <WidgetOrders
            type="wrong"
            amount={count?.[EnumOrderStatus?.wrong] || 0}
            handleStats={() => handleClick(EnumOrderStatus?.wrong)}
          />
          <WidgetOrders
            type="canceled"
            amount={count?.[EnumOrderStatus?.canceled] || 0}
            handleStats={() => handleClick(EnumOrderStatus?.canceled)}
          />
        </div>
        <div className="widget-row">
          <WidgetOrders
            type="confirmed"
            amount={count?.[EnumOrderStatus?.confirmed] || 0}
            handleStats={() => handleClick(EnumOrderStatus?.confirmed)}
          />
          <WidgetOrders
            type="dispatched"
            amount={count?.[EnumOrderStatus?.dispatch] || 0}
            handleStats={() => handleClick(EnumOrderStatus?.dispatch)}
          />
          <WidgetOrders
            type="shipping"
            amount={count?.[EnumOrderStatus?.shipping] || 0}
            handleStats={() => handleClick(EnumOrderStatus?.shipping)}
          />
          <WidgetOrders
            type="delivered"
            amount={count?.[EnumOrderStatus?.delivered] || 0}
            handleStats={() => handleClick(EnumOrderStatus?.delivered)}
          />
          <WidgetOrders
            type="return"
            amount={count?.[EnumOrderStatus?.inReturn] || 0}
            handleStats={() => handleClick(EnumOrderStatus?.inReturn)}
          />
          <WidgetOrders
            type="returned"
            amount={count?.[EnumOrderStatus?.returned] || 0}
            handleStats={() => handleClick(EnumOrderStatus?.returned)}
          />
        </div>
      </div>
    </>
  );
};

export default WidgetsFilter;
