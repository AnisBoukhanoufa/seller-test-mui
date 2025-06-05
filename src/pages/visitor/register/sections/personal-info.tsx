import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Autocomplete,
} from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { t } from "i18next";

import countryList from "react-select-country-list";
import GlobalPhoneInput from "../components/phone -number";
import GlobalEmailInput from "../components/email-input";

import { getCommunes, getWilayas } from "utils/wilayas";

const PersonalInfo = ({ handleNext, data, setData }) => {
  const countryOptions = countryList().getData();
  const {
    register,
    handleSubmit,
    control,
    // watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: data, // Set default values from the `data` prop
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [errorText, setErrorText] = useState("");
  const [open, setOpen] = useState(false);
  const [wilayas, setWilayas] = useState([]);
  const [towns, setTowns] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(data?.country);
  const [selectedWilaya, setSelectedWilaya] = useState(null);



  useEffect(() => {
    if (selectedCountry?.value === "DZ") {
      // Algeria's country code
      const allWilayasDetails = getWilayas;
      setWilayas(allWilayasDetails);
    } else {
      setWilayas([]); // Reset if other country is selected
      setTowns([]); // Reset towns
    }
  }, [selectedCountry]);
  useEffect(() => {
    if (selectedWilaya?.id) {
      // Algeria's country code
      const allCommunesDetails = getCommunes(selectedWilaya?.id);
      setTowns(allCommunesDetails);
    } else {
      setTowns([]); // Reset towns
    }
  }, [selectedWilaya]);

  const handleInput = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  //handle password
  const [password, setPassword] = useState(data?.password || "");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [values, setValues] = useState("");
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowPasswordConfirmation = () => {
    setValues({
      ...values,
      showPasswordConfirmation: !values.showPasswordConfirmation,
    });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleCountryChange = (event, value) => {
    if (value) {
      setValue("country", value);
      setSelectedCountry(value);
      setData({ ...data, country: value.label });
    }
  };

  const handleWilayaChange = (event, value) => {
    setValue("wilaya", value);
    setSelectedWilaya(value);
    setData({ ...data, wilaya: value?.label || "" });
  };

  const handleTownChange = (event, value) => {
    setValue("town", value);
    setData({ ...data, town: value.name || "" });
  };

  const handleNextPersonalInfo = (personaleData) => {
    if (isValidPhone1 && isValidEmail) {
      handleNext(personaleData);
    }
  };

  const [isValidPhone1, setIsValidPhone1] = useState(true);
  const [isValidPhone2, setIsValidPhone2] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  return (
    <form
      autoComplete="off"
      className="form"
      onSubmit={handleSubmit(handleNextPersonalInfo)}
    >
      {errorMessage && <div className="error-message">{t(errorText)} </div>}
      <div className="formInput">
        <TextField
          id="firstName"
          label={t("First Name")}
          defaultValue={data.firstName}
          variant="outlined"
          {...register("firstName", {
            required: true,
          })}
          onChange={handleInput}
        />

        {errors.firstName && (
          <>
            <p className="error">{errors.firstName?.message}</p>
            {errors?.firstName?.type === "required" && (
              <p className="error">Firstname is required</p>
            )}
          </>
        )}
      </div>

      <div className="formInput">
        <TextField
          id="lastName"
          label={t("Last Name")}
          defaultValue={data.lastName}
          variant="outlined"
          {...register("lastName", { required: true })}
          onChange={handleInput}
        />
        {errors.lastName && <p className="error">{errors.lastName?.message}</p>}
        {errors?.lastName?.type === "required" && (
          <p className="error">Lastname is required</p>
        )}
      </div>

      <div className="formInput">
        <GlobalEmailInput
          register={register}
          setValue={setValue}
          errors={errors}
          data={data}
          label={"email"}
          required={false}
          isValid={isValidEmail}
          handleInput={handleInput}
          setIsValid={setIsValidEmail}
        />
      </div>
      <div className="phone-input">
        <GlobalPhoneInput
          setValue={setValue}
          errors={errors}
          data={data}
          setData={setData}
          label={"phone1"}
          isValid={isValidPhone1}
          setIsValid={setIsValidPhone1}
          register={register}
          required={true}
        />
      </div>
      <div className="phone-input">
        <GlobalPhoneInput
          setValue={setValue}
          errors={errors}
          data={data}
          setData={setData}
          isValid={isValidPhone2}
          setIsValid={setIsValidPhone2}
          label={"phone2"}
          register={register}
          required={false}
        />
      </div>

      <div className="formInput">
        <FormControl>
          <InputLabel htmlFor="password">{t("password")}</InputLabel>
          <OutlinedInput
            {...register("password", {
              required: true,
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                message:
                  "Password must contain Uppercase, Lowercase and Numbers",
              },
              validate: {
                minLength: (v) =>
                  v.length >= 6 ||
                  "The password length must less then 6 characters",
              },
            })}
            id="password"
            label={t("password")}
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={(value) => {
              setPassword(value.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
          {errors?.password?.type === "required" && (
            <p className="error">Password is required</p>
          )}
        </FormControl>
      </div>

      <div className="formInput">
        <FormControl>
          <InputLabel htmlFor="password">{t("confirm password")}</InputLabel>
          <OutlinedInput
            {...register("passwordConfirmation", {
              required: true,
              validate: {
                passwordsMatch: (value) => {
                  // console.log(value)
                  if (value === password) {
                    return true;
                  }
                  return "Passwords do not match";
                },
              },
            })}
            id="confirm-password"
            label={t("confirm password")}
            type={values.showPasswordConfirmation ? "text" : "password"}
            value={values.passwordConfirmation}
            onChange={(value) => {
              setPasswordConfirmation(value.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordConfirmation}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPasswordConfirmation ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.passwordConfirmation && (
            <p className="error">{errors.passwordConfirmation?.message}</p>
          )}
          {errors?.passwordConfirmation?.type === "required" && (
            <p className="error">Password is required</p>
          )}
        </FormControl>
      </div>
      <div className="formInput">
        <Controller
          name="country"
          control={control}
          defaultValue={null} // Use null for default
          rules={{
            required: "Country is required",
            validate: (value) => value !== "" || "Select at a Country",
          }}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={countryOptions}
              value={selectedCountry} // Controlled value from the selected country state
              getOptionLabel={(option) => option.label}
              isOptionEqualToValue={(option, value) =>
                option.value === value.value
              } // Compare by country value
              onChange={handleCountryChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Country"
                  error={!!errors.country}
                  helperText={errors.country ? errors.country.message : ""}
                />
              )}
            />
          )}
        />
      </div>
      {selectedCountry?.value === "DZ" ? ( // Check if selected country is Algeria
        <>
          <div className="formInput city-district">
            <div className="city">
              <Controller
                name="wilaya"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    options={wilayas}
                    fullWidth
                    getOptionLabel={(option) => option.name}
                    onChange={handleWilayaChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Wilaya"
                        error={!!errors.wilaya}
                        helperText={errors.wilaya ? "Wilaya is required" : ""}
                      />
                    )}
                  />
                )}
                rules={{
                  required: "Wilaya is required",
                  validate: (value) => value !== "" || "Select at a wilaya",
                }}
              />
            </div>
            <div className="district">
              <Controller
                name="town"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    fullWidth
                    options={towns}
                    
                    onChange={handleTownChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Town"
                        error={!!errors.town}
                        helperText={errors.town ? "Town is required" : ""}
                      />
                    )}
                  />
                )}
                rules={{
                  required: "Town is required",
                  validate: (value) => value !== "" || "Select at a Town",
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="formInput city-district">
            <div className="city">
              <TextField
                id="city"
                fullWidth
                label="City"
                variant="outlined"
                {...register("city", { required: true })}
                onChange={handleInput}
              />
              {errors.city && <p className="error">City is required</p>}
            </div>
            <div className="district">
              <TextField
                id="district"
                fullWidth
                label="District"
                variant="outlined"
                {...register("district", { required: true })}
                onChange={handleInput}
              />
              {errors.district && <p className="error">District is required</p>}
            </div>
          </div>
        </>
      )}

      <div className="formInput">
        <TextField
          {...register("address", { required: true })}
          id="address"
          label={t("address")}
          variant="outlined"
          onChange={handleInput}
        />
        {errors.address && <p className="error">{errors.address?.message}</p>}
        {errors?.address?.type === "required" && (
          <p className="error">Address is required</p>
        )}
      </div>
      <div className="button-group first-form">
        <button type="submit" className="active">
          {"next >"}
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
