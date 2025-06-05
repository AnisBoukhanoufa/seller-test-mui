import "./invoices.scss";

import { DataGrid } from "@mui/x-data-grid";
import { getInvoice } from "state/api-calls/invoice-normal-seller-calls";
import { useSelector } from "react-redux";
import TableHeader from "./sections/table-header";
import { invoiceColumns } from "./static/data-table";
import useQueryFilter from "hooks/pages-data/use-query-filter";
import { useSearchParams } from "react-router-dom";
import { t } from "i18next";
import usePageData from "./hooks/use-page-data";
import { useCallback, useState } from "react";
import InvoicesFilter from "./filter/invoices-filter";
const ListInvoiceNormalSeller = () => {
  const [_, setSearchParams] = useSearchParams();

  const invoices = useSelector((state: any) => state.invoice.invoices);
  
    const [filterOpen, setFilterOpen] = useState(false);
  
  const { queryFilter, setQueryFilter } = useQueryFilter();

  const { paginationModel, setPaginationModel } = usePageData(
    queryFilter,
    getInvoice
  );
   const handleClear = useCallback(() => {
      setQueryFilter({});
    }, []);

  return (
    <div className="listData">
      <div className="listContainer">
        <div className="listTable">
          <div className="invoiceTable overflowPreventer">
            <InvoicesFilter
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
            />

            <TableHeader
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
              setFilterOpen={setFilterOpen}
              handleClear={handleClear}
            />

            <DataGrid
              autoHeight
              rows={invoices.list ? invoices.list : []}
              columns={invoiceColumns.map((column: any) => {
                return {
                  ...column,
                  headerName: t(column.headerName as any),
                };
              })}
              getRowId={(row: any) => row._id}
              pageSizeOptions={[10, 25, 50]}
              checkboxSelection
              disableRowSelectionOnClick
              pagination
              rowCount={invoices.totalItems}
              paginationModel={paginationModel}
              paginationMode="server"
              onPaginationModelChange={(model) => {
                setPaginationModel(model);
                setSearchParams((prevVal) => {
                  return {
                    ...Object.fromEntries(Array.from(prevVal.entries())),
                    ...model,
                  };
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListInvoiceNormalSeller;
