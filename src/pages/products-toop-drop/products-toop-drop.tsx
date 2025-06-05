import { useCallback, useState } from "react";
import "./products-toop-drop.scss";
import ProductsToopDropTableHeader from "./sections/product-toop-drop-table-header";
import { useSelector } from "react-redux";
import ProductToopDropFilter from "pages/products-toop-drop/pop-ups/product-toop-drop-filter/product-toop-drop-filter";
import ProductsList from "./sections/products-list";
import useQueryFilter from "hooks/pages-data/use-query-filter";
import { getProductToopDrop } from "state/api-calls/product-toop-drop-calls";
import usePageData from "./hooks/use-page-data";

const ListProductsToopDrop = () => {
  const numberOfCardsToShow = 50;

  const products = useSelector(
    (state: any) => state.productToopDrop.productsToopDrop
  );

  const [filterOpen, setFilterOpen] = useState(false);

  const { queryFilter, setQueryFilter } = useQueryFilter({ isFavorite: true });

  const { paginationModel, setPaginationModel } = usePageData(
    queryFilter,
    getProductToopDrop
  );

  const handleClear = useCallback((value: string) => {
    setQueryFilter({});
  }, []);

  return (
    <div className="listProductAffiliate">
      <div className="listContainer">
        <div className="listTable">
          <div className="products datatableProducts overflowPreventer">
            <ProductsToopDropTableHeader
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
              setFilterOpen={setFilterOpen}
              handleClear={handleClear}
            />
            <ProductToopDropFilter
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

export default ListProductsToopDrop;
