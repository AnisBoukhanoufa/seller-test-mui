import { useState } from "react";
import { useForm } from "react-hook-form";
// import Navbar from "../../../components/visitor/navbar/navbar";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { auth } from "../../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import "./forget-password.css";
import Navbar from "../../../components/visitor/navbar/navbar";
const Forgetpassword = () => {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const handleSub = async () => {
    await sendPasswordResetEmail(auth, email.trim())
      .then((userCredential) => {
        setOpen(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(true);
        setErrorText(errorCode);
      });
  };

  const handleClose = () => {
    setOpen(!open);
    navigate("/");
  };

  const { t } = useTranslation();
  return (
    <div className="forgetpassword">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t("forgot password")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("please check your email to recover your password")}
            <div>{t("You have registered successfully.")}</div>
            <div>{t("please check your email to verify your account")}</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("close")}</Button>
        </DialogActions>
      </Dialog>
      <Navbar />
      <div className="signup_container">
        <div className="form-container">
          <h2>{t("forgot password")}</h2>
          <form className="form" onSubmit={handleSubmit(handleSub)}>
            {errorMessage && (
              <div className="error-message">{t(errorText)} </div>
            )}
            <div className="formInput">
              <TextField
                id="email"
                label={t("email")}
                variant="outlined"
                {...register("email", {
                  required: true,
                  validate: {
                    maxLength: (v) =>
                      v.length <= 50 ||
                      "The email should have at most 50 characters",
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email address must be a valid address",
                  },
                })}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
              {errors?.email?.type === "required" && (
                <p className="error">Email is required</p>
              )}
            </div>

            <button className="login">{t("send")}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
