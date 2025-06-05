// import { Pagination } from "@mui/material";
import PaginationComponent from "components/pagination/pagination";
import Product from "components/product/product";

const ProductsList = ({
  numberOfTotalProducts,
  numberOfCardsToShow,
  paginationModel,
  setPaginationModel,
  products,
}) => {
  return (
    <>
      <div className="container-products">
        {products?.list.map((e) => (
          <Product key={e.id} info={e} type={"normal"} /> // Assuming 'id' is unique for each product
        ))}
      </div>
      <PaginationComponent
        numberOfTotalProducts={numberOfTotalProducts}
        numberOfCardsToShow={numberOfCardsToShow}
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
      />
    </>
  );
};

export default ProductsList;
