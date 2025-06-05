import React from "react";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { t } from "i18next";
// import { updateOrderAffiliateSellerStatus } from "state/api-calls/order-affiliate-calls";

interface OrdersDataGridProps {
  rows: any[];
  columns: GridColDef[];
  totalItems: number;
  paginationModel: {
    page: number;
    pageSize: number;
  };
  selectionModel: any[];
  setPaginationModel: (model: any) => void;
  setSelectionModel: (model: any) => void;
  processRowUpdate: (newRow: any, oldRow: any) => any;
  dispatch: any;
}

const OrdersDataGrid: React.FC<OrdersDataGridProps> = ({
  rows,
  columns,
  totalItems,
  paginationModel,
  selectionModel,
  setPaginationModel,
  setSelectionModel,
  processRowUpdate,
}) => {
  const actionColumn: GridColDef[] = [
    {
      field: "action",
      headerName: t("actions"),
      flex: 2,
      minWidth: 220,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridCellParams) => {
        return (
              <>
                <Link to={params.row._id} style={{ textDecoration: "none" }}>
                  <div className="detailsButton">{t("details")}</div>
                </Link>
              </>
        );
      },
    },
  ];

  return (
    <DataGrid
      autoHeight
      rows={rows}
      columns={columns.concat(actionColumn as GridColDef[])}
      getRowId={(row) => row._id}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: paginationModel.pageSize,
          },
        },
      }}
      pageSizeOptions={[10, 25, 50]}
      checkboxSelection
      disableRowSelectionOnClick
      processRowUpdate={processRowUpdate}
      pagination
      rowCount={totalItems}
      paginationModel={paginationModel}
      paginationMode="server"
      onPaginationModelChange={setPaginationModel}
      onRowSelectionModelChange={(newSelectionModel) => {
        setSelectionModel(newSelectionModel);
      }}
      rowSelectionModel={selectionModel}
    />
  );
};

export default OrdersDataGrid;
