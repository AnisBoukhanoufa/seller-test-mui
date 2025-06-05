import { getSourcing } from "state/api-calls/sourcing-calls";
import SourcingsDataGrid from "./sections/data-grid";
import SourcingTableHeader from "./sections/sourcing-table-header";
import { useSelector } from "react-redux";
import "./sourcings.scss";
import usePageData from "hooks/pages-data/use-page-data";
import useQueryFilter from "hooks/pages-data/use-query-filter";
const ListSourcing = () => {
  const sourcings = useSelector((state: any) => state.sourcing.sourcings) || {
    list: [],
  };

  const { queryFilter, setQueryFilter } = useQueryFilter();

  const { paginationModel, setPaginationModel } = usePageData(
    queryFilter,
    getSourcing
  );

  return (
    <div className="listData">
      <div className="listContainer">
        <div className="listTable">
          <div className="datatableSourcing overflowPreventer">
            <SourcingTableHeader
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
            />
            <SourcingsDataGrid
              sourcings={sourcings}
              paginationModel={paginationModel}
              setPaginationModel={setPaginationModel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSourcing;
