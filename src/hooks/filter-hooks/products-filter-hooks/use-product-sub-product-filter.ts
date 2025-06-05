import { useEffect } from "react";
import useSubProductsFilter from "./use-sub-product-filter";
import useProductsFilter from "./use-product-filter";

const useProductSubProductFilter = (productType, query, setQuery) => {
  const { products, choosenProduct, setChoosenProduct, setProducts } =
    useProductsFilter(productType);

  const { subProducts, choosenSubProduct, setChoosenSubProduct } =
    useSubProductsFilter(choosenProduct);

  useEffect(() => {
    if (choosenProduct?._id) {
      setQuery((prevVal) => ({ ...prevVal, productName: choosenProduct.name }));
    }
  }, [choosenProduct]);

  useEffect(() => {
    if (choosenSubProduct?._id) {
      setQuery((prevVal) => ({ ...prevVal, productId: choosenSubProduct._id }));
    }
  }, [choosenSubProduct]);

  useEffect(() => {
    if (!query.productName) {
      setChoosenProduct({ _id: "" });
    }
  }, [query.productName]);

  useEffect(() => {
    if (!query.productId) {
      setChoosenSubProduct({ _id: "" });
    }
  }, [query.productId]);
  return {
    products,
    setProducts,
    choosenProduct,
    setChoosenProduct,
    subProducts,
    choosenSubProduct,
    setChoosenSubProduct,
  };
};

export default useProductSubProductFilter;
