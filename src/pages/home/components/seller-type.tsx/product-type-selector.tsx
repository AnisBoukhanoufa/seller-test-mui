// SellerTypeSelector.js

import { t } from "i18next";

const ProductTypeSelector = ({ queryFilter, setQueryFilter }) => {
  const handleOrderTypeChange = (order) => {
    setQueryFilter({
      order,
      ...(queryFilter.paymentType
        ? { paymentType: queryFilter.paymentType }
        : {}),
    });
  };

  return (
    <div className="seller-type">
      <div
        className={`btn ${
          queryFilter?.order === "toopDrop" ? "selected-btn" : ""
        }`}
        onClick={() => handleOrderTypeChange("toopDrop")}
      >
        {t("Toop Drop")}
      </div>
      <div
        className={`btn ${
          queryFilter?.order === "seller" ? "selected-btn" : ""
        }`}
        onClick={() => handleOrderTypeChange("seller")}
      >
        {t("My Products")}
      </div>
    </div>
  );
};

export default ProductTypeSelector;
