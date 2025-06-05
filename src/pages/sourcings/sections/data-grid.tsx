import { FC } from "react";
import { DataGrid, GridPaginationModel } from "@mui/x-data-grid";
import { sourcingActionColumn, sourcingColumns } from "../static/table-columns";
import { t } from "i18next";
import { useSearchParams } from "react-router-dom";

interface CustomDataGridProps {
  sourcings: any;
  paginationModel: GridPaginationModel;
  setPaginationModel: (model: GridPaginationModel) => void;
}

const SourcingsDataGrid: FC<CustomDataGridProps> = ({
  sourcings,
  paginationModel,
  setPaginationModel,
}) => {
  const [_, setSearchParams] = useSearchParams();

  const translatedColumns = sourcingColumns
    .map((column) => ({
      ...column,
      headerName: t(column.headerName as any),
    }))
    .concat(sourcingActionColumn);

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
      rows={sourcings.list}
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
      rowCount={sourcings.totalItems}
      pagination
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

export default SourcingsDataGrid;
