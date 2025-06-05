import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useEditStatusDate from "../hooks/use-edit-status-date";
import EditDateDialog from "components/pop-ups/edit-date/edit-date";

const EditDateButton = ({
  orderInfo,
  status,
  updateOrderStatusDate,
  fetchSingleData,
}) => {
  const {
    openDateDialog,
    selectedDate,
    handleOpenDateDialog,
    handleChangeDate,
    handleSaveDate,
    closeDateDialog,
  } = useEditStatusDate(
    orderInfo,
    status,
    updateOrderStatusDate,
    fetchSingleData
  );
  return (
    <>
      <IconButton
        onClick={() => {
          handleOpenDateDialog();
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>

      <EditDateDialog
        open={openDateDialog}
        onClose={closeDateDialog}
        selectedDate={selectedDate}
        onDateChange={handleChangeDate}
        onSave={handleSaveDate}
      />
    </>
  );
};

export default EditDateButton;
