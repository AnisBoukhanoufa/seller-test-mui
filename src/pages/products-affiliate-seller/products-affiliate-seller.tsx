import { useCallback, useState } from "react";
import "./products-affiliate-seller.scss";
import ProductsAffiliateSellerTableHeader from "./sections/product-affiliate-seller-table-header";
import { useSelector } from "react-redux";
import ProductAffiliateSellerFilter from "pages/products-affiliate-seller/pop-ups/product-affiliate-seller-filter/product-affiliate-seller-filter";
import ProductsList from "./sections/products-list";
import useQueryFilter from "hooks/pages-data/use-query-filter";
import { getProductAffiliateSeller } from "state/api-calls/product-affiliate-calls";
import usePageData from "./hooks/use-page-data";

const ListProductsAffiliateSeller = () => {
  const numberOfCardsToShow = 50;

  const products = useSelector(
    (state: any) => state.productAffiliateSeller.productsAffiliateSeller
  );

  const [filterOpen, setFilterOpen] = useState(false);

  const { queryFilter, setQueryFilter } = useQueryFilter({ isFavorite: true });

  const { paginationModel, setPaginationModel } = usePageData(
    queryFilter,
    getProductAffiliateSeller
  );

  const handleClear = useCallback((value: string) => {
    setQueryFilter({});
  }, []);
  return (
    <div className="listProductAffiliate">
      <div className="listContainer">
        <div className="listTable">
          <div className="products datatableProducts overflowPreventer">
            <ProductsAffiliateSellerTableHeader
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
              setFilterOpen={setFilterOpen}
              handleClear={handleClear}
            />
            <ProductAffiliateSellerFilter
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
            />
            <ProductsList
              paginationModel={paginationModel}
              setPaginationModel={setPaginationModel}
              products={products}
              numberOfCardsToShow={numberOfCardsToShow}
              numberOfTotalProducts={products.totalItems}
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductsAffiliateSeller;
