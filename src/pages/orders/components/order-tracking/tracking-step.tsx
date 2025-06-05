import { StepLabel, Box } from "@mui/material";
import moment from "moment";
import CustomStepIcon from "./step-icon";
import { t } from "i18next";
import { EnumOrderReason } from "statics/enums";

const StatusStep = ({ singleStatus, statusTitle }) => {
  return (
    <>
      <StepLabel
        StepIconComponent={(props) => (
          <CustomStepIcon
            {...props}
            statusTitle={statusTitle}
            singleStatus={singleStatus}
          />
        )}
      >
        <Box
          className="stepper"
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  color: "white",
                  backgroundColor: statusTitle.startsWith("call")
                    ? `var(--color-gray)`
                    : `var(--color-${singleStatus.status})`,
                  p: 1 / 4,
                  pl: 1,
                  pr: 1,
                  borderRadius: 1.5,
                }}
              >
                {statusTitle}
              </Box>
            </Box>
            {singleStatus.reason !== EnumOrderReason.none &&
              singleStatus.reason !== EnumOrderReason.other && (
                <span>
                  {t(`${singleStatus.reason}`)}{" "}
                  {singleStatus.reason === EnumOrderReason.delayed && (
                    <span>
                      {t("to")} :{" "}
                      {moment(singleStatus.delayed).format(
                        "DD-MM-YYYY hh:mm A"
                      )}
                    </span>
                  )}
                </span>
              )}

            <span>
              {moment(singleStatus.date).format("DD-MM-YYYY hh:mm A")}{" "}
            </span>
          </Box>
        </Box>
      </StepLabel>
    </>
  );
};

export default StatusStep;
