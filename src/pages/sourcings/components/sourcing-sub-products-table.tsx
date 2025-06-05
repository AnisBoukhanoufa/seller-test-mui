import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import { t } from "i18next";

const SourcingSubProductsTable = ({ subProducts, setSubProducts }) => {
  return (
    <div className="bottom cards">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ flex: 1 }}>{t("product")}</TableCell>
              <TableCell sx={{ flex: 1 }}>{t("sub-product")}</TableCell>
              <TableCell sx={{ flex: 1 }}>{t("quantity")}</TableCell>
              <TableCell sx={{ width: 150 }}>{t("action")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subProducts.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="table-product cell">
                  <div className="cell-content">
                    {product.productName || "Product"}
                  </div>
                </TableCell>
                <TableCell>
                  <>
                    {!product.variations && product.productName}
                    {product.variations &&
                      Object.entries(product.variations)
                        .filter(([key]) => key !== "color")
                        .map(([key, value], index) => (
                          <span key={index}>{value} </span>
                        ))}
                    {product.variations?.color &&
                      /^#([0-9A-F]{3}){1,2}$/i.test(
                        product.variations.color,
                      ) && (
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: product.variations.color,
                            marginLeft: "5px",
                          }}
                        ></span>
                      )}
                  </>
                </TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      const updatedProducts = subProducts.filter(
                        (item, idx) => idx !== index,
                      );
                      setSubProducts(updatedProducts);
                    }}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SourcingSubProductsTable;
