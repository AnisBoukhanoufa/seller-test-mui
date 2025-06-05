import { Box, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import SyncAltTwoToneIcon from "@mui/icons-material/SyncAltTwoTone";
import { t } from "i18next";
const SettingSideBar = () => {
  return (
    <>
      {/* Sidebar */}
      <Box
        sx={{
          width: 200,
          bgcolor: "#",
          mt: 2,
          mb: 2,
          pr: 2,
          pl: 2,
          borderRight: "1px solid var(--color-border)",
        }}
      >
        <List sx={{ padding: 0, margin: 0 }}>
          {[
            {
              label: t("general"),
              path: "general",
              icon: (
                <DisplaySettingsIcon
                  fontSize="small"
                  sx={{ color: "var(--color-main)" }}
                />
              ),
            },
            {
              label: t("information"),
              path: "information",
              icon: (
                <InfoIcon
                  fontSize="small"
                  sx={{ color: "var(--color-main)" }}
                />
              ),
            },
            {
              label: t("integration"),
              path: "integration",
              icon: (
                <SyncAltTwoToneIcon
                  fontSize="small"
                  sx={{ color: "var(--color-main)" }}
                />
              ),
            },
          ].map((item) => (
            <ListItem
              key={item.path}
              button
              component={Link}
              to={item.path}
              replace // Prevents adding new history entries
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                padding: 0.5,
                color: "var(--color-main)",
                fontWeight: 500,
                mb: 1,
                bgcolor: location.pathname.includes(item.path)
                  ? "#DEEDFF"
                  : "transparent",
              }}
            >
              {item.icon}
              <ListItemText sx={{ fontWeight: "500" }} primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default SettingSideBar;
