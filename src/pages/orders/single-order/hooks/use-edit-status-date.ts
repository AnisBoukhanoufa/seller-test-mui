import { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";

const useEditStatusDate = (
  orderInfo,
  status,
  updateOrderStatusDate,
  fetchSingleData
) => {
  const dispatch = useDispatch();

  const [openDateDialog, setOpenDateDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleOpenDateDialog = () => {
    setSelectedDate(
      status.date ? moment(status.date).format("YYYY-MM-DD") : ""
    );
    setOpenDateDialog(true);
  };
  const closeDateDialog = () => {
    setSelectedDate("");
    setOpenDateDialog(false);
  };

  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };

  const handleSaveDate = () => {
    handleDateUpdate();
    setOpenDateDialog(false);
  };

  const handleDateUpdate = async () => {
    const dataToSend = {
      date: selectedDate,
    };
    try {
      await updateOrderStatusDate(
        orderInfo._id,
        status._id,
        dataToSend,
        dispatch
      );
      await fetchSingleData();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    openDateDialog,
    selectedDate,
    handleOpenDateDialog,
    handleChangeDate,
    handleSaveDate,
    closeDateDialog,
  };
};

export default useEditStatusDate;
