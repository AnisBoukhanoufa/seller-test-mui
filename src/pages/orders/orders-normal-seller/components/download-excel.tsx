import { useState } from "react";
import { Button, Link, Menu, MenuItem } from "@mui/material";
import { queryToFilter } from "utils/functions";
import { getOrdersNormalSellerDataToDownload } from "state/api-calls/order-normal-seller-calls";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";


const DownloadExcelButton = ({ downloadExcel }) => {
  const dispatch = useDispatch();
  const [anchorElExcel, setAnchorElExcel] = useState(null);
  const openButtonExcel = Boolean(anchorElExcel);
  const [searchParams] = useSearchParams();

  const handleClickButtonExcel = (event) => {
    setAnchorElExcel(event.currentTarget);
  };

  const handleCloseButtonExcel = () => {
    setAnchorElExcel(null);
  };

  
  const handleDownloadExcel = async () => {
    const res = await getOrdersNormalSellerDataToDownload(
      queryToFilter(Object.fromEntries(searchParams.entries())),
      dispatch
    );
    console.log(res)
    downloadExcel(res.data.list);
    handleCloseButtonExcel();
  };
  return (
    <div>
      <Button
        variant="outlined"
        className="xls-button"
        onClick={handleClickButtonExcel}
      >
        Excel
      </Button>
      <Menu
        className="new-list"
        anchorEl={anchorElExcel}
        open={openButtonExcel}
        onClose={handleCloseButtonExcel}
      >
        <MenuItem
          sx={{
            borderColor: "var(--color-secondary)",
            backgroundColor: "white",
            borderBottom: "1px solid #E6E6E6",
            color: "var(--color-secondary)",
            "&:hover": {
              backgroundColor: "var(--color-secondary)",
              color: "white",
            },
          }}
          onClick={() => {
            handleDownloadExcel();
          }}
        >
          <span className="menu-excel">Download Orders</span>
        </MenuItem>
        <MenuItem
          sx={{
            borderColor: "var(--color-secondary)",
            backgroundColor: "white",
            color: "var(--color-secondary)",
            "&:hover": {
              backgroundColor: "var(--color-secondary)",
              color: "white",
            },
          }}
          onClick={() => {
            handleCloseButtonExcel();
          }}
        >
          {/* <span className="menu-excel">Download Template</span> */}
          <Link
            className="menu-excel"
            href="https://firebasestorage.googleapis.com/v0/b/cod-toop-3195b.appspot.com/o/assets%2Fcodtoop%20orders%20template.xlsx?alt=media&token=4ce93c4a-f778-4ee7-a5f3-fff943a652f8 "
            download
            underline="none"
            color="inherit"
          >
            Download Template
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DownloadExcelButton;
