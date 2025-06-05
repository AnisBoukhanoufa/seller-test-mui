import SearchBar from "components/search-bar/search-bar";
import NewSourcingButton from "../components/new-sourcing-button";

const SourcingTableHeader = ({ queryFilter, setQueryFilter }) => {
  return (
    <div className="datatableTitle">
      <SearchBar queryFilter={queryFilter} setQueryFilter={setQueryFilter} />
      <NewSourcingButton />
    </div>
  );
};

export default SourcingTableHeader;
