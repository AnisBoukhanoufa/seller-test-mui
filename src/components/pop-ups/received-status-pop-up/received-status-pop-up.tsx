import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { SourcingContext } from "pages/sourcings/single-sourcing/single-sourcing";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSourcingProductStatus } from "state/api-calls/sourcing-calls";
import { EnumSourcingStatus } from "statics/enums";
import { baseRequest } from "utils/request-methods";
import { useForm } from "react-hook-form";

const ReceivedStatusPopUp = ({
  product,
  openReceivedDialog,
  setOpenReceivedDialog,
}) => {
  const error = useSelector((state: any) => state.sourcing.error);
  const dispatch = useDispatch();
  const { sourcingInfo, setSourcingInfo } = useContext(SourcingContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {
      cartoons: product.numberOfCartoons || "",
      weight: product.weight || "",
      volume: product.volume || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // await updateSourcingProduct(
      //   sourcingInfo._id,
      //   {
      //     sourcingProductId: product._id,
      //     volume: data.volume,
      //     weight: data.weight,
      //     numberOfCartoons: data.cartoons,
      //   },
      //   dispatch
      // );
      await updateSourcingProductStatus(
        sourcingInfo._id,
        {
          status: EnumSourcingStatus.received,
          sourcingProductId: product._id,
          volume: data.volume,
          weight: data.weight,
          numberOfCartoons: data.cartoons,
        },
        dispatch,
      );
      if (!error) {
        const fetchData = async () => {
          const res = await baseRequest.get(
            `/sourcing/single/${sourcingInfo._id}`,
          );
          setSourcingInfo(res.data._doc);
        };
        fetchData();
      }
      setOpenReceivedDialog(false);
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={openReceivedDialog}
      onClose={() => setOpenReceivedDialog(false)}
    >
      <DialogTitle>Fill Received Product Details</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Number of Cartoons"
            fullWidth
            margin="normal"
            {...register("cartoons", { required: "This field is required" })}
            error={!!errors.cartoons && isSubmitted} // Show error only after submission
            helperText={errors.cartoons ? errors.cartoons.message : ""}
          />
          <TextField
            label="Weight (Kg)"
            fullWidth
            margin="normal"
            {...register("weight", { required: "This field is required" })}
            error={!!errors.weight && isSubmitted}
            helperText={errors.weight ? errors.weight.message : ""}
          />
          <TextField
            label="Volume (CBM)"
            fullWidth
            margin="normal"
            {...register("volume", { required: "This field is required" })}
            error={!!errors.volume && isSubmitted}
            helperText={errors.volume ? errors.volume.message : ""}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenReceivedDialog(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit(onSubmit)} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReceivedStatusPopUp;
