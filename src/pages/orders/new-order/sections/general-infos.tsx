import { Controller } from "react-hook-form";
import { TextField, Checkbox, Button } from "@mui/material";
import { t } from "i18next";

const GeneralInformation = ({
  control,
  register,
  errors,
  disableSubmitButton,
  cart
}) => {
  return (
    <>
      <h3>{t("general information")}</h3>
      <div className="formInput">
        <TextField
          fullWidth
          id="note"
          label={t("note")}
          variant="outlined"
          {...register("note")}
        />
      </div>
      <div className="formInput">
        <TextField
          fullWidth
          {...register("totalPrice", {
            required: "please enter a valid value",
            min: 1,
          })}
          id="totalPrice"
          label={t("total price")}
          type="number"
          variant="outlined"
        />
        {errors.totalPrice && (
          <p className="errorValidation">Please enter a valid value</p>
        )}
      </div>
      <div className="checkboxs">
        <Controller
          name="isConfirmed"
          control={control}
          defaultValue={false} // Default value for the checkbox
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
        <span>{t("is confirmed")}</span>
      </div>
      <div className="formInput submitButton">
        <Button
          disabled={disableSubmitButton === true || cart.length <= 0}
          className="primary-button"
          type="submit"
          sx={{
            "&.Mui-disabled": {
              backgroundColor: "#ccc",
              color: "#666",
              opacity: 0.6,
            },
          }}
        >
          {t("save")}
        </Button>
      </div>
    </>
  );
};

export default GeneralInformation;
