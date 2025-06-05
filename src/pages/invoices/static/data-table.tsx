import Tooltip from "@mui/material/Tooltip/Tooltip";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { t } from "i18next";
import { EnumFeeCategory, EnumFeeName } from "statics/enums";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

export const invoiceColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "id",
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    align: "left",
    renderCell: (params: GridCellParams) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 5,
          }}
          className="two-values"
        >
          {params.row?.id}
          {params.row?.isRevenueTaken && (
            <Tooltip
              title={"The order revenue has been added to your account"}
              placement="right"
            >
              <CurrencyExchangeIcon
                style={{ color: "var(--color-secondary)" }}
                fontSize="small"
              />
            </Tooltip>
          )}
        </div>
      );
    },
  },

  {
    field: "callCenterFee",
    headerName: "call center fees",
    flex: 1,
    minWidth: 135,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <div className="cellWithFee">
          <Tooltip
            title={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "16px",
                }}
              >
                {params?.row[EnumFeeCategory.callCenter]?.fees?.map((fee) => {
                  return (
                    <span className={`${t(fee.unit)}`}>
                      {t(fee.name)}: {Number(fee.value || 0).toFixed(2)}
                    </span>
                  );
                })}
              </div>
            }
          >
            <span className="dollar">
              {Number(
                params?.row[EnumFeeCategory.callCenter]?.value || 0
              ).toFixed(2)}
            </span>
          </Tooltip>
        </div>
      );
    },
  },

  {
    field: "shippingFee",
    headerName: "shipping fee",
    flex: 1,
    minWidth: 113,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <div className="cellWithFee">
          {params.row[EnumFeeCategory.domesticShipping] !== undefined ? (
            <Tooltip
              title={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "16px",
                  }}
                >
                  {params?.row[EnumFeeCategory.domesticShipping]?.fees?.map(
                    (fee) => (
                      <span className={`${t(fee?.unit)}`}>
                        {t(fee.name)}:{" "}
                        {fee?.name === EnumFeeName.cod ||
                        fee?.name === EnumFeeName.vat
                          ? (Number(fee.value) * 100).toFixed(2)
                          : Number(fee.value).toFixed(2)}
                      </span>
                    )
                  )}
                </div>
              }
            >
              <span className="dollar">
                {Number(
                  params?.row[EnumFeeCategory.domesticShipping]?.value
                ).toFixed(2)}
              </span>
            </Tooltip>
          ) : params.row[EnumFeeCategory.internationalShippingKSA] !==
            undefined ? (
            <Tooltip
              title={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "16px",
                  }}
                >
                  {params?.row[
                    EnumFeeCategory.internationalShippingKSA
                  ]?.fees.map((fee) => (
                    <span className={`${t(fee?.unit)}`}>
                      {t(fee.name)}: {Number(fee?.value)}
                    </span>
                  ))}
                </div>
              }
            >
              <span className="dollar">
                {params?.row[
                  EnumFeeCategory.internationalShippingKSA
                ]?.value.toFixed(2)}
              </span>
            </Tooltip>
          ) : params?.row[EnumFeeCategory.internationalShippingUAE] !==
            undefined ? (
            <Tooltip
              title={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "16px",
                  }}
                >
                  {params?.row[
                    EnumFeeCategory.internationalShippingUAE
                  ]?.fees?.map((fee) => (
                    <span className={`${t(fee.unit)}`}>
                      {t(fee.name)}: {Number(fee.value)}
                    </span>
                  ))}
                </div>
              }
            >
              <span className="dollar">
                {Number(
                  params?.row[EnumFeeCategory.internationalShippingUAE]?.value
                ).toFixed(2)}
              </span>
            </Tooltip>
          ) : (
            <span className="dollar">0</span>
          )}
        </div>
      );
    },
  },

  {
    field: "cod",
    headerName: "cod",
    flex: 1,
    minWidth: 113,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <div className="cellWithFee">
          <Tooltip
            title={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "16px",
                }}
              >
                <span
                  className={`${t(params.row[EnumFeeName.cod]?.fees[0]?.unit)}`}
                >
                  {t(params.row[EnumFeeName.cod]?.fees[0]?.name || "COD fee")}:{" "}
                  {Number(
                    params.row[EnumFeeName.cod]?.fees[0]?.value || 0
                  ).toFixed(2)}
                </span>
              </div>
            }
          >
            <span className="dollar">
              {params.row[EnumFeeName.cod]
                ? Number(params.row[EnumFeeName.cod].value).toFixed(2)
                : 0}
            </span>
          </Tooltip>
        </div>
      );
    },
  },

  {
    field: "vat",
    headerName: "vat",
    flex: 1,
    minWidth: 113,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <div className="cellWithFee">
          <Tooltip
            title={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "16px",
                }}
              >
                <span
                  className={`${t(params.row[EnumFeeName.vat]?.fees[0]?.unit)}`}
                >
                  {t(params.row[EnumFeeName.vat]?.fees[0]?.name) || "VAT fee"}:{" "}
                  {Number(
                    params.row[EnumFeeName.vat]?.fees[0]?.value || 0
                  ).toFixed(2)}
                </span>
              </div>
            }
          >
            <span className="dollar">
              {params.row[EnumFeeName.vat]
                ? Number(params.row[EnumFeeName.vat].value).toFixed(2)
                : 0}
            </span>
          </Tooltip>
        </div>
      );
    },
  },

  {
    field: "totalFee",
    headerName: "total fees",
    flex: 1,
    minWidth: 113,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <span className="dollar">{params?.row?.totalFee?.toFixed(2) || 0}</span>
      );
    },
  },
  {
    field: "wills",
    headerName: "revenue",
    flex: 1,
    minWidth: 113,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridCellParams) => {
      return (
        <span className="dollar">{params?.row?.wills?.toFixed(2) || 0}</span>
      );
    },
  },
];
