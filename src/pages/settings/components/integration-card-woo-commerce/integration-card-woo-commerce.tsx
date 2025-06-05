import {
  Alert,
  AlertProps,
  Box,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import "./integration-card-woo-commerce.scss";
import wooCommerceLogo from "assets/stores/woo-commerce.svg";
import codToopLogo from "assets/logo.png";
import { baseRequest } from "utils/request-methods";
import { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import SyncAltTwoToneIcon from "@mui/icons-material/SyncAltTwoTone";
const IntegrationCardWooCommerce = () => {
  //handle get link
  const [snackbar, setSnackbar] = useState<Pick<
    AlertProps,
    "children" | "severity"
  > | null>(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const getLink = async () => {
    try {
      const res = await baseRequest.get(`/woo-commerce/get-webhook-link`);
      const link = res.data.link;
      await navigator.clipboard.writeText(link);
      setSnackbar({
        children: "Link Copied successfully",
        severity: "success",
      });
    } catch (error) {
      setSnackbar({
        children: "Link can not be copied",
        severity: "error",
      });
    }
  };
  return (
    <Box className="integration-card-woo-commerce">
      <Box className="card-images" sx={{ flex: 1 }}>
        <img src={codToopLogo} alt="" className="logo-icon-cod-toop" />
        <SyncAltTwoToneIcon
          fontSize="large"
          sx={{
            color: "var(--color-main)",
          }}
        />
        <img src={wooCommerceLogo} alt="" className="logo-icon-woo-commerce" />
      </Box>

      <Box className="card-details">
        <Typography variant={"h3"} className="card-title">
          CODTOOP + WooCommerce
        </Typography>
        <Box className="link-integration">
          <Tooltip title={`copy integration link`}>
            <LinkIcon className="link-icon" onClick={getLink} />
          </Tooltip>
        </Box>
      </Box>
      {!!snackbar && (
        <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={3000}>
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </Box>
  );
};

export default IntegrationCardWooCommerce;
