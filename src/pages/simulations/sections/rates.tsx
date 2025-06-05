import React, { FC } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { t } from "i18next";

interface RatesSectionProps {
  inputs: {
    price: number;
    leads: number;
    confirmationRate: number;
    deliveryRate: number;
    upsellRate: number;
  };
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RatesSection: FC<RatesSectionProps> = ({ inputs, handleInput }) => {
  return (
    <div className="fees-section">
      <div className="fee-element-section">
        <TextField
          fullWidth
          autoComplete="off"
          id="price"
          name="price"
          type="number"
          label={t("selling price")}
          inputProps={{ step: "10", min: "0" }}
          variant="outlined"
          value={inputs?.price ?? ""}
          onChange={handleInput}
        />
        <TextField
          fullWidth
          id="leads"
          autoComplete="off"
          value={inputs?.leads ?? ""}
          type="number"
          name="leads"
          label={t("leads")}
          inputProps={{ step: "10", min: "1" }}
          variant="outlined"
          onChange={handleInput}
        />
        <TextField
          fullWidth
          id="confirmationRate"
          type="number"
          className="input-percent"
          autoComplete="off"
          label={t("confirmation rate")}
          inputProps={{ step: "5", min: "0", max: "100" }}
          variant="outlined"
          name="confirmationRate"
          value={inputs?.confirmationRate ?? ""}
          InputProps={{
            endAdornment: (
              <InputAdornment className="percent" position="start">
                {`%`}
              </InputAdornment>
            ),
            inputProps: { step: "5", min: "0", max: "100" },
          }}
          onChange={handleInput}
        />
        <TextField
          fullWidth
          id="deliveryRate"
          type="number"
          className="input-percent"
          value={inputs?.deliveryRate ?? ""}
          autoComplete="off"
          label={t("delivery rate")}
          InputProps={{
            endAdornment: (
              <InputAdornment className="percent" position="start">
                {`%`}
              </InputAdornment>
            ),
            inputProps: { step: "5", min: "0", max: "100" },
          }}
          variant="outlined"
          onChange={handleInput}
          name="deliveryRate"
        />
        <TextField
          fullWidth
          id="upsellRate"
          type="number"
          autoComplete="off"
          className="input-percent"
          label={t("upsell rate")}
          value={inputs?.upsellRate ?? ""}
          InputProps={{
            endAdornment: (
              <InputAdornment className="percent" position="start">
                {`%`}
              </InputAdornment>
            ),
            inputProps: { step: "5", min: "0", max: "100" },
          }}
          variant="outlined"
          onChange={handleInput}
          name="upsellRate"
        />
      </div>
    </div>
  );
};

export default RatesSection;
