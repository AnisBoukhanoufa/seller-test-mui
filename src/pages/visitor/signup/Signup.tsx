import React, { useEffect, useState } from "react";
import Navbar from "../../../components/visitor/navbar/navbar";
import LoadingAnimation from "../../../components/loading/loading";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../../firebase";
import "./signup.css";
import {
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  Checkbox,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { login } from "state/api-calls/seller-calls";
import { loginInit } from "state/seller-redux";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { error, isFetching } = useSelector((state: any) => state.seller);

  const [values, setValues] = useState({ showPassword: false });
  const [checked, setChecked] = React.useState(false);

  const [open, setOpen] = useState({
    isOpened: false,
    message: "",
    dialogTitle: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorText, setErrorText] = useState("");
  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  
  const handleSub = async (data: any) => {
    const email = data.email.trim();
    try {
      await login(dispatch, { email, password: data.password });
    } catch (error) {
      let dialogMessage = "";
      let dialogTitle = "";

      if (error?.response?.data?.message === "EMAIL_NOT_VERIFIED") {
        dialogMessage = "check your email box and verify your account";
        dialogTitle = "Email Verification";
      } else if (error?.response?.data?.message === "EMAIL_NOT_FOUND") {
        dialogTitle = "Email Not Found";
        dialogMessage = "please check you email and try again";
      } else if (error?.response?.data?.message === "INVALID_PASSWORD") {
        dialogTitle = "Invalid Password";
        dialogMessage = "please check you password and try again";
      } else {
        dialogTitle = "Unexpected Error";
        dialogMessage =
          "Please try again. If the problem persists, please contact our support team for assistance.";
      }
      
      setOpen({
        isOpened: true,
        message: dialogMessage,
        dialogTitle: dialogTitle,
      });
    }
    // signInWithEmailAndPassword(auth, email, data.password)
    //   .then(async (userCredential) => {
    //     try {
    //       if (userCredential.user.emailVerified) {
    //         await login(dispatch, { email, password: data.password });
    //       } else {
    //         // sendEmailVerification(userCredential.user);
    //         setOpen({
    //           isOpened: true,
    //           message: "check your email box and verify your account",
    //           dialogTitle: "Email Verification",
    //         });
    //       }
    //       if (error) {
    //         setOpen({
    //           isOpened: true,
    //           message: errorMessage,
    //           dialogTitle: "Error",
    //         });
    //       }
    //     } catch (err: any) {
    //       const errorMessage = err.message;
    //       console.log(errorMessage);
    //       setOpen({
    //         isOpened: true,
    //         message: errorMessage,
    //         dialogTitle: "Error",
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     const errorCode = err.code;
    //     console.log(err.code)
    //     setErrorMessage(true);
    //     setErrorText(errorCode);
    //   });
  };

  useEffect(() => {
    dispatch(loginInit());
  }, []);

  const handleClose = () => {
    setOpen({ isOpened: false, message: "" });
  };

  return (
    <div className="signup">
      <Dialog open={open.isOpened} onClose={handleClose}>
        <DialogTitle>
          {t(
            open.dialogTitle ||
              "An error occurred. Please contact our support team for assistance in resolving this issue."
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t(open.message)
              .split("\n")
              .map((e: string) => (
                <div>{e}</div>
              ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("close")}</Button>
        </DialogActions>
      </Dialog>
      <Navbar />
      <div className="signup_container">
        <div className="form-container">
          <h2>{t("sign in")}</h2>

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
              />
              {errors.email && (
                <p className="error">{errors?.email?.message}</p>
              )}
              {errors?.email?.type === "required" && (
                <p className="error">Email is required</p>
              )}
            </div>

            <div className="formInput">
              <FormControl>
                <InputLabel htmlFor="password">{t("password")}</InputLabel>
                <OutlinedInput
                  {...register("password")}
                  id="password"
                  label="Mot de passe"
                  type={values.showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.password && (
                  <p className="error">{errors?.password?.message}</p>
                )}
              </FormControl>
            </div>

            <div className="login-forget">
              <Link to="/forgetpassword" style={{ textDecoration: "none" }}>
                <span>{t("forgot password")} </span>
              </Link>
              <span />
            </div>
            <div className="checkbox">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <span>{t("remember me")}</span>
            </div>
            <button
              className={`login ${
                isFetching ? "" : "btn-secondary-hover"
              } align-center`}
              disabled={isFetching}
            >
              {isFetching ? <LoadingAnimation /> : t("login")}
            </button>

            <div className="login-signup">
              <span>{t("dont have an account")}</span>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span className="login-signup-span">{t("sign up")}</span>
              </Link>
              <span />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
