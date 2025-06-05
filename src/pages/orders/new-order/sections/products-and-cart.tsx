import { Button, TextField } from "@mui/material";
import ProductsAutocomplete from "components/autocomplete/products-autocomplete";
import SubProductAutocomplete from "components/autocomplete/sub-products-autocomplete";
import CartProduct from "components/cart-product/cart-product";
import CustomSnackbar from "components/snackbar/snackbar";
import { t } from "i18next";
import useCart from "../hooks/use-cart";

const ProductsCart = ({ sellerType, productType, cart, setCart }) => {
  const {
    products,
    setProducts,
    subProducts,
    quantityError,
    productError,
    clearErrors,
    quantity,
    setQuantity,

    choosenProduct,
    setChoosenProduct,
    choosenSubProduct,
    setChoosenSubProduct,
    handleAddToCart,
    handleRemoveProduct,
  } = useCart(sellerType, cart, setCart);

  return (
    <>
      <h3>{t("products")}</h3>
      <div className="formInput">
        <ProductsAutocomplete
          products={products}
          setProducts={setProducts}
          choosenProduct={choosenProduct}
          setChoosenProduct={setChoosenProduct}
          sellerType={sellerType}
          productType={productType}
          width={"100%"}
        />
      </div>
      <div className="formInput">
        <div className="sub-product-container">
          <SubProductAutocomplete
            choosenProduct={choosenProduct}
            subProducts={subProducts}
            choosenSubProduct={choosenSubProduct}
            setChoosenSubProduct={setChoosenSubProduct}
            width={"100%"}
          />
          <TextField
            id="quantity"
            label={t("quantity")}
            value={Number(quantity) || ""}
            type="number"
            variant="outlined"
            placeholder="0"
            inputProps={{ min: 1, step: 1 }}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      </div>
      <Button
        className="secondary-button"
        onClick={handleAddToCart}
        disabled={Number(quantity) < 0}
        type="button"
      >
        {t("add")}
      </Button>
      <div className="cartProductContainer">
        {cart.length > 0 &&
          cart.map((element) => (
            <CartProduct
              key={element.name + element._id}
              subProduct={element}
              handleRemoveProduct={handleRemoveProduct}
            />
          ))}
      </div>
      <CustomSnackbar
        open={quantityError}
        message={t("quantity must be greater than 0")}
        severity={"warning"}
        autoHideDuration={6000}
        onClose={clearErrors}
      />
      <CustomSnackbar
        open={productError}
        message={t("you need to select product first")}
        severity={"warning"}
        autoHideDuration={6000}
        onClose={clearErrors}
      />
    </>
  );
};

export default ProductsCart;
