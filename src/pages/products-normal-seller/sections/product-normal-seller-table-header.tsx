import ProductsDisplay from "components/button-group/products-display-button-group/products-display-button-group";
import SearchBar from "components/search-bar/search-bar";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { changeDisplayMode } from "state/product-normal-seller-redux";

const ProductsNormalSellerTableHeader = ({
  queryFilter,
  setQueryFilter,
  displayMode,
}) => {
  return (
    <div className="datatableTitle">
      <div className="searchBar">
        <SearchBar queryFilter={queryFilter} setQueryFilter={setQueryFilter} />
      </div>
      <span style={{ display: "flex", gap: "20px" }}>
        <ProductsDisplay
          displayMode={displayMode}
          changeDisplayMode={changeDisplayMode}
        />
        <Link to={"/products-normal-seller/new"} className="secondary-button">
          {t("new")}
        </Link>
      </span>
    </div>
  );
};

export default ProductsNormalSellerTableHeader;
