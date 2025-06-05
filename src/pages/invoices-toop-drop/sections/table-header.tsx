import FilterButtonGroup from "components/button-group/filter-button-group/filter-button-group";
import DropDownOrderType from "components/drop-downs/drop-down-order-type/drop-down-order-type";
import SearchBar from "components/search-bar/search-bar";
import React from "react";

interface TableHeaderProps {
  queryFilter: any;
  setQueryFilter: (filter: any) => void;
  setFilterOpen: (filter: any) => void;
  handleClear: (filter: any) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  queryFilter,
  setQueryFilter,
  setFilterOpen,
  handleClear,
}) => {
  return (
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
        handleClear={handleClear}
        countColorFilter={1}
      />
    </div>
  );
};

export default TableHeader;
