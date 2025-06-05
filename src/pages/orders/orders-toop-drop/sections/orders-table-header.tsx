import React from "react";
import DropDownOrderType from "components/drop-downs/drop-down-order-type/drop-down-order-type";
import FilterButtonGroup from "components/button-group/filter-button-group/filter-button-group";
// import DownloadExcelButton from "components/buttons/download-excel";
import NewOrderButton from "../components/new-order-button.tsx/new-order-button";
import SearchBar from "components/search-bar/search-bar";
import ImportButton from "components/buttons/import-button";
import DownloadExcelButton from "../components/download-excel";

interface OrderToolbarProps {
  queryFilter: any;
  setQueryFilter: React.Dispatch<React.SetStateAction<any>>;
  paginationModel: any;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleExcelFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  downloadExcel: () => void;
}

const OrderToolbar: React.FC<OrderToolbarProps> = ({
  queryFilter,
  setQueryFilter,
  paginationModel,
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
          showAll={true}
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
        <DownloadExcelButton downloadExcel={downloadExcel} />
        <NewOrderButton />
      </div>
    </div>
  );
};

export default OrderToolbar;
