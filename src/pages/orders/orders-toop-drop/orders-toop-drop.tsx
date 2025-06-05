import "../orders.scss";
import WidgetsFilter from "../components/widget-filter/widgets-filter";
import OrdersDataGrid from "pages/orders/components/orders-data-grid";

import { useState } from "react";

import { useSelector } from "react-redux";

import OrderToolbar from "./sections/orders-table-header";
import { ordersToopDropColumns } from "./static/table-columns";
import {
  getOrdersToopDrop,
  setManyOrdersToopDrop,
} from "state/api-calls/order-toop-drop-calls";
import { EnumSellerRole } from "statics/enums";

import useQueryFilter from "hooks/pages-data/use-query-filter";
import useListData from "../hooks/use-order-page-data";
import useExcelImport from "../hooks/use-import-excel";
import useExcelDownload from "../hooks/use-download-order-excel";

import OrdersFilter from "../filter/orders-filter";
import useStreamPageData from "hooks/use-stream";
import ImportExcel from "../components/import-excel-dialog";

const ListOrderToopDrop = () => {
  const ordersToopDrop = useSelector(
    (state: any) => state.orderToopDrop.ordersToopDrop
  );

  const [filterOpen, setFilterOpen] = useState(false);

  const { queryFilter, setQueryFilter } = useQueryFilter({});
  const { paginationModel, setPaginationModel } = useListData(
    queryFilter,
    setQueryFilter,
    getOrdersToopDrop
  );

  const { downloadExcel } = useExcelDownload();

  const [uploadOrders, setUploadOrders] = useState(false);
  const {
    errorMessages,
    showModal,
    handleExcelFileUpload,
    handleConfirmExcelImport,
    handleCloseModal,
  } = useExcelImport(setUploadOrders, setManyOrdersToopDrop);

  useStreamPageData(getOrdersToopDrop);

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
              sellerType={EnumSellerRole.seller}
              productType={"toopDrop"}
            />
            <WidgetsFilter
              orders={ordersToopDrop}
              count={ordersToopDrop.statusCount}
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
            />
            <OrderToolbar
              paginationModel={paginationModel}
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
              setFilterOpen={setFilterOpen}
              handleExcelFileUpload={handleExcelFileUpload}
              downloadExcel={downloadExcel}
            />
            <OrdersDataGrid
              rows={ordersToopDrop.list}
              columns={ordersToopDropColumns}
              totalItems={ordersToopDrop.totalItems}
              paginationModel={paginationModel}
              setPaginationModel={setPaginationModel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOrderToopDrop;
