import "../orders.scss";
import ImportExcel from "../components/import-excel-dialog";
import OrdersDataGrid from "pages/orders/components/orders-data-grid";
import { useState } from "react";
import { useSelector } from "react-redux";

import OrderToolbar from "./sections/orders-table-header";

import { ordersAffiliateSellerColumns } from "./static/table-columns";
import {
  getOrdersAffiliateSeller,
  setManyOrdersAffiliateSeller,
} from "state/api-calls/order-affiliate-calls";
import { EnumSellerRole } from "statics/enums";


import useQueryFilter from "hooks/pages-data/use-query-filter";

import useStreamPageData from "hooks/use-stream";
import OrdersFilter from "../filter/orders-filter";
import useListData from "../hooks/use-order-page-data";
import WidgetsFilter from "../components/widget-filter/widgets-filter";
import useExcelDownload from "../hooks/use-download-order-excel";
import useExcelImport from "../hooks/use-import-excel";

const ListOrderAffiliateSeller = () => {

  const ordersAffiliateSeller = useSelector(
    (state: any) => state.orderAffiliateSeller.orderAffiliateSellers
  );

  const [filterOpen, setFilterOpen] = useState(false);

  const { queryFilter, setQueryFilter } = useQueryFilter({});
  const { paginationModel, setPaginationModel } = useListData(
    queryFilter,
    setQueryFilter,
    getOrdersAffiliateSeller
  );

  const { downloadExcel } = useExcelDownload();

  const [uploadOrders, setUploadOrders] = useState(false);
  const {
    errorMessages,
    showModal,
    handleExcelFileUpload,
    handleConfirmExcelImport,
    handleCloseModal,
  } = useExcelImport(setUploadOrders, setManyOrdersAffiliateSeller);

  //handle orders stream
  useStreamPageData(getOrdersAffiliateSeller);

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
              sellerType={EnumSellerRole.affiliate}
              productType={"affiliate"}
            />
            <WidgetsFilter
              orders={ordersAffiliateSeller}
              count={ordersAffiliateSeller.statusCount}
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
              rows={ordersAffiliateSeller.list}
              columns={ordersAffiliateSellerColumns}
              totalItems={ordersAffiliateSeller.totalItems}
              paginationModel={paginationModel}
              setPaginationModel={setPaginationModel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOrderAffiliateSeller;
