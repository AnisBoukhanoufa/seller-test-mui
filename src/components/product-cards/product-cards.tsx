import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { t } from "i18next";

const ProductCards = ({
  subProducts,
  setSubProducts,
  data,
  setSelectedSubProduct,
}) => {
  const removeProduct = (index) => {
    setSubProducts(subProducts.filter((_, i) => i !== index));
  };

  const isColor = (value) => /^#[0-9A-F]{6}$/i.test(value);

  const handleCardClick = (subProduct) => {
    setSelectedSubProduct(subProduct);
  };
console.log(subProducts)
  return (
    <Box display="flex" flexWrap="wrap" gap="30px">
      {subProducts.map((product, index) => (
        <Card
          sx={{
            height:`${product.details.length*1.7+5}em`,
            backgroundColor: product.isValid ? "#E5FFE5" : "#FFD9D9",
            border: product.isValid
              ? "2px solid var(--color-secondary)"
              : "2px solid red",
          }}
          className="card"
          onClick={() => {
            handleCardClick(product);
          }}
          key={index}
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
            {product.details.map((detailPair, idx) => (
              <Typography key={idx} component="div">
                <div
                  className="detail-pair"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="detail-key" style={{ marginRight: "8px" }}>
                    {detailPair.detail}:
                  </div>

                  {isColor(detailPair.value) ? (
                    <div
                      style={{
                        backgroundColor: detailPair.value,
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                      }}
                    ></div>
                  ) : (
                    <div
                      style={{
                        color: product.isValid
                          ? "var(--color-secondary)"
                          : "red",
                      }}
                      className="detail-value"
                    >
                      <strong>{detailPair.value}</strong>
                    </div>
                  )}
                </div>
              </Typography>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ProductCards;
