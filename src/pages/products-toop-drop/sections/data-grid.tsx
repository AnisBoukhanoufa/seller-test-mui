import { FC } from "react";
import { DataGrid, GridPaginationModel } from "@mui/x-data-grid";
import {
  productToopDropColumns,
  productsActionColumn,
} from "../static/table-columns";
import { t } from "i18next";

interface CustomDataGridProps {
  products: any;
  paginationModel: GridPaginationModel;
  setPaginationModel: (model: GridPaginationModel) => void;
}

const ProductsToopDropDataGrid: FC<CustomDataGridProps> = ({
  products,
  paginationModel,
  setPaginationModel,
}) => {
  const translatedColumns = productToopDropColumns
    .map((column) => ({
      ...column,
      headerName: t(column.headerName as any),
    }))
    .concat(productsActionColumn);

  return (
    <DataGrid
      autoHeight
      sx={{
        root: {
          "& .MuiDataGrid-columnsContainer": {
            direction: "ltr",
          },
          "& .MuiDataGrid-virtualScroller": {
            direction: "ltr",
          },
        },
      }}
      rows={products.list}
      columns={translatedColumns}
      getRowId={(row) => row._id}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10, 25, 50]}
      checkboxSelection
      disableRowSelectionOnClick
      rowCount={products.totalItems}
      pagination
      paginationModel={paginationModel}
      paginationMode="server"
      onPaginationModelChange={setPaginationModel}
    />
  );
};

export default ProductsToopDropDataGrid;
