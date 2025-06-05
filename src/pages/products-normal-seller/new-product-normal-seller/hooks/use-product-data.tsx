import { useState, useEffect } from "react";

const useProductData = (choosenCategories,images, setImages) => {
  const [data, setData] = useState({
    name: "",
    description: "",
    category: [],
    url: "",
  });

  // Handle categories
  useEffect(() => {
    setSubProducts([]);
    setData((prevValue) => ({
      ...prevValue,
      category: choosenCategories.map((element) => element.value),
    }));
  }, [choosenCategories]);

  
  //handle images change
  useEffect(() => {
    setData((prevValue) => ({ ...prevValue, images: images }));
  }, [images]);
  
  // Handle added custom variations
  const [customVariations, setCustomVariations] = useState([]); // { detail: "detailKey", value: "" }
  useEffect(() => {
    setData((prevValue) => ({ ...prevValue, customVariations }));
  }, [customVariations]);

  // Handle changed subProducts
  const [subProducts, setSubProducts] = useState([]);
  useEffect(() => {
    if (subProducts.length) {
      setData((prevValue) => ({ ...prevValue, subProducts }));
    }
    setImages([]);
  }, [subProducts]);

  // Handle input changes
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Handle sub product variations
  const [selectedSubProduct, setSelectedSubProduct] = useState({ idTemp: "" });

  return {
    data,
    setData,
    customVariations,
    setCustomVariations,
    subProducts,
    setSubProducts,
    handleInput,
    selectedSubProduct,
    setSelectedSubProduct,
  };
};

export default useProductData;
