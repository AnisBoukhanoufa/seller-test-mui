import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { baseRequest } from "utils/request-methods";

const useProductsFilter = (productType) => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [choosenProduct, setChoosenProduct] = useState({
    _id: "",
    name: "",
    products: [],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const productName = searchParams.get("productName") || "";
      let link = "";
      if (productType === "seller") {
        link = `/product-seller/name-pagination?search=${productName}`;
      } else {
        link = `/product-affiliate/name-pagination?search=${productName}`;
      }
      if (link) {
        try {
          const res = await baseRequest.get(link);
          setProducts(res.data.list || []);
          if (productName) {
            setChoosenProduct(
              res.data.list.find((element) => element.name === productName)
            );
          }
        } catch (error) {
          setProducts([]);
        }
      }
    };
    fetchProducts();
  }, [productType, searchParams]);

  return { products, choosenProduct, setChoosenProduct, setProducts };
};

export default useProductsFilter;
