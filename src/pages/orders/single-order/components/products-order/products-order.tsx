import "./products-order.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useHandleOrderProducts from "../../hooks/use-order-products";
import AddProductDialog from "pages/orders/single-order/pop-up/add-produc/add-product";
import EditProductDialog from "pages/orders/single-order/pop-up/edit-product/edit-product";
import ProductsOrderCard from "../product-order-card/product-order-card";
import DeleteProductDialog from "../../pop-up/delete-product/delete-product";
import { EnumOrderStatus } from "statics/enums";

const ProductsOrder = ({
  orderInfo,
  updateOrderProducts,
  fetchSingleData,
  productType,
  orderType
}) => {
  const {
    openAddProduct,
    setOpenAddProduct,
    handleOpenAddProductDialog,
    handleCloseAddProductDialog,
    productsToShow,
    productToDelete,
    openWarningDeleteProduct,
    handleClickDeleteProduct,
    handleCloseDeleteProductPopup,
    openEditProduct,
    setOpenEditProduct,
    productToEdit,
    handleEditProduct,
    handleCloseEditProductDialog,
  } = useHandleOrderProducts(orderInfo);
  const products = productsToShow;

  return (
    <>
      <div className="container-products">
        {products.map((e) => (
          <ProductsOrderCard
            key={e._id}
            orderInfo={orderInfo}
            handleEditProduct={handleEditProduct}
            handleClickDeleteProduct={handleClickDeleteProduct}
            productInfo={e}
            orderType={orderType}
          />
        ))}
        {orderInfo.currentStatus === EnumOrderStatus.new && (
          <div className="add-product">
            <AddCircleIcon
              onClick={handleOpenAddProductDialog}
              className="add-icon"
              style={{ fontSize: 60, cursor: "pointer" }}
            />
          </div>
        )}
      </div>

      {orderInfo.currentStatus === EnumOrderStatus.new && (
        <>
          <DeleteProductDialog
            open={openWarningDeleteProduct}
            onClose={handleCloseDeleteProductPopup}
            orderInfo={orderInfo}
            productsToShow={productsToShow}
            productToDelete={productToDelete}
            updateOrderProducts={updateOrderProducts}
            fetchSingleData={fetchSingleData}
          />
          <AddProductDialog
            setOpen={setOpenAddProduct}
            open={openAddProduct}
            orderInfo={orderInfo}
            fetchSingleData={fetchSingleData}
            updateOrderProducts={updateOrderProducts}
            handleCloseAddProductDialog={handleCloseAddProductDialog}
            productsToShow={productsToShow}
            productType={productType}
          />
          <EditProductDialog
            setOpen={setOpenEditProduct}
            open={openEditProduct}
            productToEdit={productToEdit}
            orderInfo={orderInfo}
            handleCloseAddProductDialog={handleCloseEditProductDialog}
            productsToShow={productsToShow}
            updateOrderProducts={updateOrderProducts}
            fetchSingleData={fetchSingleData}
          />
        </>
      )}
    </>
  );
};

export default ProductsOrder;
