import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TermsAndConditions from "../terms-and-conditions/terms-and-conditions";
import { useDispatch, useSelector } from "react-redux";
import LoadingAnimation from "components/loading/loading";
import { registerInit } from "state/seller-redux";

function ConfirmationSection({
  data,
  handleBack,
  handleNext,
  setData,
  handleSub,
}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isAcceptTerms: data?.isAcceptTerms, // default is unchecked
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(registerInit());
  }, []);
  const { isFetching, error } = useSelector((state: any) => state.seller);
  const [openTermsDialog, setOpenTermsDialog] = useState(false); // Dialog state

  const handleTermsClick = () => {
    setOpenTermsDialog(true); // Open the dialog on click
  };

  const handleCloseTermsDialog = () => {
    setOpenTermsDialog(false); // Close the dialog
  };

  // const onSubmitFinal = (formData) => {
  //   if (data.isAcceptTerms) {
  //     handleNext(formData); // Pass the accepted terms to handleNext
  //   }
  // };

  const onSubmitFinal = () => {
    handleSub();
  };
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setData((prevData) => ({ ...prevData, isAcceptTerms: isChecked })); // Update data state with checkbox value
  };

  const [disableSubmitButton, setDisableSubmitButton] = useState(false);

  useEffect(() => {
    if (isFetching === true) {
      setDisableSubmitButton(true);
    } else setDisableSubmitButton(false);
  }, [isFetching, error]);

  return (
    <form onSubmit={handleSubmit(onSubmitFinal)} className="form">
      <div className="section">
        <div className="titleContainer">
          <h1 className="title">{t("Personnel info")}</h1>
          <div className="separator" />
        </div>

        <div className="detailItem">
          <span className="itemKey">First Name:</span>
          <span className="valueKey">{data?.firstName}</span>
        </div>
        <div className="detailItem">
          <span className="itemKey">LastName:</span>
          <span className="valueKey">{data?.lastName}</span>
        </div>
        <div className="detailItem">
          <span className="itemKey">Email:</span>
          <span className="valueKey">{data?.email}</span>
        </div>
        <div className="detailItem">
          <span className="itemKey">Phone 1:</span>
          <span className="valueKey">
            {"+"}
            {data?.phone1}
          </span>
        </div>
        <div className="detailItem">
          <span className="itemKey">Phone 2:</span>
          <span className="valueKey">{data.phone2}</span>
        </div>
        <div className="detailItem">
          <span className="itemKey">Country:</span>
          <span className="valueKey">{data?.country?.label}</span>
        </div>
        {data.wilaya && (
          <div className="detailItem">
            <span className="itemKey">Wilaya:</span>
            <span className="valueKey">{data?.wilaya?.name}</span>
          </div>
        )}
        {data.town && (
          <div className="detailItem">
            <span className="itemKey">Town:</span>
            <span className="valueKey">{data?.town?.name}</span>
          </div>
        )}
        {data.city && (
          <div className="detailItem">
            <span className="itemKey">City:</span>
            <span className="valueKey">{data?.city}</span>
          </div>
        )}
        {data.district && (
          <div className="detailItem">
            <span className="itemKey">District:</span>
            <span className="valueKey">{data?.district}</span>
          </div>
        )}
        <div className="detailItem">
          <span className="itemKey">Address:</span>
          <span className="valueKey">{data?.address}</span>
        </div>
      </div>
      <div className="section">
        <div className="titleContainer">
          <h1 className="title">{t("Additional info")}</h1>
          <div className="separator" />
        </div>
        <div className="detailItem">
          <span className="itemKey">Role:</span>
          <span className="valueKey">{t(data?.role)}</span>
        </div>
        <div className="detailItem">
          <span className="itemKey">Do you practice ecommerce:</span>
          <span className="valueKey">
            {data?.isPracticingCOD === "true" ? "Yes" : "No"}
          </span>
        </div>

        {data?.isPracticingCOD === "true" && (
          <>
            <div className="detailItem">
              <span className="itemKey">Average Order Daily:</span>
              <span className="valueKey">{data?.dailyOrderRate}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Monthly Income:</span>
              <span className="valueKey ">{data?.monthlyBusinessRate}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Market:</span>
              <span className="valueKey">
                {data?.market?.map((market) => t(market)).join(", ")}
              </span>
            </div>
          </>
        )}
        <div className="detailItem">
          <span className="itemKey">Niche:</span>
          <span className="valueKey">
            {data?.niche?.map((niche) => niche?.label).join(", ")}
          </span>
        </div>
        <div className="detailItem">
          <span className="itemKey">Do you have an online store:</span>
          <span className="valueKey">
            {data?.hasAnOnlineStore === "true" ? "Yes" : "No"}
          </span>
        </div>
        <div className="detailItem">
          <span className="itemKey">Bank Card:</span>
          <span className="valueKey">
            {data?.bankCard?.map((card) => t(card)).join(", ")}
          </span>
        </div>
        <div className="detailItem">
          <span className="itemKey">Do you have Business Manager:</span>
          <span className="valueKey">
            {data?.hasBM === "true" ? "Yes" : "No"}
          </span>
        </div>
        <div className="detailItem">
          <span className="itemKey">Capital:</span>
          <span className="valueKey">{data?.capital}</span>
        </div>
      </div>

      {/* Add other fields similarly */}
      <div className="formInput">
        <Controller
          name="isAcceptTerms"
          control={control}
          rules={{ required: "You must accept the terms and conditions" }}
          render={({ field }) => (
            <FormControlLabel
              className="terms-button"
              control={
                <Checkbox
                  {...field}
                  // onChange={handleCheckboxChange}
                  onChange={(event) => {
                    field.onChange(event.target.checked); // Update react-hook-form state
                    handleCheckboxChange(event); // Update local data state
                  }}
                  checked={field.value}
                />
              }
              label={
                <p className="terms-text">
                  {t("I agree to the")}{" "}
                  <Button
                    type="button"
                    className="dialog-link"
                    onClick={handleTermsClick}
                  >
                    {t("Terms and Conditions")}
                  </Button>
                </p>
              }
            />
          )}
        />
        {errors.isAcceptTerms && (
          <Typography color="error" variant="body2">
            {errors.isAcceptTerms.message}
          </Typography>
        )}
      </div>

      {/* Dialog for Terms & Conditions */}
      <TermsAndConditions
        open={openTermsDialog}
        onClose={handleCloseTermsDialog}
      />

      <div className="button-group second-form">
        <Button type="button" className="active" onClick={handleBack}>
          {"< previous "}
        </Button>
        <Button
          disabled={disableSubmitButton}
          type="submit"
          className="btn-primary0"
        >
          {isFetching ? <LoadingAnimation /> : t("confirm")}
        </Button>
      </div>
    </form>
  );
}

export default ConfirmationSection;
