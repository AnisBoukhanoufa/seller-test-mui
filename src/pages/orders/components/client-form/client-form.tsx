import { Autocomplete, TextField } from "@mui/material";
import { t } from "i18next";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { EnumCountry } from "statics/enums";
import "./client-form.scss";
const ClientForm = ({ formRegister, formErrors, formControl }) => {
  return (
    <>
      <h3>{t("client information")}</h3>
      <div className="formInput">
        <TextField
          {...formRegister("client.name", {
            required: "This field is required",
          })}
          fullWidth
          id="name"
          label={t("name")}
          variant="outlined"
        />
        {formErrors.name && (
          <p className="errorValidation">This field is required</p>
        )}
      </div>
      <div className="formInput">
        <Controller
          name="client.phone"
          control={formControl}
          defaultValue={"971"} // Default value for the phone number
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^\+?\d{1,4}?\d{7,14}$/, // Phone number regex pattern
              message: "Invalid phone number format",
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <PhoneInput
              {...field}
              inputStyle={{ width: "100%" }}
              country={"ae"}
              onlyCountries={["ae", "sa", "qa", "kw", "om", "bh"]}
              inputProps={{ ref }}
            />
          )}
        />
        {formErrors.client?.phone && (
          <p style={{ color: "red" }}>{formErrors.client.phone.message}</p>
        )}
      </div>
      <div className="formInput">
        <Controller
          name="client.country"
          control={formControl}
          defaultValue={""}
          render={({ field: { onChange, value, ref } }) => (
            <Autocomplete
              options={Object.values(EnumCountry)}
              getOptionLabel={(option) => t(option)}
              value={value} // Controlled value
              onChange={(_, data) => onChange(data)} // Extract the selected value
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={t("country")}
                  variant="outlined"
                  inputRef={ref} // Connect the input ref
                />
              )}
            />
          )}
        />
        {formErrors.country && (
          <p className="errorValidation">country is required</p>
        )}
      </div>
      <div className="formInput">
        <TextField
          {...formRegister("client.city")}
          fullWidth
          id="city"
          label={t("city")}
          variant="outlined"
        />
      </div>
      <div className="formInput">
        <TextField
          {...formRegister("client.district")}
          fullWidth
          id="district"
          label={t("district")}
          variant="outlined"
        />
      </div>
      <div className="formInput">
        <TextField
          {...formRegister("client.address")}
          fullWidth
          id="address"
          label={t("address")}
          variant="outlined"
        />
      </div>
      <div className="formInput">
        <TextField
          {...formRegister("client.location")}
          fullWidth
          id="location"
          label={t("location")}
          variant="outlined"
        />
      </div>
    </>
  );
};

export default ClientForm;
