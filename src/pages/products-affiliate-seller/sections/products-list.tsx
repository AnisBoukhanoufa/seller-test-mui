import PaginationComponent from "components/pagination/pagination";
import Product from "components/product/product";
import { Button, Typography } from "@mui/material";

const ProductsList = ({
  numberOfTotalProducts,
  numberOfCardsToShow,
  paginationModel,
  setPaginationModel,
  products,
  queryFilter,
  setQueryFilter,
}) => {
  const hasNoFavorites =
    queryFilter?.isFavorite && (!products || products.list.length === 0);

  if (hasNoFavorites) {
    return (
      <div
        className="noFavoritesMessage"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: "24px", color: "var(--color-main)" }}
        >
          You don't have favorite products
        </Typography>
        <Typography
          variant="body1"
          style={{ margin: "1rem 0", color: "var(--color-gray)" }}
        >
          You should add products to favorites.
        </Typography>
        <Button
          className="primary-button"
          onClick={() => {
            setQueryFilter((prev) => {
              const newQuery = { ...prev };
              delete newQuery.isFavorite;
              return { ...newQuery };
            });
          }}
        >
          Show All Products
        </Button>
      </div>
    );
  }
  return (
    <>
      <div className="container-products">
        {products?.list.map((e) => (
          <Product key={e.id} info={e} type={"affiliate"} /> // Assuming 'id' is unique for each product
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
