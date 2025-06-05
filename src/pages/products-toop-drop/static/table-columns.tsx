import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { t } from "i18next";
import { Link } from "react-router-dom";
export const productToopDropColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    minWidth: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 2,
    minWidth: 170,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return <div className="product-name">{`${params.row.name}`}</div>;
    },
  },

  {
    field: "status",
    headerName: "status",
    flex: 1,
    minWidth: 140,
    headerAlign: "center",
    align: "center",
    type: "singleSelect",
    renderCell: (params: GridCellParams) => {
      return (
        <div className={`cellWithStatus ${t(`${params.row.currentStatus}`, { lng: 'en' })}`}>
          {t(`${params.row.currentStatus}`)}
        </div>
      );
    },
  },
];

export const productsActionColumn: GridColDef[] = [
  {
    field: "action",
    headerName: t("actions"),
    flex: 1,
    minWidth: 140,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <div className="cellAction">
          <Link to={params.row._id} style={{ textDecoration: "none" }}>
            <div className="detailsButton">{t("details")}</div>
          </Link>
        </div>
      );
    },
  },
];
