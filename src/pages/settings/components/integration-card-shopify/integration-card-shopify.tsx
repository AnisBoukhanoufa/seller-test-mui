import {
  Alert,
  AlertProps,
  Box,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import "./integration-card-shopify.scss";
import shopifyLogo from "assets/stores/shopify.svg";
import codToopLogo from "assets/logo.png";
import { baseRequest } from "utils/request-methods";
import { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import SyncAltTwoToneIcon from "@mui/icons-material/SyncAltTwoTone";
const IntegrationCardShopify = () => {
  //handle get link
  const [snackbar, setSnackbar] = useState<Pick<
    AlertProps,
    "children" | "severity"
  > | null>(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const getLink = async () => {
    try {
      const res = await baseRequest.get(`/shopify/get-webhook-link`);
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
    <Box className="integration-card">
      <Box className="card-images" sx={{ flex: 1 }}>
        <img src={codToopLogo} alt="" className="logo-icon" />
        <SyncAltTwoToneIcon
          fontSize="large"
          sx={{
            color: "var(--color-main)",
          }}
        />
        <img src={shopifyLogo} alt="" className="logo-icon" />
      </Box>

      <Box className="card-details">
        <Typography variant={"h3"} className="card-title">
          CODTOOP + Shopify
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

export default IntegrationCardShopify;
