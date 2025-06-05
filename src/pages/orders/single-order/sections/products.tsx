import { t } from "i18next";
import ProductsOrder from "pages/orders/single-order/components/products-order/products-order";

const ProductsSection = ({
  orderInfo,
  fetchSingleData,
  updateOrderProducts,
  productType,
  orderType
}) => {
  return (
    <div className="section productContainer">
      {/* Title and Separator */}
      <div className="sectionTitle">
        <div className="title">{t("products")}</div>
        <div className="separator"></div>
      </div>

      {/* Products Component */}
      <ProductsOrder
        orderInfo={orderInfo}
        updateOrderProducts={updateOrderProducts}
        fetchSingleData={fetchSingleData}
        productType={productType}
        orderType={orderType}
      />
    </div>
  );
};

export default ProductsSection;
