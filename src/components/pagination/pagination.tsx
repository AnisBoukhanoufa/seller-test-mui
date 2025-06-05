import Pagination from "@mui/material/Pagination";
import "./pagination.scss";
import { useSearchParams } from "react-router-dom";
const PaginationComponent = ({
  numberOfTotalProducts,
  numberOfCardsToShow,
  paginationModel,
  setPaginationModel,
}) => {
  const [_, setSearchParams] = useSearchParams();
  return (
    <div className="pagination">
      <Pagination
        onChange={(event, page) => {
          setSearchParams((prevVal) => {
            return {
              ...Object.fromEntries(Array.from(prevVal.entries())),
              page: page - 1,
            };
          });

          setPaginationModel({ ...paginationModel, page: page - 1 });
        }}
        count={Math.ceil(numberOfTotalProducts / numberOfCardsToShow)}
        page={paginationModel?.page + 1}
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            borderColor: "var(--color-main)",
            color: "var(--color-main)",
            fontWeight: "600", // Default color for non-selected items
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "var(--color-main)", // Background color of the selected item
            color: "white", // Text color of the selected item
          },
        }}
      />
    </div>
  );
};

export default PaginationComponent;
