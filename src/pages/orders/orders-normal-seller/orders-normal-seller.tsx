import "../orders.scss";
import WidgetsFilter from "../components/widget-filter/widgets-filter";
import OrdersDataGrid from "pages/orders/components/orders-data-grid";

import { useState } from "react";

import { useSelector } from "react-redux";

import OrderToolbar from "./sections/orders-table-header";
import { ordersNormalSellerColumns } from "./static/table-columns";
import {
  getOrdersNormalSeller,
  setManyOrdersNormalSeller,
} from "state/api-calls/order-normal-seller-calls";
import useQueryFilter from "hooks/pages-data/use-query-filter";
import useListData from "../hooks/use-order-page-data";
import useExcelImport from "../hooks/use-import-excel";
import useExcelDownload from "../hooks/use-download-order-excel";
import OrdersFilter from "../filter/orders-filter";
import useStreamPageData from "hooks/use-stream";
import ImportExcel from "../components/import-excel-dialog";

const ListOrderNormalSeller = () => {
  const ordersNormalSeller = useSelector(
    (state: any) => state.orderNormalSeller.orderNormalSellers
  );

  const [filterOpen, setFilterOpen] = useState(false);

  const { queryFilter, setQueryFilter } = useQueryFilter({});
  const { paginationModel, setPaginationModel } = useListData(
    queryFilter,
    setQueryFilter,
    getOrdersNormalSeller
  );

  const { downloadExcel } = useExcelDownload();

  const [uploadOrders, setUploadOrders] = useState(false);
  const {
    errorMessages,
    showModal,
    handleExcelFileUpload,
    handleConfirmExcelImport,
    handleCloseModal,
  } = useExcelImport(setUploadOrders, setManyOrdersNormalSeller);

  //handle orders stream
  useStreamPageData(getOrdersNormalSeller);

  return (
    <div className="listData">
      <div className="listContainer">
        <div className="listTable">
          <div className="datatableOrders overflowPreventer">
            <ImportExcel
              open={showModal}
              handleCloseModal={handleCloseModal}
              errorMessages={errorMessages}
              handleConfirmExcelImport={handleConfirmExcelImport}
              uploadOrders={uploadOrders}
            />
            <OrdersFilter
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
              setQueryFilter={setQueryFilter}
              queryFilter={queryFilter}
              productType={"seller"}
            />
            <WidgetsFilter
              orders={ordersNormalSeller}
              count={ordersNormalSeller.statusCount}
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
            />
            <OrderToolbar
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
              setFilterOpen={setFilterOpen}
              paginationModel={paginationModel}
              handleExcelFileUpload={handleExcelFileUpload}
              downloadExcel={downloadExcel}
            />
            <OrdersDataGrid
              rows={ordersNormalSeller.list}
              columns={ordersNormalSellerColumns}
              totalItems={ordersNormalSeller.totalItems}
              paginationModel={paginationModel}
              setPaginationModel={setPaginationModel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOrderNormalSeller;
