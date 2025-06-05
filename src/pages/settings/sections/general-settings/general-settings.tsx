import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import "./general-settings.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateSettingsLanguage } from "state/settings-redux";

const GeneralSettings = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.settings.language);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSettingsLanguage((event.target as HTMLInputElement).value));
    i18n.changeLanguage((event.target as HTMLInputElement).value);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          textTransform: "capitalize",
          paddingBottom: 1,
          borderBottom: "1px solid var(--color-border)",
        }}
        className="general-settings-title"
      >
        {t("my settings")}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box className="item" sx={{ display: "flex" }}>
          <Box
            className="item-key"
            sx={{ flex: 1.5, display: "flex", flexDirection: "column" }}
          >
            <Typography
              className="key-title"
              sx={{ fontSize: 20, fontWeight: 500 }}
            >
              {t("language")}
            </Typography>
            <Typography
              className="key-details"
              sx={{ color: "var(--color-gray)" }}
            >
              {t("choose a language to work with")}
            </Typography>
          </Box>
          <Box className="item-key" sx={{ flex: 2.5 }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={language}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="en"
                  control={<Radio />}
                  label={t("english")}
                />
                <FormControlLabel
                  value="ar"
                  control={<Radio />}
                  label={t("arabic")}
                />
                <FormControlLabel
                  value="fr"
                  control={<Radio />}
                  label={t("french")}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralSettings;
