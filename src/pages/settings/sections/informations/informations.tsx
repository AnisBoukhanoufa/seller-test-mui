import { Box, Typography } from "@mui/material";
import "./informations.scss";
import { t } from "i18next";
import { useSelector } from "react-redux";

const InformationsSettings = () => {
  const seller = useSelector((state: any) => state.seller.currentSeller);

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
        {t("my informations")}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box className="item" sx={{ display: "flex" }}>
          <Box className="item-key" sx={{ flex: 1 }}>
            <Typography
              className="key-details"
              sx={{ color: "var(--color-gray)" }}
            >
              {t("username")}:
            </Typography>
          </Box>
          <Box className="item-value" sx={{ flex: 3 }}>
            <Typography>{seller.username}</Typography>
          </Box>
        </Box>
        <Box className="item" sx={{ display: "flex" }}>
          <Box className="item-key" sx={{ flex: 1 }}>
            <Typography
              className="key-details"
              sx={{ color: "var(--color-gray)" }}
            >
              {t("firstname")}:
            </Typography>
          </Box>
          <Box className="item-value" sx={{ flex: 3 }}>
            <Typography>{seller.firstName}</Typography>
          </Box>
        </Box>
        <Box className="item" sx={{ display: "flex" }}>
          <Box className="item-key" sx={{ flex: 1 }}>
            <Typography
              className="key-details"
              sx={{ color: "var(--color-gray)" }}
            >
              {t("lastname")}:
            </Typography>
          </Box>
          <Box className="item-value" sx={{ flex: 3 }}>
            <Typography>{seller.lastName}</Typography>
          </Box>
        </Box>
        <Box className="item" sx={{ display: "flex" }}>
          <Box className="item-key" sx={{ flex: 1 }}>
            <Typography
              className="key-details"
              sx={{ color: "var(--color-gray)" }}
            >
              {t("email")}:
            </Typography>
          </Box>
          <Box className="item-value" sx={{ flex: 3 }}>
            <Typography>{seller.email}</Typography>
          </Box>
        </Box>
        <Box className="item" sx={{ display: "flex" }}>
          <Box className="item-key" sx={{ flex: 1 }}>
            <Typography
              className="key-details"
              sx={{ color: "var(--color-gray)" }}
            >
              {t("phone")} 1 :
            </Typography>
          </Box>
          <Box className="item-value" sx={{ flex: 3 }}>
            <Typography>
              {seller.phone1
                ? `+${seller.phone1.code}${seller.phone1.number}`
                : "/"}
            </Typography>
          </Box>
        </Box>
        <Box className="item" sx={{ display: "flex" }}>
          <Box className="item-key" sx={{ flex: 1 }}>
            <Typography
              className="key-details"
              sx={{ color: "var(--color-gray)" }}
            >
              {t("phone")} 2 :
            </Typography>
          </Box>
          <Box className="item-value" sx={{ flex: 3 }}>
            <Typography>
              {seller.phone2
                ? `+${seller.phone2.code}${seller.phone2.number}`
                : "/"}
            </Typography>
          </Box>
        </Box>
        <Box className="item" sx={{ display: "flex" }}>
          <Box className="item-key" sx={{ flex: 1 }}>
            <Typography
              className="key-details"
              sx={{ color: "var(--color-gray)" }}
            >
              {t("country")}:
            </Typography>
          </Box>
          <Box className="item-value" sx={{ flex: 3 }}>
            <Typography>{seller.country}</Typography>
          </Box>
        </Box>
        <Box className="item" sx={{ display: "flex" }}>
          <Box className="item-key" sx={{ flex: 1 }}>
            <Typography
              className="key-details"
              sx={{ color: "var(--color-gray)" }}
            >
              {t("city")}:
            </Typography>
          </Box>
          <Box className="item-value" sx={{ flex: 3 }}>
            <Typography>{seller.city}</Typography>
          </Box>
        </Box>
        <Box className="item" sx={{ display: "flex" }}>
          <Box className="item-key" sx={{ flex: 1 }}>
            <Typography
              className="key-details"
              sx={{ color: "var(--color-gray)" }}
            >
              {t("district")}:
            </Typography>
          </Box>
          <Box className="item-value" sx={{ flex: 3 }}>
            <Typography>{seller.district}</Typography>
          </Box>
        </Box>
        <Box className="item" sx={{ display: "flex" }}>
          <Box className="item-key" sx={{ flex: 1 }}>
            <Typography
              className="key-details"
              sx={{ color: "var(--color-gray)" }}
            >
              {t("address")}:
            </Typography>
          </Box>
          <Box className="item-value" sx={{ flex: 3 }}>
            <Typography>{seller.address}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InformationsSettings;
