import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { EnumProductSellerStatus } from "statics/enums";

export const productNormalSellerColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 2,
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
        <span className={`cellWithStatus ${t(`${params.row.currentStatus}`, { lng: 'en' })}`}>
          {t(`${params.row.currentStatus}`)}
        </span>
      );
    },
  },
];

export const productsActionColumn: GridColDef[] = [
  {
    field: "action",
    headerName: "Actions",
    flex: 1,
    minWidth: 140,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <span className="cellAction">
          <Link to={params.row._id} style={{ textDecoration: "none" }}>
            <span className="detailsButton">{t("details")}</span>
          </Link>
        </span>
      );
    },
  },
];
