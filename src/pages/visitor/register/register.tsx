import { useEffect, useState } from "react";
import Navbar from "../../../components/visitor/navbar/navbar";
import { useTranslation } from "react-i18next";
import "./register.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import PersonalInfo from "./sections/personal-info";
import AdditionalInfo from "./sections/additional-info";
import ConfirmationSection from "./sections/confirmation";
import { Stepper, Step, StepLabel } from "@mui/material";
import seller from "../../../assets/bseller.svg";
import affiliate from "../../../assets/baffiliate.svg";

import { EnumSellerRole } from "statics/enums";
import { registration } from "state/api-calls/seller-calls";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "firebase";
import { useDispatch } from "react-redux";
import { splitPhoneNumbers } from "utils/functions";

import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { registerInit } from "state/seller-redux";

const Register = () => {
  const { t } = useTranslation();

  const [role, setRole] = useState(null); // State to track selected role
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState({});
  const navigate = useNavigate(); // Initialize the navigate function

  const steps = ["Personal Infos", "Additional Infos", "Confirmation"];

  useEffect(() => {
    dispatch(registerInit());
  }, []);

  const [affiliatePopupOpen, setAffiliatePopupOpen] = useState(false);
  const handleRoleSelect = (selectedRole) => {
    if (selectedRole === EnumSellerRole.affiliate) {
      // setAffiliatePopupOpen(true); // Show the popup for the Affiliate role
    } else {
      setRole(selectedRole); // Set selected role
      setData({ ...data, role: selectedRole }); // Set selected role
    }
  };

  const handleNext = (currentData) => {
    setData({ ...data, ...currentData });
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
    setErrorMessage(false);
    setErrorText("");
  };

  const renderRoleSelection = () => (
    <div className="cards-container">
      <div
        className="role-card"
        onClick={() => handleRoleSelect(EnumSellerRole.seller)}
      >
        <img
          src={seller}
          alt="Seller Icon"
          className="role-icon"
          loading="lazy"
        />
        <h2>Join as a Seller</h2>
        <p>
          Become a part of COD TOOP and offer your products through our
          platform.
        </p>
      </div>
      <div
        className="role-card disabled"
        onClick={() => handleRoleSelect(EnumSellerRole.affiliate)}
      >
        <div className="ribbon">
          <span>Coming Soon</span>
        </div>
        <img
          src={affiliate}
          alt="affiliate Icon"
          className="role-icon"
          loading="lazy"
        />
        <h2>Join as an Affiliate</h2>
        <p>Join COD TOOP as an Affiliate and earn by promoting our products.</p>
        <div className="comming-soon-overlay">
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalInfo handleNext={handleNext} data={data} setData={setData} />
        );
      case 1:
        return (
          <AdditionalInfo
            handleBack={handleBack}
            handleNext={handleNext}
            data={data}
          />
        );

      case 2:
        return (
          <ConfirmationSection
            handleNext={handleNext}
            data={data}
            setData={setData}
            handleBack={handleBack}
            handleSub={handleSub}
          />
        );
      default:
        return null;
    }
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleFireBase = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data?.email.trim(),
        data?.password
      );
      const user = userCredential.user;

      // Send email verification
      sendEmailVerification(user);
    } catch (error) {
      setErrorText("failed to register, please try again");

      setErrorMessage(true);
    } finally {
      setLoading(false); // Stop the loader after the operation
    }
  };

  const handleSub = async () => {
    setLoading(true); // Start the loader
    setErrorText("");

    try {
      handleFireBase(data);
      await registration(dispatch, {
        ...data,
        phone1: splitPhoneNumbers(data.phone1),
        phone2: splitPhoneNumbers(data?.phone2),
        country: data.country.label,
        district: data?.town ? data.town : data.district,
        city: data?.wilaya?.name ? data.wilaya.name : data.city,
        email: data.email.trim().toLowerCase(),
        niche: data?.niche?.map((e) => e.value),
        isPracticingCOD: data.isPracticingCOD === "true",
        hasBM: data.hasBM === "true",
        hasAnOnlineStore: data.hasAnOnlineStore === "true",
      });
      // If registration is successful
      setOpen(!open);
    } catch (error) {
      // Handle errors from the registration process
      setErrorText(t("failed to register, please try again")); // Custom error message
      setErrorMessage(true);
    } finally {
      setLoading(false); // Stop the loader after the operation
    }
  };
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
    navigate("/");
  };

  return (
    <div className="register">
      <Dialog
        open={affiliatePopupOpen}
        onClose={() => setAffiliatePopupOpen(false)}
      >
        <DialogTitle>{t("Coming Soon")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("The Affiliate role will be added soon. Stay tuned!")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAffiliatePopupOpen(false)} color="primary">
            {t("Close")}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t("Successful Registration")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>{t("You have registered successfully.")}</div>
            <div>{t("please check your email to verify your account")}</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("close")}</Button>
        </DialogActions>
      </Dialog>
      <Navbar />
      {loading && (
        <div className="loader-container">
          <CircularProgress />
        </div>
      )}
      {!role ? (
        renderRoleSelection() // Render selection if no role is chosen
      ) : (
        <div className="register_container">
          <div className="register-form-container">
            <>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel
                      sx={{
                        "& .MuiStepLabel-label": {
                          fontSize: "0.75rem",
                        },
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              {errorMessage && (
                <div className="error-message">{t(errorText)} </div>
              )}
              {renderStepContent(activeStep)}{" "}
              {/* Render steps based on selection */}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
