import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./login.scss";
import { useForm } from "react-hook-form";
import { login } from "state/api-calls/employee-calls";
const Login = () => {
  const {
    register,
  } = useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state: any) => state.employee);
  const { t } = useTranslation();
  const handleClick = (e: any) => {
    e.preventDefault();
    try {
      login(dispatch, { username, password });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickShowPassword = (): any => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <div className="login">
          {!navigator.onLine && <div>No internet</div>}
          <h2>{t("login")}</h2>
          <form>
            <div className="formInput">
              <TextField
                id="username"
                label={t("username")}
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="formInput">
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  {t("password")}
                </InputLabel>
                <OutlinedInput
                  {...register("password", { required: true })}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>

            <button
              className="submit"
              type="submit"
              onClick={handleClick}
              disabled={isFetching}
            >
              {t("login")}
            </button>
          </form>
          <span>{t("forget your password")}</span>
          <div>
            <span>{t("dont tou have and account")}</span>
            <span>{t("Signup")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
