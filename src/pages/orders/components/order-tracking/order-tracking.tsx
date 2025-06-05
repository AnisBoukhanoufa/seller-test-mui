import { Stepper, Step } from "@mui/material";

import { t } from "i18next";

import { EnumOrderStatus } from "statics/enums";
import StatusStep from "./tracking-step";

const TrackingOrder = ({ orderInfo }) => {
  //handle calls numbering
  var inConfirmationIndex = 0;
  var shippingIndex = 0;

  return (
    <>
      <Stepper orientation="vertical" activeStep={orderInfo?.status?.length}>
        {orderInfo?.status?.map((singleStatus, index, array) => {
          let statusTitle = t(singleStatus.status);
          if (singleStatus.status === EnumOrderStatus.inConfirmation) {
            if (
              inConfirmationIndex !== 0 &&
              array[index - 1].status === EnumOrderStatus.inConfirmation
            ) {
              statusTitle = `${t("call")}${("0" + inConfirmationIndex).slice(
                -2
              )}`;
            }
            if (singleStatus.isVisible) inConfirmationIndex++;
          } else inConfirmationIndex = 0;
          if (singleStatus.status === EnumOrderStatus.shipping) {
            if (
              shippingIndex !== 0 &&
              array[index - 1].status === EnumOrderStatus.shipping
            ) {
              statusTitle = `${t("call")}${("0" + shippingIndex).slice(-2)}`;
            }
            if (singleStatus.isVisible) shippingIndex++;
          } else shippingIndex = 0;

          return (
            singleStatus && (
              <Step
                sx={{ ml: statusTitle.startsWith("call") ? 7 : 0 }}
                key={singleStatus.status}
              >
                <StatusStep
                  singleStatus={singleStatus}
                  statusTitle={statusTitle}
                />
              </Step>
            )
          );
        })}
      </Stepper>
    </>
  );
};

export default TrackingOrder;
