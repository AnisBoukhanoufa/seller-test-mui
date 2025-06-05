import { FC } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { t } from "i18next";

interface SubProduct {
  _id: string;
  variations: { [key: string]: string };
}

interface SubProductAutocompleteProps {
  choosenProduct: any;
  choosenSubProduct: SubProduct;
  subProducts: any[];
  setChoosenSubProduct: (subProduct: SubProduct) => void;
}

const SubProductAutocomplete: FC<SubProductAutocompleteProps> = ({
  choosenProduct,
  subProducts,
  choosenSubProduct,
  setChoosenSubProduct,
  width = 350,
}) => {
  return (
    <Autocomplete
      sx={{ width }}
    
      disableClearable ={true}
      id="sub-product"
      options={subProducts || []}
      getOptionLabel={(option: SubProduct) => {
        if (!option.variations || Object.keys(option.variations).length === 0) {
          return choosenProduct?.name || "";
        }

        return Object.keys(option.variations)
          .map((key) => (key === "color" ? " " : ` ${option.variations[key]} `))
          .join("  ");
      }}
      value={choosenSubProduct?._id !== "" ? choosenSubProduct : { _id: "" }}
      onChange={(event: any, value: SubProduct) => {
        if (!value?._id) {
          setChoosenSubProduct({ _id: "", variations: {} });
        } else {
          setChoosenSubProduct(value);
        }
      }}
      renderOption={(props, option: SubProduct) => (
        <li {...props}>
          {option.variations && Object.keys(option.variations).length > 0 ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              {option.variations.color && (
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: option.variations.color,
                    marginRight: 10,
                    border: "1px solid #AAA",
                  }}
                ></div>
              )}
              {Object.entries(option.variations).map(
                ([key, value]) =>
                  key !== "color" && (
                    <pre key={key} style={{ marginRight: 2 }}>
                      {value}
                    </pre>
                  ),
              )}
            </div>
          ) : (
            <div>{choosenProduct?.name}</div>
          )}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t("sub-product")}
          placeholder={t("sub-product")}
          InputProps={{
            ...params.InputProps,
            startAdornment: choosenSubProduct?.variations?.color ? (
              <div
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 7,
                  borderRadius: "50%",
                  backgroundColor: choosenSubProduct.variations.color,
                  marginRight: 10,
                  border: "1px solid #ccc",
                }}
              ></div>
            ) : null,
          }}
        />
      )}
    />
  );
};

export default SubProductAutocomplete;
