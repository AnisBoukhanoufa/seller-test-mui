import {
  Alert,
  AlertProps,
  Box,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import "./integration-card-ayor.scss";
import ayorLogo from "assets/stores/ayor.svg";
import codToopLogo from "assets/logo.png";
import { baseRequest } from "utils/request-methods";
import { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import SyncAltTwoToneIcon from "@mui/icons-material/SyncAltTwoTone";
const IntegrationCardAyor = () => {
  //handle get link
  const [snackbar, setSnackbar] = useState<Pick<
    AlertProps,
    "children" | "severity"
  > | null>(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const getLink = async () => {
    try {
      const res = await baseRequest.get(`/ayor/get-token`);
      const token = res.data.content.token;
      console.log()
      await navigator.clipboard.writeText(token);
      setSnackbar({
        children: "token Copied successfully",
        severity: "success",
      });
    } catch (error) {
      setSnackbar({
        children: "token can not be copied",
        severity: "error",
      });
    }
  };
  return (
    <Box className="integration-card-ayor">
      <Box className="card-images" sx={{ flex: 1 }}>
        <img src={codToopLogo} alt="" className="logo-icon" />
        <SyncAltTwoToneIcon
          fontSize="large"
          sx={{
            color: "var(--color-main)",
          }}
        />
        <img src={ayorLogo} alt="" className="logo-icon" />
      </Box>

      <Box className="card-details">
        <Typography variant={"h3"} className="card-title">
          CODTOOP + Ayor
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

export default IntegrationCardAyor;
