import { GridColDef, GridCellParams } from "@mui/x-data-grid";
import { t } from "i18next";

import { Link } from "react-router-dom";
import StatusCell from "components/status-cell";

const hiddingChar = "- - - - - - ";
export const ordersAffiliateSellerColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "id",
    flex: 2,
    minWidth: 130,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return <div className="cellWithImg">{params.row.id}</div>;
    },
  },
  {
    field: "clientName",
    headerName: t("client"),
    flex: 2,
    minWidth: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <div className="cellWithImg">
          {params.row?.client?.name || hiddingChar}
        </div>
      );
    },
  },
  {
    field: "client.phone",
    headerName: t("phone"),
    flex: 2,
    minWidth: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <div className="cellWithImg">
          {params?.row?.client?.phone?.code === undefined
            ? hiddingChar
            : `+${params?.row?.client?.phone?.code}-${params?.row?.client?.phone?.number}`}
        </div>
      );
    },
  },

  {
    field: "totalPrice",
    headerName: t("price"),
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <div className={`cellWithStatus `}>
          {params.row?.totalPrice || hiddingChar}{" "}
          <span
            className="uppercase"
            style={{ color: "#757575", fontWeight: "500" }}
          >
            {t(params.row?.currency)}
          </span>
        </div>
      );
    },
  },

  {
    field: "currentStatus",
    headerName: t("status"),
    flex: 2,
    minWidth: 12 * 16,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return <StatusCell status={params.row.currentStatus} />;
    },
  },
  {
    field: "action",
    headerName: t("actions"),
    flex: 1,
    minWidth: 100,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <div className="cellAction">
          <Link to={params.row._id} style={{ textDecoration: "none" }}>
            <div className="capitalize detailsButton">{t("details")}</div>
          </Link>
        </div>
      );
    },
  },
];
