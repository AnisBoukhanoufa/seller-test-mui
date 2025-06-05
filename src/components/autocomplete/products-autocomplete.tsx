import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { t } from "i18next";
import { inputHandleSearch } from "utils/functions";

interface Product {
  _id: string;
  name: string;
}

interface ProductsAutocompleteProps {
  choosenProduct: Product | null;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>; // Correctly typed here
  setChoosenProduct: React.Dispatch<React.SetStateAction<Product | null>>; // Ensure this is also typed
  width?: number;
  productType: string;
}

const ProductsAutocomplete: React.FC<ProductsAutocompleteProps> = ({
  products,
  setProducts,
  choosenProduct,
  setChoosenProduct,
  productType,
  width = 350,
}) => {
  const [prevtimeout, setPrevtimeout] = useState<NodeJS.Timeout | null>(null);

  // Handle input change with debounced search
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    let link = "";

    if (productType === "seller") {
      link = `/product-seller/name-pagination?search=${searchValue}`;
    } else {
      link = `/product-affiliate/name-pagination?search=${searchValue}`;
    }
    inputHandleSearch(link, setProducts, prevtimeout, setPrevtimeout);
  };

  // Render options for the Autocomplete dropdown
  const renderOptions = (props: any, option: Product) => (
    <li {...props} key={option._id}>
      {option.name}
    </li>
  );

  // Handle selection of a product
  const handleChange = (event: any, value: Product | null) => {
    if (value) {
      setChoosenProduct(value);
    } else {
      setChoosenProduct({ _id: "", name: "" });
    }
  };

  return (
    <Autocomplete
      sx={{ width }}
      onInput={handleInputChange}
      options={products}
      getOptionLabel={(option) => option?.name || ""}
      value={choosenProduct}
      onChange={handleChange}
      renderOption={renderOptions}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t("products")}
          placeholder={t("products")}
        />
      )}
    />
  );
};

export default ProductsAutocomplete;
