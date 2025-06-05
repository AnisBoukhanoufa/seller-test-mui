import useProducts from "hooks/autocompletes-hooks/use-products";
import useSubProducts from "hooks/autocompletes-hooks/use-sub-products";
import { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addProduct, removeProducts } from "state/cart-redux";

const useCart = (sellerType, cart, setCart) => {
  const [quantity, setQuantity] = useState(0);
  const [quantityError, setQuantityError] = useState(false);
  const [productError, setProductError] = useState(false);

  const { products, choosenProduct, setChoosenProduct, setProducts } =
    useProducts(sellerType);

  const { subProducts, choosenSubProduct, setChoosenSubProduct } =
    useSubProducts(choosenProduct);

  const clearErrors = useCallback(() => {
    setProductError(false);
    setQuantityError(false);
  }, []);

  const clearProduct = useCallback(() => {
    setChoosenSubProduct({ _id: "" });
    setChoosenProduct({
      _id: "",
      name: "",
      products: [],
    });
    setQuantity(1);
    clearErrors();
  }, [clearErrors, setChoosenProduct, setChoosenSubProduct]);

  useEffect(() => {
    clearProduct();
  }, [cart.length, clearProduct]);

  const handleValidateAddProduct = useCallback(() => {
    //check if product is selected
    if (choosenSubProduct._id === "") {
      setProductError(true);
      return false;
    }
    // check if quantity is greater than 0
    if (Number(quantity) < 1) {
      setQuantityError(true);
      return false;
    }
    return true;
  }, [choosenSubProduct._id, quantity]);

  const handleAddToCart = () => {
    if (handleValidateAddProduct()) {
      //create product to add object
      const productToAdd = {
        ...choosenSubProduct,
        name: choosenProduct.name,
        productId: choosenSubProduct._id,
        quantity: Number(quantity),
      };

      //add product to cart
      setCart((prevVal) => {
        const newVals = [...prevVal];
        const item = newVals.find(
          (item: any) =>
            item._id === productToAdd._id &&
            item.isUpsell === productToAdd.isUpsell
        );
        if (item) {
          item.quantity += productToAdd.quantity;
        } else {
          newVals.unshift(productToAdd);
        }
        return [...newVals];
      });
      //clear all fields
      clearProduct();
    }
  };

  const handleRemoveProduct = (product) => {
    setCart((prevVal) => {
      const cartProducts = prevVal.filter(
        (item: any) =>
          !(item._id === product._id && item.isUpsell == product.isUpsell)
      );
      return cartProducts;
    });
  };

  return {
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
    handleRemoveProduct
  };
};
export default useCart;
