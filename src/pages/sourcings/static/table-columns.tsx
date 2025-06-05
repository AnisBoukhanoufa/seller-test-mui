import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { t } from "i18next";
import moment from "moment";
import { Link } from "react-router-dom";

export const sourcingColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "id",
    flex: 1,
    minWidth: 110,
    headerAlign: "center",
    align: "center",
  },

  {
    field: "createdAt",
    headerName: "created at",
    // width: 200,
    flex: 1,
    minWidth: 160,
    headerAlign: "center",
    align: "center",
    valueFormatter: (params) =>
      moment(params?.value).format("DD/MM/YYYY HH:mm"),
  },
  {
    field: "destinationCountry",
    headerName: "country",
    flex: 1,
    minWidth: 100,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <span >{t(params.row.destinationCountry)}</span>
      );
    },
  },

  {
    field: "currentStatus",
    headerName: "Status",
    flex: 1,
    minWidth: 140,
    headerAlign: "center",
    align: "center",
    type: "singleSelect",

    renderCell: (params: GridCellParams): any => {
      return (
        <span
          className={`cellWithStatus ${t(params.row.currentStatus, {
            lng: "en",
          })}`}
        >
          {t(params.row.currentStatus)}
        </span>
      );
    },
  },
];

export const sourcingActionColumn = [
  {
    field: "action",
    headerName: "Actions",
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        
          <Link to={params.row._id} style={{ textDecoration: "none" }}>
            <span className="detailsButton">{t("details")}</span>
          </Link>
        
      );
    },
  },
];
