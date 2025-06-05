import "./products-normal-seller.scss";
import { useSelector } from "react-redux";
import { getProductNormalSeller } from "state/api-calls/product-normal-seller-calls";

import ProductsNormalSellerDataGrid from "./sections/data-grid";
import ProductsNormalSellerTableHeader from "./sections/product-normal-seller-table-header";
import { EnumDisplayMode } from "statics/enums";
import ProductsList from "./sections/products-list";
import useQueryFilter from "hooks/pages-data/use-query-filter";
import usePageData from "./hooks/use-page-data";

const ListProductsNormalSeller = () => {
  const numberOfCardsToShow = 50;

  // const [filterOpen, setFilterOpen] = useState(false);
  const products =
    useSelector(
      (state: any) => state.productNormalSeller.productNormalSellers
    ) || [];

  const displayMode =
    useSelector((state: any) => state.productNormalSeller.displayMode) ||
    EnumDisplayMode.table;

  const { queryFilter, setQueryFilter } = useQueryFilter();

  const { paginationModel, setPaginationModel } = usePageData(
    queryFilter,
    getProductNormalSeller
  );

  return (
    <div className="listProductNormal">
      <div className="listContainer">
        <div className="listTable">
          <div className="products datatableProducts overflowPreventer">
            <ProductsNormalSellerTableHeader
              displayMode={displayMode}
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
            />

            {displayMode === EnumDisplayMode.table && (
              <ProductsNormalSellerDataGrid
                products={products}
                paginationModel={paginationModel}
                setPaginationModel={setPaginationModel}
              />
            )}

            {displayMode === EnumDisplayMode.cards && (
              <ProductsList
                paginationModel={paginationModel}
                setPaginationModel={setPaginationModel}
                products={products}
                numberOfCardsToShow={numberOfCardsToShow}
                numberOfTotalProducts={products.totalItems}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductsNormalSeller;
