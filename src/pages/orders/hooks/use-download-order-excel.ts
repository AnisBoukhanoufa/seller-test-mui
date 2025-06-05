import { utils, writeFile } from "xlsx"; // Make sure to install xlsx package
import { useCallback } from "react";
import { countryAbbrFromEnum } from "statics/statics";

const useExcelDownload = () => {
  const downloadExcel = useCallback((ordersData: any[]) => {
    console.log(ordersData)
    const dataFetch = ordersData.map((order) => {
      return {
        "full name": order.client.name,
        Phone: `+${order.client.phone.code}${order.client.phone.number}`,
        "City / Region": order.client.city,
        District: order.client.district,
        Address: order.client.address,
        "Product ID": order.products.map((obj) => obj.productId.id).join(","),
        Quantity: order.products
        .map((obj) => (obj.offer ? obj.offer.quantity : obj.quantity))
        .join(","),
        Price: order.totalPrice,
        From: countryAbbrFromEnum[order.warehouseId?.country],
        To: countryAbbrFromEnum[order.client.country],
        "Is Confirmed (yes/no)": order.isConfirmed ? "Yes" : "No",
        Note: order.note !== undefined ? order.note : "/",
      };
    });

    const worksheet = utils.json_to_sheet(dataFetch);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Orders");
    writeFile(workbook, "orders.xlsx");
  }, []);

  return { downloadExcel };
};

export default useExcelDownload;
