import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryEnumFromNameAbbr } from "statics/statics";
import { EnumCountry, EnumSellerRole } from "statics/enums";

import { read, utils } from "xlsx"; // Make sure to install xlsx package
import { normalizeObjectKeys, splitPhoneNumbers } from "utils/functions";
import { setManyOrdersAffiliateSeller } from "state/api-calls/order-affiliate-calls";
import { setManyOrdersNormalSeller } from "state/api-calls/order-normal-seller-calls";

const useExcelImport = (setUploadOrders, sellerRole) => {
  const dispatch = useDispatch();
  const seller = useSelector((state: any) => state.seller.currentSeller);

  const [orders, setOrders] = useState([]);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleExcelFileUpload = useCallback(async (event) => {
    const requiredFields = [
      "fullname",
      "phone",
      "city/region",
      "district",
      "address",
      "productid",
      "quantity",
      "price",
      "from",
      "to",
      "isconfirmed(yes/no)",
    ];
    const file = event.target.files[0];
    const reader = new FileReader();
    const errors = []; // Array to collect error messages

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const sheetData = utils.sheet_to_json(worksheet);

      const parsedOrders = sheetData
        .map((row, rowIndex) => {
          let rowHasError = false; // Flag to check if there's an error in the row
          const newRow = normalizeObjectKeys(row);
          const missingFields = [];
          requiredFields.forEach((field) => {
            if (!newRow[field]) {
              missingFields.push(field); // Add missing field name to the list
            }
          });

          if (missingFields.length > 0) {
            errors.push(
              `Row ${
                rowIndex + 2
              }: Missing required fields - ${missingFields.join(", ")}`
            );
            rowHasError = true;
          }

          // Check if 'From' and 'To' are valid country codes
          const fromCountry =
            countryEnumFromNameAbbr[newRow["from"].toUpperCase()];
          const toCountry = countryEnumFromNameAbbr[newRow["to"].toUpperCase()];

          if (!fromCountry || !toCountry) {
            errors.push(
              `Row ${rowIndex + 2}: Invalid country codes in 'From' or 'To'`
            );
            rowHasError = true;
          }

          // Check if 'From' is KSA or UAE when 'From' and 'To' are different
          if (
            fromCountry !== toCountry &&
            ![EnumCountry.KSA, EnumCountry.UAE].includes(fromCountry)
          ) {
            errors.push(
              `Row ${
                rowIndex + 2
              }: 'From' country must be KSA or UAE when 'From' and 'To' are different`
            );
            rowHasError = true;
          }

          // Check if Product ID and Quantity lengths are the same
          const productsArray = newRow["productid"].split(",");
          const quantitiesArray = String(newRow["quantity"]).split(",");

          if (productsArray.length !== quantitiesArray.length) {
            errors.push(
              `Row ${
                rowIndex + 2
              }: 'Product ID' and 'Quantity' lengths do not match`
            );
            rowHasError = true;
          }

          // Validate price is a number
          const price = Number(newRow["price"]);
          if (newRow["price"] && isNaN(price)) {
            errors.push(`Row ${rowIndex + 2}: Price must be a valid number`);
            rowHasError = true;
          }

          // Validate confirmed field is "yes" or "no"
          const isConfirmed = String(
            newRow["isconfirmed(yes/no)"]
          ).toLowerCase();
          if (isConfirmed !== "yes" && isConfirmed !== "no") {
            errors.push(
              `Row ${rowIndex + 2}: Is Confirmed must be either "yes" or "no"`
            );
            rowHasError = true;
          }
          if (rowHasError) {
            return null; // Skip this row if there's any error
          }
          return {
            client: {
              name: newRow["fullname"],
              phone: splitPhoneNumbers(newRow["phone"]),
              district: newRow["district"],
              city: newRow["city/region"],
              address: newRow["address"],
              country: toCountry,
            },
            note: newRow["note"],
            isConfirmed: isConfirmed === "yes",
            warehouseCountry: fromCountry,
            products: productsArray.map((productId, index) => ({
              productId: productId,
              quantity: Number(quantitiesArray[index]),
            })),
            totalPrice: price,
          };
        })
        .filter((order) => order !== null); // Remove invalid rows

      if (errors.length > 0) {
        setErrorMessages(errors); // Set the error messages in state
        setShowModal(true); // Show the error modal
      } else {
        setOrders(parsedOrders); // Set the parsed orders
        setShowModal(true); // Show the modal with the Autocomplete component
      }
    };

    reader.readAsArrayBuffer(file);
    event.target.value = null;
  }, []);

  const handleConfirmExcelImport = useCallback(async () => {
    setShowModal(false);
    const dataToSend = {
      list: orders,
    };
    try {
      setUploadOrders(true);
      if (seller.role === EnumSellerRole.seller) {
        await setManyOrdersNormalSeller(dataToSend, dispatch);
      } else {
        await setManyOrdersAffiliateSeller(dataToSend, dispatch);
      }
      setUploadOrders(false);
    } catch (err) {
      setUploadOrders(false);
      console.log(err);
    }
  }, [orders, dispatch]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return {
    orders,
    errorMessages,
    showModal,
    handleExcelFileUpload,
    handleConfirmExcelImport,
    handleCloseModal,
  };
};

export default useExcelImport;
