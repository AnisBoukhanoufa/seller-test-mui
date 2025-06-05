import { FC } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { paymentsActionColumn, paymentsColumns } from "../static/data-table";
import { t } from "i18next";
import { useSearchParams } from "react-router-dom";

interface PaymentsDataGridProps {
  payments: any;
  paginationModel: any;
  setPaginationModel: (model: any) => void;
}

const PaymentsDataGrid: FC<PaymentsDataGridProps> = ({
  payments,
  paginationModel,
  setPaginationModel,
}) => {
  const [_, setSearchParams] = useSearchParams();

  const rows =
    payments?.list?.map((row: any) => ({
      ...row,
      paymentMethod: t(row.paymentMethod as any),
      status: t(row.currentStatus as any),
    })) || [];

  const columns = [
    ...paymentsColumns
      .map((column) => ({
        ...column,
        headerName: t(column.headerName as any),
      }))
      .concat(paymentsActionColumn),
  ];

  return (
    <DataGrid
      autoHeight
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      getRowId={(row) => row._id}
      pageSizeOptions={[10, 25, 50]}
      checkboxSelection
      disableRowSelectionOnClick
      pagination
      rowCount={payments.totalItems}
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
  );
};

export default PaymentsDataGrid;
