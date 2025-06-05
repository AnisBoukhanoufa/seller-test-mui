import PaymentsDataGrid from "./sections/data-grid";
import TableHeader from "./sections/table-header";
import { useSelector } from "react-redux";
import "./payments.scss";
import { getPayment } from "state/api-calls/payment-calls";
import useQueryFilter from "hooks/pages-data/use-query-filter";
import usePageData from "hooks/pages-data/use-page-data";

const ListPayments = () => {
  const payments = useSelector((state: any) => state.payment.payments);

  const { queryFilter, setQueryFilter } = useQueryFilter();

  const { paginationModel, setPaginationModel } = usePageData(
    queryFilter,
    getPayment
  );

  return (
    <div className="listData">
      <div className="listContainer">
        <div className="listTable">
          <div className="datatablePayment overflowPreventer">
            <TableHeader
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
            />
            <PaymentsDataGrid
              payments={payments}
              paginationModel={paginationModel}
              setPaginationModel={setPaginationModel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPayments;
