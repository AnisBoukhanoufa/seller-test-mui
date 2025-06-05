import { useEffect, useState } from "react";
import { IconButton, Button, Snackbar, Alert } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DetailPair from "components/detail-pair/detail-pair";
import CheckIcon from "@mui/icons-material/Check";
import { ProductVariation } from "statics/statics";
import { t } from "i18next";

const SubProductDetail = ({
  categories,
  setSubProducts,
  subProducts,
  images,
  selectedSubProduct,
  setSelectedSubProduct,
  offers,
  setCustomVariations,
}) => {
  const [details, setDetails] = useState([{ detail: "", value: "" }]);
  const [dropDownDetails, setDropDownDetails] = useState([]);
  const [showError, setShowError] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [newDetail, setNewDetail] = useState("");
  const [newDetailValues, setNewDetailValues] = useState("");
  const [showErrorDuplicate, setShowErrorDuplicate] = useState(false);
  ////////////////
  const [editVariations, setEditVariations] = useState(false);

  /////////////
  useEffect(() => {
    for (const detailKey in ProductVariation) {
      let hasCommonTags = ProductVariation[detailKey].tags.some((value) =>
        categories.includes(value)
      );
      if (hasCommonTags) {
        setDropDownDetails((prevValue) => {
          const alreadyExists = prevValue.some(
            (item) => item.detail === detailKey
          );

          if (alreadyExists) {
            return prevValue;
          }

          // Add the new detail if it doesn't already exist
          return [
            ...prevValue,
            {
              detail: detailKey,
              values: ProductVariation[detailKey].values,
            },
          ];
        });
        hasCommonTags = false;
      }
    }
  }, [categories]);

  const addDetail = () => {
    setDetails([{ detail: "", value: "" }, ...details]);
  };
  const enableEdit = () => {
    setEditVariations(true);
  };
  const saveEnabledEdit = () => {
    setEditVariations(false);
  };

  useEffect(() => {
    if (selectedSubProduct.idTemp !== "") {
      const subProductDetails = details.map((e) => {
        function findValue(value) {
          return value.detail === e.detail;
        }
        // console.log("ezaeza",selectedSubProduct.details.find(findValue).value)
        return {
          detail: e.detail,
          value: selectedSubProduct?.details?.find(findValue)?.value || "",
        };
      });
      console.log(subProductDetails);
      setDetails(subProductDetails);
    }
  }, [selectedSubProduct.idTemp]);

  const doesProductExist = (subProducts, newDetails) => {
    return subProducts?.some((subProduct) => {
      if (subProduct.details.length !== newDetails.length) return false;
      return subProduct.details.every((existingDetail) =>
        newDetails.some(
          (newDetail) =>
            existingDetail.detail === newDetail.detail &&
            existingDetail.value === newDetail.value
        )
      );
    });
  };

  const handleAddSubProduct = () => {
    const allValuesSet = details.every((detail) => detail.value !== "");

    if (!allValuesSet) {
      setShowError(true);
      return;
    }
    if (doesProductExist(subProducts, details)) {
      setShowErrorDuplicate(true);
      return;
    }
    if (images && !offers) {
      setSubProducts([
        ...subProducts,
        {
          idTemp: "id" + Math.random().toString(16).slice(2),
          images: images,
          details,
          isValid: true,
        },
      ]);
    } else if (offers) {
      setSubProducts([...subProducts, { images: images, offers, details }]);
    } else setSubProducts([...subProducts, { details }]);

    // Reset the value of each detail while keeping the detail key intact
    const resetValues = details.map((detail) => ({
      detail: detail.detail,
      value: "", // Reset the value
    }));

    // Update the details state with reset values
    setDetails(resetValues);
  };

  const handleSaveSubProductChange = () => {
    const allValuesSet = details.every((detail) => detail.value !== "");
    if (!allValuesSet) {
      setShowError(true);
      return;
    }
    if (doesProductExist(subProducts, details)) {
      setShowErrorDuplicate(true);
      return;
    }
    setSubProducts((previousState) => {
      const updatedSubProducts = [
        ...previousState.filter(
          (element) => element.idTemp !== selectedSubProduct.idTemp
        ),
        {
          ...selectedSubProduct,
          details,
          isValid: true,
        },
      ];
      return updatedSubProducts;
    });
    setSelectedSubProduct({ idTemp: "" });
    const resetValues = details.map((detail) => ({
      detail: detail.detail,
      value: "", // Reset the value
    }));
    setDetails(resetValues);
  };

  const handleCloseError = () => {
    setShowError(false);
    setShowErrorDuplicate(false);
  };

  //handle edit
  useEffect(() => {
    if (!editVariations) {
      const detailsToCompare = details
        .map((element) => {
          console.log(element.detail);
          return element.detail;
        })
        .toString();

      setSubProducts((previousState) => {
        const newState = previousState.map((subProduct, index) => {
          if (
            subProduct.details
              .map((singleDetail) => singleDetail.detail)
              .toString() === detailsToCompare
          ) {
            return { ...subProduct, isValid: true };
          } else return { ...subProduct, isValid: false };
        });
        return newState;
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
              onClick={saveEnabledEdit}
              className="plus-button"
            >
              <CheckIcon sx={{ fontSize: 28 }} />
            </IconButton>
          )}
          {(editVariations || subProducts?.length < 1) && (
            <IconButton
              sx={{ fontWeight: "bold", fontSize: "24px" }}
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
        {details.map((detailPair, index) => (
          <DetailPair
            setDropDownDetails={setDropDownDetails}
            dropDownDetails={dropDownDetails}
            detailPair={detailPair}
            setDetails={setDetails}
            details={details}
            index={index}
            subProducts={subProducts}
            editVariations={editVariations}
            setCustomVariations={setCustomVariations}
          />
        ))}
      </div>
      {selectedSubProduct.idTemp === "" ? (
        <Button
          className="add-sub-product"
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
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error">
          <span className="capitalize">
            {t("all values must be set before adding a sub-product!")}
          </span>
        </Alert>
      </Snackbar>
      <Snackbar
        open={showErrorDuplicate}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error">
          {t("item must not be the same!")}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SubProductDetail;
