import { useState, useEffect } from "react";

interface SubProduct {
  _id: string;
  name?: string;
  variations: { [key: string]: string };
  products?: SubProduct[];
}

const useSubProducts = (choosenProduct: SubProduct) => {
  const [subProducts, setSubProducts] = useState<SubProduct[]>([]);
  const [choosenSubProduct, setChoosenSubProduct] = useState<SubProduct>({
    _id: "",
    variations: {},
  });

  useEffect(() => {
    if (choosenProduct?._id) {
      setSubProducts(choosenProduct.products || []);
      setChoosenSubProduct(
        choosenProduct.products?.[0] || { _id: "", variations: {} },
      );
    }
  }, [choosenProduct]);

  return { subProducts, choosenSubProduct, setChoosenSubProduct };
};

export default useSubProducts;
