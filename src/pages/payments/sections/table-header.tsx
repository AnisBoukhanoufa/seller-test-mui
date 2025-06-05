import SearchBar from "components/search-bar/search-bar";
import { FC } from "react";

interface TableHeaderProps {
  queryFilter: any;
  setQueryFilter: any;
}
const TableHeader: FC<TableHeaderProps> = ({ queryFilter, setQueryFilter }) => {
  return (
    <div className="datatableTitle">
      <SearchBar queryFilter={queryFilter} setQueryFilter={setQueryFilter} />
    </div>
  );
};

export default TableHeader;
