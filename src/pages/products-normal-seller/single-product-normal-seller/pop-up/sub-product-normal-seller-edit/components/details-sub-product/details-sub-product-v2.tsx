import { useEffect, useState } from "react";
import { IconButton, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DetailPair from "components/detail-pair/detail-pair-v2";
import CheckIcon from "@mui/icons-material/Check";
import { t } from "i18next";
import CustomSnackbar from "components/snackbar/snackbar";
import "./details-sub-product.scss";

const SubProductDetail = ({
  details,
  setSubProducts,
  subProducts,
  images,
  selectedSubProduct,
  setSelectedSubProduct,
  offers,
  customVariations,
  setCustomVariations,
}) => {
  //details and values
  const [dropDownDetails, setDropDownDetails] = useState({});
  //update drop down details with tags*
  const getChildrensVariations = (obj) => {
    //recursive function to get all childrens variations
    const result = {};
    const recurse = (currentObj) => {
      if (Array.isArray(currentObj)) return currentObj;
      if (typeof currentObj === "object" && currentObj !== null) {
        Object.entries(currentObj).forEach(([key, value]) => {
          const childResult = recurse(value);
          if (childResult) {
            result[key] = childResult;
          }
        });
      }
    };
    recurse(obj);
    return result;
  };

  useEffect(() => {
    setDropDownDetails({...getChildrensVariations(details),...customVariations});
  }, [details]);

  //handle current subProduct details
  const [currentDetails, setCurrentDetails] = useState(
    Object.keys(subProducts[0]?.variations || [])?.map((variation) => ({
      detail: variation,
      value: "",
    })) || [{ detail: "", value: "" }]
  );
  useEffect(() => {
    const newCurrentDetails = Object.keys(
      subProducts[0]?.variations ?? {}
    )?.map((variation) => ({
      detail: variation,
      value: "",
    }));
    setCurrentDetails(newCurrentDetails);
  }, [subProducts[0]?.variations]);

  const addDetail = () => {
    setCurrentDetails([{ detail: "", value: "" }, ...currentDetails]);
  };

  //handle edit variations details
  const [editVariations, setEditVariations] = useState(false);

  const enableEdit = () => {
    setEditVariations(true);
  };
  const saveEnabledEdit = () => {
    setEditVariations(false);
  };

  //put the values of selectedSubProduct on detail pair
  useEffect(() => {
    if (selectedSubProduct?.idTemp) {
      const subProductDetails = currentDetails.map((e) => {
        return {
          detail: e.detail,
          value: selectedSubProduct?.variations[e.detail] || "",
        };
      });
      setCurrentDetails(subProductDetails);
    }
  }, [selectedSubProduct?.idTemp]);

  //check if subProduct already exist function
  const doesProductExist = (subProducts, newDetails) => {
    return subProducts.some((subProduct) => {
      if (Object.keys(subProduct.variations).length !== newDetails.length) {
        return false;
      }
      return newDetails.every((newdetail) => {
        return subProduct.variations[newdetail.detail] === newdetail.value;
      });
    });
  };

  //handle click add sub product
  const handleAddSubProduct = () => {
    // 1. Check if all values are non-empty
    const allValuesSet = currentDetails.every((detail) => detail.value !== "");
    if (!allValuesSet) {
      setShowError(true);
      return;
    }
    // 2. Check for duplicates
    if (doesProductExist(subProducts, currentDetails)) {
      setShowErrorDuplicate(true);
      return;
    }
    // 3. Create an object from currentDetails
    const newVariations = currentDetails.reduce((acc, variation) => {
      return { ...acc, [variation.detail]: variation.value };
    }, {});
    // 4. Construct the new subProduct
    const newSubProduct = {
      idTemp: "id" + Math.random().toString(16).slice(2),
      variations: newVariations,
      isValid: true,
      ...(images ? { images: images } : {}),
      ...(offers ? { offers: offers } : {}),
    };

    // 5. Update subProducts state

    setSubProducts((prev) => [...prev, { ...newSubProduct, changed: true }]);

    // 6. Reset the value of each detail while keeping the detail key intact
    const resetValues = currentDetails.map((detail) => ({
      detail: detail.detail,
      value: "",
    }));
    setCurrentDetails(resetValues);
  };

  //handle save if change in subproduct that already existeds
  const handleSaveSubProductChange = () => {
    // 1. Check if all values are non-empty
    const allValuesSet = currentDetails.every((detail) => detail.value !== "");
    if (!allValuesSet) {
      setShowError(true);
      return;
    }

    // 2. Check if subProduct with same variations already exists
    if (
      doesProductExist(subProducts, currentDetails) &&
      selectedSubProduct.idTemp
    ) {
      setShowErrorDuplicate(true);
      return;
    }
    // 3. Update state
    const newVariations = currentDetails.reduce((acc, variation) => {
      return { ...acc, [variation.detail]: variation.value };
    }, {});
    setSubProducts((previousState) => {
      const updatedSubProducts = previousState.map((element) =>
        element.idTemp === selectedSubProduct.idTemp
          ? {
              ...element,
              variations: newVariations,
              isValid: true,
              changed: true,
            }
          : element
      );
      return updatedSubProducts;
    });

    // 4. Reset selected product and details
    setSelectedSubProduct({ idTemp: "" });
    const resetValues = currentDetails.map((detail) => ({
      detail: detail.detail,
      value: "", // Reset the value
    }));
    setCurrentDetails(resetValues);
  };

  // handle different errors of subProduct create and edit
  const [showError, setShowError] = useState(false);
  const [showErrorDuplicate, setShowErrorDuplicate] = useState(false);

  const handleCloseError = () => {
    setShowError(false);
    setShowErrorDuplicate(false);
  };

  //when change variations check if all sub product has the same variations
  useEffect(() => {
    if (!editVariations) {
      setSubProducts((prevSubProducts) => {
        return prevSubProducts.map((subProduct) => {
          // 1. Check if number of details matches
          if (
            currentDetails.length !==
            Object.keys(subProduct?.variations || {}).length
          ) {
            return { ...subProduct, isValid: false };
          }
          // 2. Check if subProduct has all the required details
          const hasAllDetails = currentDetails.every(
            (detail) => subProduct?.variations[detail.detail]
          );
          if (!hasAllDetails) {
            return { ...subProduct, isValid: false };
          }
          //else leave it like it was
          return subProduct;
        });
      });
    }
  }, [editVariations]);

  return (
    <div className="details">
      <div className="title">
        {t("details")}:
        <div className="buttons-container">
          {subProducts?.length > 0 && !editVariations && (
            <IconButton
              sx={{ fontWeight: "bold", fontSize: "24px" }}
              color="primary"
              type="button"
              onClick={enableEdit}
              className="plus-button"
            >
              <EditIcon sx={{ fontSize: 28 }} />
            </IconButton>
          )}
          {editVariations && (
            <IconButton
              sx={{ fontWeight: "bold", fontSize: "24px" }}
              color="primary"
              type="button"
              onClick={saveEnabledEdit}
              className="plus-button"
            >
              <CheckIcon sx={{ fontSize: 28 }} />
            </IconButton>
          )}
          {(editVariations || subProducts?.length < 1) && (
            <IconButton
              sx={{ fontWeight: "bold", fontSize: "24px" }}
              type="button"
              color="primary"
              onClick={addDetail}
              className="plus-button"
            >
              <AddCircleIcon sx={{ fontSize: 32 }} />
            </IconButton>
          )}
        </div>
      </div>

      <div className="detail-pair">
        {currentDetails.map((detailPair, index) => (
          <DetailPair
            setDropDownDetails={setDropDownDetails}
            dropDownDetails={dropDownDetails}
            detailPair={detailPair}
            setCurrentDetails={setCurrentDetails}
            currentDetails={currentDetails}
            index={index}
            subProducts={subProducts}
            editVariations={editVariations}
            setCustomVariations={setCustomVariations}
          />
        ))}
      </div>
      {selectedSubProduct?.idTemp === "" ? (
        <Button
          className="add-sub-product"
          type="button"
          variant="outlined"
          color="primary"
          fullWidth
          disabled={editVariations}
          sx={{
            "&.Mui-disabled": {
              color: "var(--color-gray) !important",
              borderColor: "var(--color-gray) !important",
            },
          }}
          onClick={handleAddSubProduct}
        >
          {t("add")}
        </Button>
      ) : (
        <Button
          className="add-sub-product"
          type="button"
          variant="outlined"
          color="primary"
          fullWidth
          disabled={editVariations}
          sx={{
            "&.Mui-disabled": {
              color: "var(--color-gray) !important",
              borderColor: "var(--color-gray) !important",
            },
          }}
          onClick={handleSaveSubProductChange}
        >
          {t("save")}
        </Button>
      )}

      {/* Error Snackbar */}
      <CustomSnackbar
        open={showError}
        message={t("all values must be set before adding a sub-product !")}
        severity={"warning"} // Default severity is 'info'
        autoHideDuration={6000}
        onClose={handleCloseError}
      />
      <CustomSnackbar
        open={showErrorDuplicate}
        message={t("this sub-product already exists !")}
        severity={"warning"} // Default severity is 'info'
        autoHideDuration={6000}
        onClose={handleCloseError}
      />
    </div>
  );
};

export default SubProductDetail;
