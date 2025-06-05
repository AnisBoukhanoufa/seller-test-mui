import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { t } from "i18next";
import "./product-cards.scss";

const ProductCards = ({
  subProducts,
  setSubProducts,
  data,
  setSelectedSubProduct,
}) => {
  const removeProduct = (index) => {
    setSubProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const isColor = (value) => /^#[0-9A-F]{6}$/i.test(value);

  const handleCardClick = (subProduct) => {
    setSelectedSubProduct(subProduct);
  };

  return (
    <div className="sub-product-cards">
      <Box display="flex" flexWrap="wrap" gap="30px">
        {subProducts.map((product, index) => (
          <Card
            sx={{
              height: `${subProducts[subProducts.length - 1] * 1.8 + 5}em`,
              backgroundColor: product.isValid ? "#E5FFE5" : "#FFD9D9",
              border: product.isValid
                ? "2px solid var(--color-secondary)"
                : "2px solid red",
            }}
            className="card"
            onClick={() => {
              handleCardClick(product);
            }}
            key={product.idTemp}
          >
            <IconButton
              size="small"
              onClick={() => removeProduct(index)}
              className="delete-card"
              sx={{
                color: product.isValid ? "var(--color-secondary)" : "red",
                border: product.isValid
                  ? "2px solid var(--color-secondary)"
                  : "2px solid red",
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
            <CardContent className="sub-product-details">
              <Typography
                className="card-title"
                sx={{
                  color: product.isValid ? "var(--color-secondary)" : "red",
                }}
                variant="h6"
                component="div"
              >
                {data.name} {index + 1}
              </Typography>
              <Typography
                className="card-sub-title"
                variant="subtitle1"
                component="div"
              >
                {t("details")}:
              </Typography>
              {Object.keys(product.variations).map((variation, idx) => (
                <Typography key={idx} component="div">
                  <Box
                    className="detail-pair"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box className="detail-key" sx={{ marginRight: "8px" }}>
                      {variation}:
                    </Box>

                    {isColor(product.variations[variation]) ? (
                      <Box
                        sx={{
                          backgroundColor: product.variations[variation],
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                        }}
                      ></Box>
                    ) : (
                      <Box
                        sx={{
                          color: product.isValid
                            ? "var(--color-secondary)"
                            : "red",
                        }}
                        className="detail-value"
                      >
                        <strong>{product.variations[variation]}</strong>
                      </Box>
                    )}
                  </Box>
                </Typography>
              ))}
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default ProductCards;
