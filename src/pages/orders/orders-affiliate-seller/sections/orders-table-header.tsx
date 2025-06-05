import React from "react";
import { Link } from "react-router-dom";
import DropDownOrderType from "components/drop-downs/drop-down-order-type/drop-down-order-type";
import { t } from "i18next";

import FilterButtonGroup from "components/button-group/filter-button-group/filter-button-group";
import SearchBar from "components/search-bar/search-bar";
import ImportButton from "components/buttons/import-button";
import DownloadExcelButton from "../components/download-excel";

interface OrderToolbarProps {
  queryFilter: any;
  setQueryFilter: React.Dispatch<React.SetStateAction<any>>;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleExcelFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  downloadExcel: any;
}

const OrderToolbar: React.FC<OrderToolbarProps> = ({
  queryFilter,
  setQueryFilter,
  setFilterOpen,
  handleExcelFileUpload,
  downloadExcel,
}) => {
  const handleClearFilter = () => {
    setQueryFilter((prevState) => {
      return { type: prevState.type };
    });
  };
  return (
    <div className="datatableTitle">
      <div className="searchBar">
        <SearchBar queryFilter={queryFilter} setQueryFilter={setQueryFilter} />
        <DropDownOrderType
          queryFilter={queryFilter}
          setQueryFilter={setQueryFilter}
        />
        <FilterButtonGroup
          queryFilter={queryFilter}
          setFilterOpen={setFilterOpen}
          handleClear={handleClearFilter}
          countColorFilter={1}
        />
      </div>

      <div className="buttons">
        <ImportButton
          label="import"
          handleExcelUpload={handleExcelFileUpload}
        />
        <DownloadExcelButton
          downloadExcel={downloadExcel}
        />
        <Link
          to={"/orders-affiliate-seller/new?country=local"}
          className="secondary-button"
        >
          {t("new")}
        </Link>
      </div>
    </div>
  );
};

export default OrderToolbar;
