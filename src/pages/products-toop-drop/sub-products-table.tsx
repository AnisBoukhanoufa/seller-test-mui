import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import Offers from "components/cards/offers-card/offers-card";
import DeleteIcon from "@mui/icons-material/Delete"; // Icon for the delete button
const SubProductsTable = ({ products, setSubProducts, subProducts }) => {
  // Function to handle removal of a sub-product
  const removeSubProduct = (index) => {
    const updatedSubProducts = [...subProducts];
    updatedSubProducts.splice(index, 1); // Remove the product at the given index
    setSubProducts(updatedSubProducts);
  };

  return (
    <TableContainer
      sx={{
        marginTop: "20px",
        marginBottom: "20px",
      }}
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "5%", textAlign: "center" }}>
              Action
            </TableCell>
            <TableCell sx={{ width: "25%", textAlign: "center" }}>
              Variations
            </TableCell>
            <TableCell sx={{ width: "35%", textAlign: "center" }}>
              Offers
            </TableCell>
            <TableCell sx={{ width: "35%", textAlign: "center" }}>
              Images
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((product, index) => (
            <TableRow key={index}>
              <TableCell sx={{ width: "5%", textAlign: "center" }}>
                <IconButton
                  onClick={() => removeSubProduct(index)} // Call the onDelete function with the product index
                  color="error"
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
              {/* Variations: Map through each variation key-value pair */}
              <TableCell
                sx={{ width: "33.33%", textAlign: "center", padding: 1 }}
              >
                {Object.entries(product.variations).map(([key, value], i) => (
                  <div
                    key={i}
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    {key === "color" ? (
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: value,
                          borderRadius: "50%",
                          display: "inline-block",
                        }}
                        title={`Color: ${value}`}
                      ></div>
                    ) : (
                      <span>
                        {value}
                        {i < Object.entries(product.variations).length - 1
                          ? ", "
                          : ""}
                      </span>
                    )}
                  </div>
                ))}
              </TableCell>

              {/* Offers: Use Offers component */}
              <TableCell
                sx={{ width: "33.33%", textAlign: "center", padding: 1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    overflowX: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Offers offers={product.offers} />
                </Box>
              </TableCell>

              {/* Images: Display image previews (Scrollable Left/Right) */}
              <TableCell
                sx={{ width: "33.33%", textAlign: "center", padding: 1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    overflowX: "auto",
                    gap: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {product.images.map((image, i) => (
                    <div key={i}>
                      <img
                        src={URL.createObjectURL(image)}
                        alt={image.name}
                        style={{ width: 40, height: 40, objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SubProductsTable;
