import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface SubProduct {
  _id: string;
  name?: string;
  variations: { [key: string]: string };
  products?: SubProduct[];
}

const useSubProductsFilter = (choosenProduct: SubProduct) => {
  const [searchParams] = useSearchParams();
  const [subProducts, setSubProducts] = useState<SubProduct[]>([]);
  const [choosenSubProduct, setChoosenSubProduct] = useState<SubProduct>({
    _id: "",
    variations: {},
  });

  useEffect(() => {
    const productId = searchParams.get("productId") || "";
    if (choosenProduct?._id) {
      setSubProducts(choosenProduct.products || []);

      setChoosenSubProduct(
        choosenProduct?.products?.find(
          (element) => element._id === productId
        ) ??
          (choosenProduct.products?.[0] || { _id: "", variations: {} })
      );
    }
  }, [choosenProduct, searchParams]);

  return { subProducts, choosenSubProduct, setChoosenSubProduct };
};

export default useSubProductsFilter;
