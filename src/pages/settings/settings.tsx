import { Box, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SettingSideBar from "./components/side-bar/side-bar";
import { t } from "i18next";

const SettingsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect to /settings/general when first visiting /settings
  useEffect(() => {
    if (location.pathname === "/settings") {
      navigate("/settings/general", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <Box sx={{ height: 1, display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h1"
        sx={{
          margin: 2,
          borderBottom: "1px solid var(--color-border)",
          paddingBottom: 1,
          fontSize: "36px",
          color: "var(--color-main)",
          fontWeight: "500",
        }}
      >
        {t("settings")}
      </Typography>
      <Box sx={{ display: "flex", flex: 1 }}>
        <SettingSideBar />
        {/* Content */}
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsPage;
