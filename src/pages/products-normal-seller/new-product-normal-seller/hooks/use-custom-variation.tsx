import { useState } from "react";

const useCustomVariations = (
  dropDownDetails,
  setCustomVariations,
  setDropDownDetails
) => {
  const [newDetail, setNewDetail] = useState("");
  const [newDetailValues, setNewDetailValues] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [newVariationError, setNewVariationError] = useState({});

  //helper functions

  //validate inputs
  const validateNewDetail = (newDetail, newDetailValues, dropDownDetails) => {
    if (dropDownDetails[newDetail]) {
      return {
        isValid: false,
        errorDetail: "This detail name already exists.",
      };
    }
    if (!newDetail) {
      return { isValid: false, errorDetail: "Please enter a detail name." };
    }
    if (!newDetailValues) {
      return { isValid: false, errorValues: "Please enter values." };
    }
    return { isValid: true };
  };

  //update states
  const addDetailToState = (newDetailObject) => {
    setCustomVariations((prevValue) => ({ ...prevValue, ...newDetailObject }));
    setDropDownDetails((prevValue) => ({ ...prevValue, ...newDetailObject }));
  };

  //   parse values
  const parseNewDetailValues = (values) => {
    return Array.from(
      new Set(
        values
          .split(",")
          .filter((value) => value.trim() !== "")
          .map((val) => val.trim())
      )
    );
  };

  //  reset inputs
  const resetInputs = () => {
    setNewDetail("");
    setNewDetailValues("");
    setOpenDialog(false);
  };

  const handleAddNewDetail = () => {
    setNewVariationError({});
    // Validation
    const validation = validateNewDetail(
      newDetail,
      newDetailValues,
      dropDownDetails
    );
    if (!validation.isValid) {
      setNewVariationError(validation);
      return;
    }

    // Parse the new detail values
    const parsedValues = parseNewDetailValues(newDetailValues);

    // Create the new detail object
    const newDetailObject = { [newDetail]: parsedValues };

    // Update states
    addDetailToState(newDetailObject);

    // Clear inputs and close the dialog
    resetInputs();
  };

  //handle closedialog
  const onCloseCustomVariationDialog = () => {
    setOpenDialog(false);
  };

  //handle change detail input
  const onDetailChange = (value) => {
    setNewDetail(value);
    setNewVariationError((prevValue) => {
      const newError = { ...prevValue };
      delete newError.errorDetail;
      return newError;
    });
  };

  //handle change values input
  const onValuesChange = (value) => {
    setNewDetailValues(value);
    setNewVariationError((prevValue) => {
      const newError = { ...prevValue };
      delete newError.errorValues;
      return newError;
    });
  };

  return {
    newVariationError,
    newDetail,
    newDetailValues,
    openDialog,
    handleAddNewDetail,
    onCloseCustomVariationDialog,
    onDetailChange,
    onValuesChange,
    setOpenDialog,
  };
};

export default useCustomVariations;
