import {
  Modal,
  Box,
  FormControl,
  FormGroup,
  TextField,
  Button,
} from "@mui/material";
import { t } from "i18next";

const PaymentModal = ({
  open,
  handleClose,
  selectedProducts,
  //   handleProductSelect,
  amount,
  setAmount,
  note,
  setNote,
  handleConfirm,
  renderProducts,
}) => {
  // const [paymentTypes, setPaymentTypes] = useState({
  //   [EnumPaymentReason.purchase]: false,
  //   [EnumPaymentReason.shipping]: true,
  // });
  // const handlePaymentTypeChange = (event) => {
  //   const id = event.target.id;
  //   const value = event.target.checked;
  //   setPaymentTypes({ ...paymentTypes, [id]: value });
  //   setSelectedProducts([]);
  // };
  // const handleConfirm = async () => {
  // const reasons = Object.keys(paymentTypes).filter(
  //   (key) => paymentTypes[key] === true
  // );
  // const dataToSend = {
  //   products: selectedProducts,
  // reason: reasons.map((e) => Number(e)),
  //       sourcingId: sourcingInfo._id,
  //       note: note,
  //       withdraw: Number(amount),
  //     };

  //     try {
  //       await setSourcingPayment(dataToSend, dispatch);
  //       if (!error) {
  //         handleClose();
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // const renderProducts = () => {
  // let productsToRender = [];
  // switch (
  //   `${paymentTypes[EnumPaymentReason.purchase]}-${
  //     paymentTypes[EnumPaymentReason.shipping]
  //   }`
  // ) {
  //   case "true-true":
  //     productsToRender = sourcingInfo?.products?.filter(
  //       (product) =>
  //         product?.paymentPurchaseId === undefined &&
  //         product?.paymentShippingId === undefined
  //     );
  //     break;
  //   case "false-false":
  //     productsToRender = sourcingInfo?.products?.filter(
  //       (product) =>
  //         product?.paymentPurchaseId !== undefined &&
  //         product?.paymentShippingId !== undefined
  //     );
  //     break;
  //   case "true-false":
  //     productsToRender = sourcingInfo?.products?.filter(
  //       (product) => product?.paymentPurchaseId === undefined
  //     );
  //     break;
  //   case "false-true":
  //     productsToRender = sourcingInfo?.products?.filter(
  //       (product) => product?.paymentShippingId === undefined
  //     );
  //     break;
  //   default:
  //     // Code for other cases
  //     console.log("Default case");
  // }

  //     return sourcingInfo?.products?.map((product, index) => {
  //       if (!product?.paymentShippingId) {
  //         return (
  //           <FormControlLabel
  //             key={index}
  //             control={
  //               <Checkbox
  //                 checked={selectedProducts.includes(product._id)}
  //                 onChange={() => {
  //                   handleProductSelect(product._id);
  //                 }}
  //               />
  //             }
  //             label={
  //               <span
  //                 style={{
  //                   display: "flex",
  //                   alignItems: "center",
  //                 }}
  //               >
  //                 {product.productId.productId.name}{" "}
  //                 {product.productId.variations && (
  //                   <>
  //                     {Object.entries(product.productId.variations)
  //                       .filter(([key]) => key !== "color")
  //                       .map(([key, value], index) => (
  //                         <span key={index}>{value} </span>
  //                       ))}
  //                     {product.productId.variations.color &&
  //                       /^#([0-9A-F]{3}){1,2}$/i.test(
  //                         product.productId.variations.color
  //                       ) && (
  //                         <span
  //                           style={{
  //                             display: "inline-block",
  //                             width: "15px",
  //                             height: "15px",
  //                             borderRadius: "50%",
  //                             backgroundColor: product.productId.variations.color,
  //                             marginLeft: "5px",
  //                           }}
  //                         ></span>
  //                       )}
  //                   </>
  //                 )}
  //               </span>
  //             }
  //           />
  //         );
  //       }
  //     });
  //   };
  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="pop-up-pay"
      open={open}
      onClose={handleClose}
    >
      <Box
        sx={{
          width: 400,
          p: 4,
          backgroundColor: "white",
          margin: "auto",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <h2
          className="title"
          style={{ textAlign: "center", marginBottom: 20, marginTop: 0 }}
        >
          {t("Sourcing payment")}
        </h2>
        <h4>{t("payment reason")}</h4> */}

        {/* <FormControl
          component="fieldset"
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        > */}
        {/* <div className="payment-type">
            {Object.values(EnumPaymentReason).map((e, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={paymentTypes[e]}
                      id={e}
                      onChange={(event) => handlePaymentTypeChange(event)}
                    />
                  }
                  label={t(e)}
                />
              );
            })}
          </div> */}
        {/* </FormControl> */}

        <h4>{t("products")}</h4>
        <div className="products">
          <FormControl component="div" sx={{ mb: 2 }}>
            <FormGroup>
              {/* {sourcingInfo?.products?.map((product, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={selectedProducts.includes(product._id)}
                        onChange={() => {
                          console.log(product);
                          handleProductSelect(product._id);
                        }}
                      />
                    }
                    label={
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {product.productId.productId.name}{" "}
                        {product.productId.variations && (
                          <>
                            {Object.entries(product.productId.variations)
                              .filter(([key]) => key !== "color")
                              .map(([key, value], index) => (
                                <span key={index}>{value} </span>
                              ))}
                            {product.productId.variations.color &&
                              /^#([0-9A-F]{3}){1,2}$/i.test(
                                product.productId.variations.color
                              ) && (
                                <span
                                  style={{
                                    display: "inline-block",
                                    width: "15px",
                                    height: "15px",
                                    borderRadius: "50%",
                                    backgroundColor:
                                      product.productId.variations.color,
                                    marginLeft: "5px",
                                  }}
                                ></span>
                              )}
                          </>
                        )}
                      </span>
                    }
                  />
                );
              })} */}
              {renderProducts()}
            </FormGroup>
          </FormControl>
        </div>

        <h4>{t("details")}</h4>
        <div className="details">
          <TextField
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
          <textarea
            id="note"
            value={note}
            placeholder="Note"
            className="no-resize note"
            onChange={(e) => setNote(e.target.value)}
            rows="4" // Adjust the number of rows as needed
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleConfirm}
          disabled={
            !(
              !Number(amount) <= 0 &&
              // !!Object.values(paymentTypes).includes(true) &&
              !selectedProducts.length <= 0
            )
          }
        >
          Confirm
        </Button>
      </Box>
    </Modal>
  );
};

export default PaymentModal;
