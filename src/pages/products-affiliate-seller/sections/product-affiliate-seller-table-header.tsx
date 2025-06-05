import SearchBar from "components/search-bar/search-bar";
import FilterButtonGroup from "components/button-group/filter-button-group/filter-button-group";
import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ProductsAffiliateSellerTableHeader = ({
  queryFilter,
  setQueryFilter,
  setFilterOpen,
  handleClear,

}) => {
  const handleToggleFavorites = () => {
    setQueryFilter((prev) => {
      const newQuery = { ...prev };
      if (prev.isFavorite) {
        delete newQuery.isFavorite;
      } else {
        newQuery.isFavorite = true;
      }
      return { ...newQuery };
    });
  };

  return (
    <div className="datatableTitle">
      <div className="searchBar">
        <SearchBar queryFilter={queryFilter} setQueryFilter={setQueryFilter} />

        {/* Toggle Button for Favorite/Global Products */}
        <IconButton
          onClick={handleToggleFavorites}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F1F1F1",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#D3D3D3" },
          }}
        >
          <StarIcon
            fontSize="large"
            sx={{
              color: queryFilter.isFavorite ? "var(--color-main)" : "#B3B3B3",
            }}
          />
        </IconButton>
        <FilterButtonGroup
          queryFilter={queryFilter}
          setFilterOpen={setFilterOpen}
          handleClear={handleClear}
          countColorFilter={1}
        />
      </div>
    </div>
  );
};

export default ProductsAffiliateSellerTableHeader;
