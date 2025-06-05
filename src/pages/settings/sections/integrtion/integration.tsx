import { Box, Grid, Typography } from "@mui/material";
import "./integration.scss";
import IntegrationCardShopify from "pages/settings/components/integration-card-shopify/integration-card-shopify";
import IntegrationCardWooCommerce from "pages/settings/components/integration-card-woo-commerce/integration-card-woo-commerce";
import { t } from "i18next";
import IntegrationCardAyor from "pages/settings/components/integration-card-ayor/integration-card-ayor";
const IntegrationSettings = () => {
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
        className="integration-title"
      >
       {t("third-party store integration")}
      </Typography>
      <Grid className="integration-cards">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <IntegrationCardShopify />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <IntegrationCardWooCommerce />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <IntegrationCardAyor />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IntegrationSettings;
