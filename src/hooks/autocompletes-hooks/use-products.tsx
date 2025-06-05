import { useState, useEffect } from "react";
import { EnumSellerRole } from "statics/enums";
import { baseRequest } from "utils/request-methods";

const useProducts = (role: number) => {
  const [products, setProducts] = useState([]);
  const [choosenProduct, setChoosenProduct] = useState({
    _id: "",
    name:"",
    products: [],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      let link = "";
      if (role === EnumSellerRole.seller) {
        link = `/product-seller/name-pagination?`;
      } else if (role === EnumSellerRole.affiliate) {
        link = `/product-affiliate/name-pagination`;
      }
      if (link !== "") {
        try {
          const res = await baseRequest.get(link);
          setProducts(res.data.list);
        } catch (error) {
          setProducts([]);
          console.error("Error fetching products:", error);
        }
      }
    };
    fetchProducts();
  }, [role]);

  return { products, choosenProduct, setChoosenProduct, setProducts };
};

export default useProducts;
