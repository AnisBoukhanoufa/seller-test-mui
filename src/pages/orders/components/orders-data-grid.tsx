import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useSearchParams } from "react-router-dom";

interface OrdersDataGridProps {
  rows: any[];
  columns: GridColDef[];
  totalItems: number;
  paginationModel: {
    page: number;
    pageSize: number;
  };
  setPaginationModel: (model: any) => void;
}

const OrdersDataGrid: React.FC<OrdersDataGridProps> = ({
  rows,
  columns,
  totalItems,
  paginationModel,
  setPaginationModel,
}) => {
  const [_, setSearchParams] = useSearchParams();
  return (
    <DataGrid
      autoHeight
      rows={rows}
      columns={columns}
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
      pagination
      rowCount={totalItems}
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

export default OrdersDataGrid;
