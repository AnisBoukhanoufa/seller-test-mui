import "./error-content.scss";
import { Box, Button, Typography } from "@mui/material";
import { t } from "i18next";

const ErrorContent = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <Box className="error-container">
      <Typography variant="h1">{t("Oops! Something went wrong.")}</Typography>
      <Typography>
        {t(
          " An unexpected error occurred. Please refresh the page to try again."
        )}
      </Typography>
      <Typography>
        {t("If the issue persists, please contact our support team.")}
      </Typography>
      <Button className="primary-button" onClick={handleRefresh} sx={{ mt: 2 }}>
        {t("Refresh Page")}
      </Button>
    </Box>
  );
};

export default ErrorContent;
