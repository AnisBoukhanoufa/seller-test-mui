import { utils, writeFile } from "xlsx"; // Make sure to install xlsx package
import { useCallback } from "react";
import { countryAbbrFromEnum } from "statics/statics";

const useExcelDownload = (ordersData) => {


  const downloadExcel = useCallback(() => {
    const dataFetch = ordersData.map((order) => ({
      Fullname: order.client.name,
      Phone: `+${order.client.phone.code}${order.client.phone.number}`,
      District: order.client.district,
      "City / Region": order.client.city,
      To: countryAbbrFromEnum[order.client.country],
      Address: order.client.address,
      From: countryAbbrFromEnum[order.warehouseId?.country],
      "Product ID": order.products.map((obj) => obj.id).join(","),
      Quantity: order.products.map((obj) => obj.quantity).join(","),
      Price: order.totalPrice,
      "Is Confirmed (yes/no)": order.isConfirmed ? "Yes" : "No",
      Note: order.note !== undefined ? order.note : "/",
    }));

    const worksheet = utils.json_to_sheet(dataFetch);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Orders");
    writeFile(workbook, "orders.xlsx");
  }, []);

  return {  downloadExcel };
};

export default useExcelDownload;
