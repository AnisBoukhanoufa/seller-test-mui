import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { t } from "i18next";
import moment from "moment";
import { Link } from "react-router-dom";

export const paymentsColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    minWidth: 110,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return <div className="cellWithImg">{params.row.id}</div>;
    },
  },

  
  {
    field: "amount",
    headerName: "amount",
    flex: 1,
    minWidth: 90,
    headerAlign: "center",
    align: "left",
    renderCell: (params: GridCellParams): any => {
      return (
        <div className={`cellWithStatus ${params.row.withdraw}`}>
          {params.row.withdraw} $
        </div>
      );
    },
  },

  {
    field: "type",
    headerName: "type",
    flex: 1,
    minWidth: 110,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams): any => {
      return (
        <div className={`cellWithStatus ${params.row.withdraw}`}>
          {t(params.row.type)}
        </div>
      );
    },
  },

  {
    field: "paymentMethod",
    headerName: "method",
    flex: 1,
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },

  {
    field: "createdAt",
    headerName: "Date",
    flex: 1,
    minWidth: 105,
    headerAlign: "center",
    align: "center",
    valueFormatter: (params) => moment(params?.value).format("DD/MM/YYYY"),
  },

  {
    field: "status",
    headerName: "status",
    flex: 1,
    minWidth: 110,
    headerAlign: "center",
    align: "center",

    type: "singleSelect",

    renderCell: (params: GridCellParams): any => {
      return (
        <span className={`cellWithStatus ${t(params.row.currentStatus, { lng: 'en' })}`}>
          {t(params.row.currentStatus)}
        </span>
      );
    },
  },
];

export const paymentsActionColumn = [
  {
    field: "action",
    headerName: "Actions",
    flex: 1,
    minWidth: 90,
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
