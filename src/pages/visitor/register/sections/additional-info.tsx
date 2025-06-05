import { Controller, useForm } from "react-hook-form";
import {
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Autocomplete,
  Checkbox,
  Typography,
} from "@mui/material";
import "./additional-info.css";
import { useEffect, useState } from "react"; // Import useState for managing local state
import { monthlyIncome, nicheOptions, sellerCapital } from "statics/statics";
import { EnumBank } from "statics/enums";
import { t } from "i18next";

function AdditionalInfo({ handleNext, handleBack, data }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
    watch,
    reset,
  } = useForm({
    defaultValues: data, // Set default values from the `data` prop
  });
  const [transitionState, setTransitionState] = useState("");

  const [isEcommerce, setIsEcommerce] = useState(data?.isPracticingCOD); // State to track ecommerce selection
  const handleEcommerceChange = (value) => {
    setTransitionState(value === "true" ? "fade-enter" : "fade-exit"); // Set initial transition state
    setTimeout(() => {
      setIsEcommerce(value === "true");
      if (value === "false") {
        // Reset the fields when "No" is selected
        reset({
          averageOrderDaily: "5",
          monthlyIncome: "",
          market: "", // Reset to empty
        });
      }
      setTransitionState(""); // Reset transition state
    }, 300); // Match the timeout duration with the transition duration
  };

  const [rawValue, setRawValue] = useState(
    data?.dailyOrderRate === "NaN" ? "5" : data?.dailyOrderRate
  ); // State to manage the raw input value

  // Watch the value of dailyOrderRate
  const dailyOrderRate = watch("dailyOrderRate");

  // Effect to enforce rounding on blur
  useEffect(() => {
    if (String(rawValue)?.trim() === "") {
      return; // Don't set value if the input is empty
    }
    const adjustedValue = Math.max(5, Math.round(dailyOrderRate / 5) * 5);
    setValue("dailyOrderRate", adjustedValue);
  }, [dailyOrderRate, setValue, rawValue]);

  //market
  const [showOtherMarket, setShowOtherMarket] = useState(false);
  const [otherMarketTemp, setOtherMarketTemp] = useState(""); // Store the value temporarily

  // Ensure that watchedMarkets is always an array
  const watchedMarkets = watch("market") || []; // Default to an empty array if undefined

  // Handle market change (for the checkboxes)
  const handleMarketChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    const currentMarkets = getValues("market") || [];

    if (isChecked) {
      setValue("market", [...currentMarkets, value]); // Add selected market
    } else {
      setValue(
        "market",
        currentMarkets.filter((market) => market !== value) // Remove unselected market
      );
    }

    if (value === "Other") {
      setShowOtherMarket(isChecked); // Show or hide the other market field
    }
  };

  // Handle the other market field change
  const handleOtherMarketChange = (event) => {
    setOtherMarketTemp(event.target.value); // Store the input value in temporary state
  };

  const handleNextAdditionalInfo = (formData) => {
    let currentMarkets = getValues("market") || [];

    if (otherMarketTemp && !currentMarkets.includes(otherMarketTemp)) {
      // Add the 'Other' market value if it's not already in the list
      currentMarkets = [
        ...currentMarkets.filter((value) => value !== "Other"),
        otherMarketTemp,
      ];
      setValue("market", currentMarkets); // Update the 'market' field in the form
    }

    // Update formData with the new market before proceeding
    formData.market = currentMarkets;
    handleNext(formData);
  };

  return (
    // <form className="form" onSubmit={handleSubmit(handleNext)}>
    <form className="form" onSubmit={handleSubmit(handleNextAdditionalInfo)}>
      <FormGroup>
        {/* Do you practice ecommerce */}
        <div className="formInput">
          <FormControl component="fieldset" error={!!errors.isPracticingCOD}>
            <FormLabel component="legend">Do you practice ecommerce?</FormLabel>
            <RadioGroup
              row
              defaultValue={data?.isPracticingCOD}
              onChange={(e) => handleEcommerceChange(e.target.value)}
            >
              <FormControlLabel
                control={
                  <Radio
                    {...register("isPracticingCOD", {
                      required: "This field is required",
                    })}
                    value={true}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                control={
                  <Radio
                    {...register("isPracticingCOD", {
                      required: "This field is required",
                    })}
                    value={false}
                  />
                }
                label="No"
              />
            </RadioGroup>
            <FormHelperText>
              {errors.isPracticingCOD && "This field is required"}
            </FormHelperText>
          </FormControl>
        </div>

        {/* Conditionally rendered fields */}
        <div
          className={`transition ${transitionState}`}
          style={{
            opacity: isEcommerce ? 1 : 0,
            height: isEcommerce ? "auto" : 0,
            overflow: "hidden",
            transition: "opacity 300ms ease-in, height 300ms ease-in",
          }}
        >
          {(isEcommerce === true || isEcommerce === "true") && (
            <>
              <div className="formInput">
                <FormLabel sx={{ mr: 2 }}>Average Order Daily</FormLabel>
                <TextField
                  placeholder="Average Order Daily"
                  id="dailyOrderRate"
                  type="number"
                  value={rawValue} // Use the raw value for the input
                  {...register("dailyOrderRate", {
                    required: true,
                    valueAsNumber: true, // Ensure the value is treated as a number
                    validate: (value) =>
                      value >= 0 || "Value cannot be less than 0", // Validation to ensure value is >= 0
                  })}
                  error={!!errors.dailyOrderRate}
                  helperText={
                    errors.dailyOrderRate ? "This field is required" : ""
                  }
                  onChange={(e) => {
                    const value = e.target.value; // Get raw input value
                    setRawValue(value); // Set the raw value for display
                    // If it's empty, don't set it in the form
                    if (value === "") {
                      setValue("dailyOrderRate", null);
                    } else {
                      setValue("dailyOrderRate", parseInt(value, 10)); // Set the raw value in the form
                    }
                  }}
                  onBlur={() => {
                    // Adjust to the nearest multiple of 5 on blur, ensuring a minimum of 5
                    const adjustedValue = Math.max(
                      5,
                      Math.round(dailyOrderRate / 5) * 5
                    );
                    setValue("dailyOrderRate", adjustedValue);
                    setRawValue(adjustedValue.toString()); // Update raw value to reflect adjusted value
                  }}
                  inputProps={{
                    step: 5, // Increment by 5
                    min: 0, // Minimum value is 0
                  }}
                />
                {errors.dailyOrderRate && (
                  <Typography color="error" variant="body2">
                    {errors.dailyOrderRate.message}
                  </Typography>
                )}
              </div>

              {/* Monthly Income */}
              <div className="formInput">
                <FormLabel component="legend">Monthly Income</FormLabel>
                <Controller
                  name="monthlyBusinessRate"
                  control={control}
                  defaultValue={null}
                  rules={{
                    required: "This field is required",
                    validate: (value) => value !== "" || "Select at Range",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      options={monthlyIncome} // Pass the list of options
                      getOptionLabel={(option) => option} // Since it's a string list, option is the label
                      value={value || null} // The value in the form
                      onChange={(event, newValue) => {
                        onChange(newValue); // Update the form value
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Monthly Income"
                          error={!!errors.monthlyBusinessRate}
                          helperText={
                            errors.capital ? errors.capital.message : ""
                          }
                        />
                      )}
                    />
                  )}
                />
              </div>
              {/* Which market do you practice ecommerce */}

              <div className="formInput">
                <FormControl component="fieldset" error={!!errors.market}>
                  <FormLabel component="legend">
                    Which market do you practice ecommerce?
                  </FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...register("market", {
                            validate: (value) =>
                              value.length > 0 ||
                              "At least one market must be selected",
                          })}
                          value="Algerian"
                          checked={watchedMarkets.includes("Algerian")} // Safely handle includes
                          onChange={handleMarketChange}
                        />
                      }
                      label="Algerian"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...register("market", {
                            validate: (value) =>
                              value.length > 0 ||
                              "At least one market must be selected",
                          })}
                          value="Gulf"
                          checked={watchedMarkets.includes("Gulf")} // Safely handle includes
                          onChange={handleMarketChange}
                        />
                      }
                      label="Gulf"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...register("market", {
                            validate: (value) =>
                              value.length > 0 ||
                              "At least one market must be selected",
                          })}
                          value="Other"
                          checked={watchedMarkets.includes("Other")} // Safely handle includes
                          onChange={handleMarketChange}
                        />
                      }
                      label="Other"
                    />
                  </FormGroup>

                  <FormHelperText>
                    {errors.market && "At least one market must be selected"}
                  </FormHelperText>

                  {/* Show the other market input field if 'Other' is checked */}
                  {showOtherMarket && (
                    <TextField
                      {...register("otherMarket", {
                        required: showOtherMarket
                          ? "Please specify the other market"
                          : false,
                      })}
                      label="Please specify other market"
                      variant="outlined"
                      error={!!errors.otherMarket}
                      helperText={errors.otherMarket?.message}
                      value={otherMarketTemp}
                      onChange={handleOtherMarketChange} // Update temp value on change
                    />
                  )}
                </FormControl>
              </div>

              <div className="formInput">
                <FormLabel component="legend">Niche</FormLabel>
                <Controller
                  name="niche"
                  control={control}
                  defaultValue={[]}
                  rules={{
                    required: "At least one niche must be selected",
                    validate: (value) =>
                      value.length > 0 || "Select at least one niche",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      multiple
                      options={nicheOptions}
                      getOptionLabel={(option) => option.label} // Make sure each option has a 'label'
                      value={value}
                      onChange={(event, newValue) => {
                        onChange(newValue); // Update the form value with the new array of selections
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          height: "auto", // Auto height for the input
                        },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="select niche"
                          error={!!errors.niche}
                          helperText={errors.niche ? errors.niche.message : ""}
                        />
                      )}
                      isOptionEqualToValue={(option, val) =>
                        option.label === val.label
                      } // Compare by 'label'
                    />
                  )}
                />
              </div>
            </>
          )}
        </div>
        {/* Niche */}

        {/* Do you have an online store */}
        <div className="formInput">
          <FormControl
            component="fieldset"
            error={!!errors.hasAnOnlineStore} // This applies red color when error exists
          >
            <FormLabel
              component="legend"
              sx={{
                color: errors.hasAnOnlineStore ? "red" : "inherit", // Make label red if error exists
              }}
            >
              Do you have an online store?
            </FormLabel>
            <RadioGroup defaultValue={data?.hasAnOnlineStore} row>
              <FormControlLabel
                control={
                  <Radio
                    {...register("hasAnOnlineStore", {
                      required: "This field is required",
                    })}
                    value={true}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                control={
                  <Radio
                    {...register("hasAnOnlineStore", {
                      required: "This field is required",
                    })}
                    value={false}
                  />
                }
                label="No"
              />
            </RadioGroup>
            <FormHelperText sx={{ color: "red" }}>
              {errors.hasAnOnlineStore && "This field is required"}
            </FormHelperText>
          </FormControl>
        </div>
        {/* Bank Card */}
        <div className="formInput">
          <FormControl component="fieldset" error={!!errors.bankCard}>
            <FormLabel component="legend">Bank card</FormLabel>
            <FormGroup row>
              {Object.values(EnumBank)
                .filter(
                  (bankCard) =>
                    !(
                      bankCard === EnumBank.none || bankCard === EnumBank.paypal
                    )
                )
                .map((bankCard) => (
                  <FormControlLabel
                    key={bankCard} // It's a good practice to include a unique key
                    control={
                      <Controller
                        name="bankCard"
                        control={control}
                        defaultValue={data?.bankCard ?? []}
                        rules={{
                          required: "At least one bank card must be selected",
                          validate: (value) =>
                            value.length > 0 ||
                            "At least one bank card must be selected", // Validation to ensure at least one bank card is selected
                        }}
                        render={({ field: { onChange, value } }) => (
                          <Checkbox
                            checked={value.includes(bankCard)}
                            onChange={(event) => {
                              if (event.target.checked) {
                                onChange([...value, bankCard]); // Add to the list
                              } else {
                                onChange(
                                  value.filter((card) => card !== bankCard)
                                ); // Remove from the list
                              }
                            }}
                          />
                        )}
                      />
                    }
                    label={t(bankCard)} // Assuming `t` is a translation function
                  />
                ))}
            </FormGroup>
            <FormHelperText sx={{ color: "red" }}>
              {errors.bankCard && errors.bankCard.message}
            </FormHelperText>
          </FormControl>
        </div>
        {/* Do you have BM */}
        <div className="formInput">
          <FormControl component="fieldset" error={!!errors.hasBM}>
            <FormLabel component="legend">
              Do you have Business Manager?
            </FormLabel>
            <RadioGroup defaultValue={data?.hasBM} row>
              <FormControlLabel
                control={
                  <Radio
                    {...register("hasBM", {
                      required: "This field is required",
                    })}
                    value={true}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                control={
                  <Radio
                    {...register("hasBM", {
                      required: "This field is required",
                    })}
                    value={false}
                  />
                }
                label="No"
              />
            </RadioGroup>
            <FormHelperText>
              {errors.hasBM && "This field is required"}
            </FormHelperText>
          </FormControl>
        </div>

        {/* Capital */}
        <div className="formInput">
          <FormLabel component="legend">Capital</FormLabel>
          <Controller
            name="capital"
            control={control}
            defaultValue={null}
            rules={{
              required: "This field is required",
              validate: (value) => value !== "" || "Select at Range",
            }}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                options={sellerCapital} // Pass the list of options
                getOptionLabel={(option) => option} // Since it's a string list, option is the label
                value={value || null} // The value in the form
                onChange={(event, newValue) => {
                  onChange(newValue); // Update the form value
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Capital"
                    error={!!errors.capital}
                    helperText={errors.capital ? errors.capital.message : ""}
                  />
                )}
              />
            )}
          />
        </div>
        <div className="formInput">
          <FormLabel component="legend">Message</FormLabel>
          <TextField
            placeholder="Enter your message"
            id="message"
            {...register("message")} // No validation rule since it's not required
          />
        </div>

        {/* Buttons for navigation */}
        <div className="button-group second-form">
          <button type="button" className="active" onClick={handleBack}>
            {"< previous "}
          </button>
          <button type="submit" className="active">
            {"next >"}
          </button>
        </div>
      </FormGroup>
    </form>
  );
}

export default AdditionalInfo;
